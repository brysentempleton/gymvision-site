import { NextResponse, type NextRequest } from "next/server";

export const dynamic = "force-dynamic";

// POST /api/demo-call — places a Vapi outbound call to the visitor's phone
// with the GymVision demo receptionist.
//
// Graceful degradation: if any of the required Vapi env vars are missing,
// the route falls back to "demo mode" — emails Brysen + returns a friendly
// "we'll be in touch" response. This lets the widget ship live with full
// UX before Vapi is configured for production.
//
// Required env (flip to live mode):
//   VAPI_API_KEY                        · server key from vapi.ai dashboard
//   VAPI_DEMO_ASSISTANT_ID              · shared "demo" assistant
//   VAPI_DEMO_PHONE_NUMBER_ID           · outbound caller-id Vapi phone
//
// Optional:
//   RESEND_API_KEY · for the demo-mode fallback email
//   DEMO_NOTIFY_TO · email to receive demo requests (default: Brysen)

const PHONE_RE = /\D/g;

// Simple per-process rate limit (1 call per phone per 24h). Replace with
// Upstash Redis when traffic justifies it.
const recentCalls = new Map<string, number>();
const DAY_MS = 24 * 60 * 60 * 1000;

function normalizePhone(raw: string): string | null {
  const digits = raw.replace(PHONE_RE, "");
  if (digits.length < 10 || digits.length > 15) return null;
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (raw.trim().startsWith("+")) return `+${digits}`;
  return `+${digits}`;
}

async function placeVapiCall(args: {
  apiKey: string;
  assistantId: string;
  phoneNumberId: string;
  toPhone: string;
  gymName: string;
}) {
  const res = await fetch("https://api.vapi.ai/call", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${args.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      assistantId: args.assistantId,
      phoneNumberId: args.phoneNumberId,
      customer: { number: args.toPhone },
      assistantOverrides: {
        variableValues: {
          gymName: args.gymName || "your gym",
        },
      },
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Vapi → ${res.status}: ${text.slice(0, 200)}`);
  }
  return res.json();
}

async function emailBrysenFallback(args: {
  toPhone: string;
  gymName: string;
}) {
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.DEMO_NOTIFY_TO ?? "brybuscas@gmail.com";
  if (!resendKey) {
    console.warn("[demo-call] No RESEND_API_KEY — request not emailed");
    return;
  }
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "GymVision <onboarding@resend.dev>",
      to: [to],
      subject: `[GymVision demo request] ${args.gymName || "Anonymous"}`,
      text: `New AI demo request from getgymvision.com:

Phone: ${args.toPhone}
Gym name: ${args.gymName || "(not provided)"}

(Live Vapi demo isn't configured yet — reach out manually.)`,
    }),
  }).catch((err) => console.error("[demo-call] Resend failed:", err));
}

export async function POST(request: NextRequest) {
  let body: { phone?: string; gymName?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  const toPhone = normalizePhone(body.phone ?? "");
  if (!toPhone) {
    return NextResponse.json({ error: "Enter a valid phone number" }, { status: 400 });
  }
  const gymName = (body.gymName ?? "").trim().slice(0, 80);

  // Rate limit per phone
  const lastCalled = recentCalls.get(toPhone);
  if (lastCalled && Date.now() - lastCalled < DAY_MS) {
    const nextTime = new Date(lastCalled + DAY_MS);
    return NextResponse.json(
      {
        error: "rate_limited",
        next_available_at: nextTime.toLocaleString("en-US", {
          weekday: "long",
          hour: "numeric",
          minute: "2-digit",
        }),
      },
      { status: 429 },
    );
  }

  const apiKey = process.env.VAPI_API_KEY;
  const assistantId = process.env.VAPI_DEMO_ASSISTANT_ID;
  const phoneNumberId = process.env.VAPI_DEMO_PHONE_NUMBER_ID;
  const liveDemoConfigured = !!(apiKey && assistantId && phoneNumberId);

  if (!liveDemoConfigured) {
    // Demo-mode fallback: email Brysen, return friendly response
    await emailBrysenFallback({ toPhone, gymName });
    recentCalls.set(toPhone, Date.now());
    return NextResponse.json({ ok: true, demo_mode: true });
  }

  // Live mode: place the actual Vapi outbound call
  try {
    const call = await placeVapiCall({
      apiKey,
      assistantId,
      phoneNumberId,
      toPhone,
      gymName,
    });
    recentCalls.set(toPhone, Date.now());
    return NextResponse.json({ ok: true, demo_mode: false, call_id: call.id });
  } catch (err) {
    console.error("[demo-call] Vapi error:", err);
    // Fall back to demo mode rather than showing the user a Vapi error
    await emailBrysenFallback({ toPhone, gymName });
    recentCalls.set(toPhone, Date.now());
    return NextResponse.json({ ok: true, demo_mode: true });
  }
}
