import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

        {/* Featured modules — alternating image/text */}
        <section className="mx-auto max-w-6xl px-6 mb-24">
          <div className="space-y-20 md:space-y-32">
            {FEATURED.map((m, i) => (
              <div
                key={m.title}
                className={`grid md:grid-cols-2 gap-10 md:gap-14 items-center ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* Screenshot */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-1.5 shadow-2xl shadow-black/30 overflow-hidden">
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
                    <span className="w-2 h-2 rounded-full bg-white/15" />
                    <span className="w-2 h-2 rounded-full bg-white/15" />
                    <span className="w-2 h-2 rounded-full bg-white/15" />
                    <span className="ml-2 text-[9px] font-mono text-white/30">
                      {m.urlHint}
                    </span>
                  </div>
                  <Image
                    src={m.screenshot}
                    alt={`${m.title} — GymVision feature`}
                    width={2880}
                    height={1800}
                    className="rounded-b-xl w-full h-auto"
                  />
                </div>
                {/* Copy */}
                <div>
                  <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#e63329] mb-3">
                    Module {String(m.number).padStart(2, "0")}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                    {m.title}
                  </h2>
                  <p className="text-base text-white/70 leading-relaxed mb-5">
                    {m.body}
                  </p>
                  <ul className="space-y-2">
                    {m.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-sm text-white/60 flex items-start gap-3"
                      >
                        <span className="text-[#e63329] mt-1">·</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Also included — compact grid */}
        <section className="mx-auto max-w-5xl px-6 mb-24">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3 text-center">
            Also included
          </h2>
          <p className="text-base text-white/50 text-center mb-10">
            Six more modules — same bill, no add-on pricing, no upsell at checkout.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ALSO_INCLUDED.map((m) => (
              <div
                key={m.title}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/20 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xs font-mono text-white/30 tabular-nums">
                    {String(m.number).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] font-semibold tracking-widest uppercase text-[#e63329] bg-[#e63329]/10 border border-[#e63329]/30 rounded-full px-2 py-0.5">
                    Included
                  </span>
                </div>
                <h3 className="text-base font-bold mb-2">{m.title}</h3>
                <p className="text-xs text-white/55 leading-relaxed">{m.body}</p>
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
            Add-on pricing is dead. Either you ship a complete operating system or you don&apos;t.
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

const FEATURED = [
  {
    number: 1,
    title: "Operator inbox, not dashboard",
    urlHint: "gymvision / yourgym / admin",
    screenshot: "/screenshots/admin-my-day.png",
    body: "Members log into a portal. Operators log into an inbox. /admin opens to your action queue: failed payments to retry, leads to call, members through this week, classes today. No charts that don&apos;t change anything.",
    bullets: [
      "Time-aware greeting (morning / afternoon / evening)",
      "4-pill ambient strip — only things that need action",
      "Lead inbox grouped by recency, one-tap actions",
    ],
  },
  {
    number: 2,
    title: "Class scheduling that respects your week",
    urlHint: "gymvision / yourgym / admin / schedule",
    screenshot: "/screenshots/admin-schedule.png",
    body: "Calendar view for visual editing, List view for bulk operations (cancel-week, sub-coach). Recurring templates handle the patterns. Each cell shows time + name + booked / capacity at a glance.",
    bullets: [
      "Today highlighted in your gym's accent",
      "Drag-drop visual editing (coming Q2)",
      "Bulk cancel-week + sub-coach from List tab",
    ],
  },
  {
    number: 3,
    title: "Front desk built for the counter",
    urlHint: "gymvision / yourgym / desk",
    screenshot: "/screenshots/desk-home.png",
    body: "Two-pane home: photo-grid check-in left, action inbox right. Multi-modal check-in (search, phone, QR, photo tap). Walk-in lead capture in 30 seconds. Counter payments via Stripe, cash, or saved-card retry. Refunds intentionally gated to manager+.",
    bullets: [
      "Photo-grid recognition for expected attendees",
      "3-step walk-in capture (lead → trial → waiver)",
      "Counter payment safety — refunds locked to manager+",
    ],
  },
  {
    number: 4,
    title: "Billing without the platform tax",
    urlHint: "gymvision / yourgym / admin / billing",
    screenshot: "/screenshots/admin-billing.png",
    body: "Today queue = right-now operations: failed payments, refunds, manual invoices. Stripe Connect pays you direct — we never touch the money. Zero markup on top of Stripe&apos;s standard rates.",
    bullets: [
      "Failed-payment queue with one-tap retry",
      "Manual invoice composer + audit trail",
      "Disputes feed (Stripe webhook auto-routes)",
    ],
  },
  {
    number: 5,
    title: "Two-way SMS that doesn't feel like a robot",
    urlHint: "gymvision / yourgym / admin / comms",
    screenshot: "/screenshots/admin-comms.png",
    body: "Inbound texts thread per-member, reply inline. Outbound broadcasts compose with AI-draft assist + audience picker. Templates save the patterns you reuse (trial welcome, missed-class, payment reminder).",
    bullets: [
      "Threaded SMS, not blast-only",
      "AI-drafted broadcast composer",
      "Saved templates with AI prompt presets",
    ],
  },
  {
    number: 6,
    title: "Member portal — yours, not someone else's brand",
    urlHint: "gymvision / yourgym / portal",
    screenshot: "/screenshots/portal-home.png",
    body: "Members install your gym as an app (PWA, no App Store). Book classes, log workouts, message coaches, manage billing, see family accounts. Members get YOUR brand — not PushPress&apos;s, not Mindbody&apos;s.",
    bullets: [
      "Add-to-home-screen on iOS + Android",
      "Offline check-in (syncs when reconnected)",
      "Push notifications for class + payment reminders",
    ],
  },
];

const ALSO_INCLUDED = [
  {
    number: 7,
    title: "AI receptionist",
    body: "Vapi-powered phone agent answers your gym line. Books trials, answers pricing, takes messages. 24/7. Sounds human.",
  },
  {
    number: 8,
    title: "Drip automations",
    body: "Trigger sequences on real events: new lead, missed class, payment failed. SMS + email channels. Editor that doesn&apos;t require a workshop.",
  },
  {
    number: 9,
    title: "Cmd+K AI assistant",
    body: "Type “refund Brady $50” or “freeze Sam 2 weeks” — confirm modal opens with values pre-filled. Power-user keyboard surface.",
  },
  {
    number: 10,
    title: "Public website + onboarding",
    body: "Templated marketing site per gym — schedule embed, plan grid, coaches, free-trial capture. Live on your custom domain.",
  },
  {
    number: 11,
    title: "1-click data export",
    body: "Members, payments, check-ins, waivers. Complete CSV bundle in seconds. No “migration fee.” The exit ramp is built in.",
  },
  {
    number: 12,
    title: "Churn intelligence",
    body: "AI-scored at-risk members surface weeks before they cancel. Habits, check-in patterns, class affinity, payment behavior — all factored.",
  },
];
