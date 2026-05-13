import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Features — GymVision",
  description: "Eleven modules. One login. One bill. AI receptionist, member portal, billing, scheduling, SMS, automations — all under the same roof.",
};

export default function FeaturesPage() {
  return (
    <>
      <NavBar />
      <main className="pt-24 pb-32">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 text-center mb-20">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#e63329] mb-4">
            Features
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95] mb-6">
            Eleven modules.<br />
            One login. One bill.
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Every surface a modern gym needs to operate — built as one product,
            not eleven integrations duct-taped together.
          </p>
        </section>

        {/* Module grid */}
        <section className="mx-auto max-w-6xl px-6 mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MODULES.map((m, i) => (
              <div
                key={m.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xs font-mono text-white/30 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {m.included && (
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#e63329] bg-[#e63329]/10 border border-[#e63329]/30 rounded-full px-2 py-0.5">
                      Included
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-2">{m.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">{m.body}</p>
                <ul className="space-y-1.5">
                  {m.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-xs text-white/50 flex items-start gap-2"
                    >
                      <span className="text-[#e63329] mt-0.5">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Footer pitch */}
        <section className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Everything above. One $499 bill.
          </h2>
          <p className="text-base text-white/60 mb-8">
            Add-on pricing is dead. Either you ship a complete operating system or you don't.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#e63329] text-white font-semibold hover:bg-[#c9291f] transition-colors"
            >
              Join the waitlist
            </Link>
            <Link
              href="/why-gymvision"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/10 text-white/80 font-semibold hover:border-white/30 hover:text-white transition-colors"
            >
              Why GymVision →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const MODULES = [
  {
    title: "AI receptionist",
    body: "A Vapi-powered phone agent that answers your gym line. Books trials, answers pricing questions, takes messages. Sounds human. Never sleeps.",
    bullets: ["24/7 phone coverage", "Books from your real schedule", "Trained on your gym's policies"],
    included: true,
  },
  {
    title: "Member portal (PWA)",
    body: "Members install your gym as an app. Book classes, see workouts, log results, message coaches, manage billing. Yours, not someone else's brand.",
    bullets: ["Offline-capable", "Push notifications", "Add-to-home-screen"],
    included: true,
  },
  {
    title: "Class scheduling + booking",
    body: "Recurring class templates, waitlists, capacity rules, drop-in pricing. Public booking page that respects your brand.",
    bullets: ["Recurring patterns", "Waitlist auto-promote", "Per-class pricing"],
    included: true,
  },
  {
    title: "Stripe Connect billing",
    body: "Payments go from member to your Stripe account. We never touch the money. Zero markup on top of Stripe's standard rates.",
    bullets: ["Stripe at-cost (0% markup)", "Failed-pay auto-retry", "Manual invoices"],
    included: true,
  },
  {
    title: "Two-way SMS + broadcasts",
    body: "Twilio under the hood. Members reply to your texts and the thread lands in your inbox. Broadcast composer with AI draft + audience picker.",
    bullets: ["Threaded conversations", "AI-drafted broadcasts", "A2P 10DLC compliant"],
    included: true,
  },
  {
    title: "Front desk + counter payments",
    body: "Multi-modal check-in (search, QR, photo grid). Walk-in lead capture in 30 seconds. Drop-in charge via Stripe, cash collection, saved-card retry.",
    bullets: ["Photo-grid check-in", "3-step walk-in capture", "Counter payment flows"],
    included: true,
  },
  {
    title: "Drip automations",
    body: "Trigger sequences on real events: new lead, missed class, payment failed, 100th check-in. Editor that doesn't require a workshop to learn.",
    bullets: ["Event-triggered", "Multi-channel (SMS + email)", "Drip + one-off"],
    included: true,
  },
  {
    title: "Cmd+K AI assistant",
    body: "Power-user keyboard surface. Type \"refund Brady $50\" or \"freeze Sam 2 weeks\" and a confirm modal opens with the values pre-filled.",
    bullets: ["Verb-shaped commands", "Natural-language fallback", "Audit-logged"],
    included: true,
  },
  {
    title: "Reporting + churn intelligence",
    body: "MRR, retention curves, cohort analysis, plan transitions. Churn-risk scoring that surfaces at-risk members weeks before they cancel.",
    bullets: ["At-risk member feed", "Cohort retention curves", "Real-time MRR"],
    included: true,
  },
  {
    title: "Public website + onboarding",
    body: "Templated marketing site for every gym — schedule embed, plan grid, coaches, free-trial capture. Live on your domain in minutes.",
    bullets: ["Custom domain", "Template editor", "SEO + OG ready"],
    included: true,
  },
  {
    title: "1-click data export",
    body: "Every member, payment, check-in, and waiver. CSV bundle in seconds. No \"migration fee.\" No support ticket. The exit ramp is built in.",
    bullets: ["Complete export", "No friction", "Anytime, any reason"],
    included: true,
  },
];
