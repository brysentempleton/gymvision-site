"use client";

import { useState, useTransition } from "react";
import { Phone, CheckCircle, Clock, Warning } from "@phosphor-icons/react/ssr";

// Per the marketing conversion plan: visitor enters their phone → Vapi places
// an outbound call within 30 seconds → 60-second AI demo of the receptionist.
// The viral piece. Lives on home page above /features.
//
// Graceful degradation: if VAPI_API_KEY isn't set in the env, the widget shows
// a "request demo" CTA that emails Brysen instead of placing a live call.
// Same UI, swap-in production behind a single env var flip.

type State =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "called"; demoMode: boolean }
  | { kind: "rate-limited"; nextAvailableAt: string }
  | { kind: "error"; message: string };

export function DemoCallWidget() {
  const [phone, setPhone] = useState("");
  const [gymName, setGymName] = useState("");
  const [state, setState] = useState<State>({ kind: "idle" });
  const [isPending, startTransition] = useTransition();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (isPending) return;
    setState({ kind: "submitting" });
    startTransition(async () => {
      try {
        const res = await fetch("/api/demo-call", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, gymName }),
        });
        const json = await res.json();
        if (res.status === 429) {
          setState({
            kind: "rate-limited",
            nextAvailableAt: json.next_available_at ?? "tomorrow",
          });
          return;
        }
        if (!res.ok) {
          setState({ kind: "error", message: json.error ?? "Something went wrong" });
          return;
        }
        setState({ kind: "called", demoMode: !!json.demo_mode });
      } catch {
        setState({ kind: "error", message: "Network error — try again" });
      }
    });
  }

  return (
    <section className="relative py-24 md:py-32 border-y border-white/[0.06] bg-white/[0.01]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(230,51,41,0.08),transparent)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 mb-6">
          <Phone className="w-3 h-3 text-[#e63329]" weight="fill" />
          Live AI demo
        </div>

        <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[0.95] mb-4">
          Want to hear the AI<br />
          <span className="text-[#e63329]">answer your gym&apos;s phone?</span>
        </h2>

        <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
          Drop your phone number. The GymVision AI receptionist will call you
          back in 30 seconds and walk you through what your members would hear.
        </p>

        {/* Form */}
        <div className="max-w-md mx-auto">
          {state.kind === "called" ? (
            <CalledState demoMode={state.demoMode} />
          ) : state.kind === "rate-limited" ? (
            <RateLimitedState nextAvailableAt={state.nextAvailableAt} />
          ) : (
            <form onSubmit={submit} className="space-y-3">
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your phone (e.g. +1 509 555 0100)"
                inputMode="tel"
                autoComplete="tel"
                className="w-full h-12 rounded-full border border-white/15 bg-black/40 px-5 text-base text-white placeholder:text-white/30 focus:border-[#e63329]/60 focus:outline-none transition-colors"
              />
              <input
                type="text"
                value={gymName}
                onChange={(e) => setGymName(e.target.value)}
                placeholder="Your gym name (optional)"
                className="w-full h-12 rounded-full border border-white/15 bg-black/40 px-5 text-base text-white placeholder:text-white/30 focus:border-[#e63329]/60 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={isPending}
                className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-full bg-[#e63329] text-white font-semibold hover:bg-[#c9291f] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  "Calling you now…"
                ) : (
                  <>
                    <Phone className="w-4 h-4" weight="fill" />
                    Call me with the AI demo
                  </>
                )}
              </button>
              {state.kind === "error" && (
                <p className="text-sm text-red-400 mt-2">
                  <Warning className="w-4 h-4 inline -mt-0.5 mr-1" weight="fill" />
                  {state.message}
                </p>
              )}
              <p className="text-xs text-white/40 mt-4">
                We&apos;ll only use your number for the demo call. One call per number per day.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function CalledState({ demoMode }: { demoMode: boolean }) {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 md:p-8">
      <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto mb-3" weight="fill" />
      <h3 className="text-xl font-bold mb-2">
        {demoMode ? "Got it — Brysen will reach out" : "Calling you in 30 seconds"}
      </h3>
      <p className="text-sm text-white/60 leading-relaxed">
        {demoMode ? (
          <>
            The live AI demo isn&apos;t turned on yet. Brysen will text you
            within 24 hours to schedule a quick walkthrough.
          </>
        ) : (
          <>
            Pick up when your phone rings. The AI receptionist (Maya) will
            walk you through booking a trial, answering pricing, and taking
            a message — like a real gym call.
          </>
        )}
      </p>
    </div>
  );
}

function RateLimitedState({ nextAvailableAt }: { nextAvailableAt: string }) {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 md:p-8">
      <Clock className="w-10 h-10 text-amber-400 mx-auto mb-3" weight="duotone" />
      <h3 className="text-xl font-bold mb-2">One demo per day per number</h3>
      <p className="text-sm text-white/60 leading-relaxed">
        We already called this number recently. Try again {nextAvailableAt}, or
        email <a href="mailto:hello@gymvision.co" className="text-[#e63329] hover:underline">hello@gymvision.co</a>{" "}
        to schedule a live demo with Brysen.
      </p>
    </div>
  );
}
