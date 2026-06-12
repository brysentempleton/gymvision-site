"use client";

import { useState } from "react";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [gym, setGym] = useState("");
  const [size, setSize] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [failed, setFailed] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    setFailed(false);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, gym, size }),
      });
      if (!res.ok) {
        setFailed(true);
        return;
      }
      setSubmitted(true);
    } catch {
      setFailed(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="waitlist" className="py-32 px-6">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-[#e63329] font-mono text-xs uppercase tracking-[0.2em] mb-3">Early Access</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          Ready to switch?
        </h2>
        <p className="text-white/50 text-lg mb-10">
          We&apos;re onboarding 5 pilot gyms. Founding members lock in pricing forever.
        </p>

        {submitted ? (
          <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="text-xl font-bold mb-2">You&apos;re on the list.</h3>
            <p className="text-white/60 text-sm">We&apos;ll reach out within 48 hours to schedule your migration call.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 rounded-xl border border-white/10 bg-white/[0.05] px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#e63329]/60"
            />
            <input
              type="text"
              placeholder="Gym name"
              value={gym}
              onChange={(e) => setGym(e.target.value)}
              className="w-full h-12 rounded-xl border border-white/10 bg-white/[0.05] px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#e63329]/60"
            />
            <select
              aria-label="Member count"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full h-12 rounded-xl border border-white/10 bg-[#0a0a0a] px-4 text-sm text-white focus:outline-none focus:border-[#e63329]/60"
            >
              <option value="">Member count (optional)</option>
              <option value="<50">Under 50</option>
              <option value="50-150">50–150</option>
              <option value="150-300">150–300</option>
              <option value="300+">300+</option>
            </select>
            <button
              type="submit"
              disabled={submitting || !email.trim()}
              className="w-full h-12 rounded-xl bg-[#e63329] text-white font-semibold text-base hover:bg-[#c9291f] transition-colors disabled:opacity-50"
            >
              {submitting ? "Sending…" : failed ? "Try again" : "Join the waitlist"}
            </button>
            {failed && (
              <p className="text-sm text-red-400/90">
                That didn&apos;t go through. Try again, or email{" "}
                <a href="mailto:brybuscas@gmail.com?subject=GymVision%20waitlist" className="underline underline-offset-2">
                  brybuscas@gmail.com
                </a>{" "}
                directly and we&apos;ll get you on the list.
              </p>
            )}
          </form>
        )}

        <p className="mt-6 text-xs text-white/30">
          No spam. No sales cadence. We&apos;ll reach out personally to schedule a 20-minute call.
        </p>
      </div>
    </section>
  );
}
