import { NextResponse } from "next/server";

// Waitlist submissions — log to console + forward to Resend if configured
export async function POST(req: Request) {
  try {
    const { email, gym, size } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "email required" }, { status: 400 });
    }

    // Log to server output (Vercel logs capture this)
    console.log(`[WAITLIST] ${new Date().toISOString()} email=${email} gym=${gym ?? ""} size=${size ?? ""}`);

    // Forward to Resend if API key is configured
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "GymVision <noreply@gymvision.com>",
          to: ["brybuscas@gmail.com"],
          subject: `New waitlist signup: ${gym || email}`,
          text: `Email: ${email}\nGym: ${gym || "—"}\nSize: ${size || "—"}\nTime: ${new Date().toISOString()}`,
        }),
      }).catch(() => {});
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}
