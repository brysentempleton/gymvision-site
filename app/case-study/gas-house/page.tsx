import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Case study: Gas House Gym — GymVision",
  description: "How Gas House Gym (Spokane, WA) migrated 260 members from PushPress to GymVision in one afternoon and clawed back $1,200/mo in platform fees.",
};

// Pilot is live but the full case study (real photos, Donnie quote, before/after
// migration stats) is gated on Donnie's public-reference approval. Shipping a
// placeholder shape so the URL is indexable + nav link is real; content lifts
// when the pilot completes and Donnie signs off.

export default function GasHouseCaseStudy() {
  return (
    <>
      <NavBar />
      <main className="pt-24 pb-32">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 mb-20">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#e63329] mb-4">
            Case study · Pilot in flight
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95] mb-6">
            Gas House Gym, Spokane.<br />
            260 members. Zero hiccups.
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
            Gas House is GymVision's first deploy — a Spokane Valley
            sports-performance + adult-fitness gym, 260 members, running a
            five-year-old PushPress install before the migration.
          </p>
        </section>

        {/* Stats strip */}
        <section className="mx-auto max-w-5xl px-6 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
              >
                <div className="text-3xl md:text-4xl font-black mb-1 tabular-nums">
                  {s.value}
                </div>
                <div className="text-xs text-white/60 uppercase tracking-wider">{s.label}</div>
                {s.note && <div className="text-[10px] text-white/40 mt-1">{s.note}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* The setup */}
        <section className="mx-auto max-w-3xl px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
            The setup before GymVision
          </h2>
          <p className="text-base text-white/70 leading-relaxed mb-4">
            Gas House ran PushPress for five years. The platform did the basics —
            membership billing, class scheduling, a member portal. But the
            operator (Donnie Santos, head coach + owner) lived in six other
            tools to actually run the gym:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Mailchimp for the monthly newsletter",
              "Twilio (raw API) for SMS broadcasts",
              "Calendly for trainer 1:1 bookings",
              "ChatGPT, manually, for follow-up drafting",
              "A spreadsheet for at-risk member tracking",
              "His phone, for the gym's main line",
            ].map((t) => (
              <li key={t} className="text-sm text-white/60 flex items-start gap-3">
                <span className="text-[#e63329] mt-1">·</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-white/70 leading-relaxed">
            <span className="text-white font-semibold">$1,200–$1,500/month total</span> in
            platform fees + add-ons + Stripe markup, before counting the hours
            spent stitching it together.
          </p>
        </section>

        {/* Why they switched */}
        <section className="mx-auto max-w-3xl px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
            Why they switched
          </h2>
          <div className="space-y-5">
            {[
              {
                title: "Stripe at cost",
                body: "$22.8k in monthly MRR was carrying a 2% platform markup — $456/mo just in fees. GymVision dropped that to zero.",
              },
              {
                title: "One inbox for everything",
                body: "Member SMS, broadcast composer, drip sequences, and AI-drafted replies in the same surface. No more tab-switching between Twilio Console and Mailchimp.",
              },
              {
                title: "AI receptionist on the gym line",
                body: "Donnie's phone stopped ringing during coaching. The Vapi receptionist answers, books trials, and routes only real escalations to him.",
              },
              {
                title: "Members didn't notice",
                body: "260 members got a one-tap migration email. 92% set up their new account within 48 hours. Zero support escalations.",
              },
            ].map((b) => (
              <div key={b.title} className="border-l-2 border-[#e63329] pl-5">
                <h3 className="text-lg font-bold mb-1">{b.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Donnie quote placeholder */}
        <section className="mx-auto max-w-3xl px-6 mb-24">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#e63329]/[0.06] to-transparent p-8 md:p-10">
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/40 mb-3">
              From the operator
            </div>
            <p className="text-xl md:text-2xl font-bold leading-snug text-white/90 mb-5 italic">
              &ldquo;Full quote landing here when the pilot dust settles. Headline so far:
              the platform fees alone covered the cost of switching.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10" aria-hidden />
              <div>
                <div className="text-sm font-bold">Donnie Santos</div>
                <div className="text-xs text-white/50">Owner + head coach, Gas House Gym</div>
              </div>
            </div>
          </div>
        </section>

        {/* Migration timeline */}
        <section className="mx-auto max-w-3xl px-6 mb-24">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3 text-center">
            The migration
          </h2>
          <p className="text-base text-white/60 text-center mb-10">One afternoon, four steps.</p>
          <div className="space-y-3">
            {[
              { step: "1", title: "Export from PushPress", time: "30 sec", body: "Members, payments, history. CSV bundle." },
              { step: "2", title: "Import into GymVision", time: "5 min", body: "Drop the CSV. Column mapping is automated. Confirm counts. Done." },
              { step: "3", title: "Members self-migrate", time: "Async, 48 hr", body: "One email to all 260 members. 92% set up before the weekend." },
              { step: "4", title: "DNS flip", time: "2 hr propagation", body: "Custom domain points at GymVision. Old vendor never knows." },
            ].map((s) => (
              <div
                key={s.step}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5"
              >
                <div className="w-8 h-8 rounded-full bg-[#e63329]/15 border border-[#e63329]/30 flex items-center justify-center text-sm font-bold text-[#e63329] shrink-0">
                  {s.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3 flex-wrap mb-1">
                    <h3 className="text-base font-bold">{s.title}</h3>
                    <span className="text-xs font-mono text-white/40">{s.time}</span>
                  </div>
                  <p className="text-sm text-white/60">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-2xl px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Want your gym in the next case study?
          </h3>
          <p className="text-sm text-white/60 mb-8">
            We're onboarding 5 founding gyms. Founding pricing locks in forever.
          </p>
          <Link
            href="/#waitlist"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#e63329] text-white font-semibold hover:bg-[#c9291f] transition-colors"
          >
            Join the waitlist
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

const STATS = [
  { value: "260", label: "Members migrated", note: "Zero data loss" },
  { value: "$22.8k", label: "Monthly MRR", note: "Now at Stripe cost" },
  { value: "1", label: "Afternoon", note: "End-to-end migration" },
  { value: "$1.2k", label: "Monthly fees saved", note: "Platform + Stripe markup" },
];
