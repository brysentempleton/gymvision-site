import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const { email, gym, size } = await req.json();

    if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "valid email required" }, { status: 400 });
    }
    if (email.length > 254) {
      return NextResponse.json({ error: "email too long" }, { status: 400 });
    }

    const entry = `email=${email} gym=${gym ?? ""} size=${size ?? ""}`;
    console.log(`[WAITLIST] ${new Date().toISOString()} ${entry}`);

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "GymVision <onboarding@resend.dev>",
          to: ["brybuscas@gmail.com"],
          subject: `New waitlist signup: ${gym || email}`,
          text: `Email: ${email}\nGym: ${gym || "—"}\nSize: ${size || "—"}\nTime: ${new Date().toISOString()}`,
        }),
      });
      if (!res.ok) {
        console.error(`[WAITLIST] Resend error ${res.status}:`, await res.text());
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[WAITLIST] error:", err);
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}
