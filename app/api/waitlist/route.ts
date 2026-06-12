import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const { email, gym, size, company } = await req.json();

    // Honeypot: the visible form never fills this field. Bots that do get a
    // fake success and no email burn.
    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "valid email required" }, { status: 400 });
    }
    if (email.length > 254) {
      return NextResponse.json({ error: "email too long" }, { status: 400 });
    }

    console.log(`[WAITLIST] ${new Date().toISOString()} gym=${gym ?? ""} size=${size ?? ""}`);

    // The Resend email IS the lead store until a database is provisioned.
    // If it can't be delivered, the lead would silently evaporate, so the
    // route must report failure and let the UI offer the mailto fallback.
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.error("[WAITLIST] RESEND_API_KEY not set — lead cannot be captured");
      return NextResponse.json({ error: "delivery unavailable" }, { status: 502 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "GymVision <onboarding@resend.dev>",
        to: ["brybuscas@gmail.com"],
        subject: `New waitlist signup: ${gym || email}`,
        text: `Email: ${email}\nGym: ${gym || "-"}\nSize: ${size || "-"}\nTime: ${new Date().toISOString()}`,
      }),
    });
    if (!res.ok) {
      console.error(`[WAITLIST] Resend error ${res.status}:`, await res.text());
      return NextResponse.json({ error: "delivery failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[WAITLIST] error:", err);
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}
