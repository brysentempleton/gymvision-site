import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "GymVision vs PushPress (2026): an honest comparison",
  description:
    "Flat pricing with Stripe at-cost vs tiers, add-ons, and processing markup. Where GymVision wins, where PushPress wins, and who each is actually right for.",
  alternates: { canonical: "/vs/pushpress" },
};

const GLANCE: { dim: string; gv: string; pp: string }[] = [
  {
    dim: "Pricing model",
    gv: "Flat $249 or $499/mo. No per-member fees, no add-ons.",
    pp: "$0, $159, or $229/mo plus add-ons (Grow is $329/mo extra).",
  },
  {
    dim: "Payment processing",
    gv: "Stripe at-cost. We take zero markup on your revenue.",
    pp: "Up to 4.99% processing on the free tier; processing margin is part of the business model.",
  },
  {
    dim: "AI receptionist (phone)",
    gv: "The flagship: an AI that answers your gym's phone, books trials, takes messages. In private beta.",
    pp: "None. Phone calls are untouched.",
  },
  {
    dim: "Owner analytics",
    gv: "Live ops dashboard, cohort retention chart, explainable churn scoring.",
    pp: "Static dashboard with at-risk flags; reviewers still cite shallow analytics.",
  },
  {
    dim: "Member experience",
    gv: "Feed with reactions, 16 auto-unlock badges, PR detection with celebration, attendance heatmap.",
    pp: "Feed and Committed Club leaderboard; no PR engine, no heatmap.",
  },
  {
    dim: "Billing flexibility",
    gv: "Family billing, pause with auto-resume, punchcards, drop-ins.",
    pp: "Punchcards and drop-ins yes; pause handling is a known complaint, family billing absent.",
  },
  {
    dim: "Owner AI tools",
    gv: "In development.",
    pp: "Text-based AI assistant and AI marketing copy shipped in 2025. PushPress wins here today.",
  },
  {
    dim: "Hardware",
    gv: "Kiosk runs on any tablet; no proprietary hardware.",
    pp: "Tap-to-Pay kiosk hardware. PushPress wins if you want that today.",
  },
  {
    dim: "Migration",
    gv: "One afternoon. Our pilot gym moved 260 members in one day.",
    pp: "n/a (this is the direction people usually migrate from).",
  },
];

const FAQ = [
  {
    q: "Is GymVision cheaper than PushPress?",
    a: "For a working gym, usually yes, and the gap is bigger than the sticker price. PushPress tiers plus the Grow add-on can pass $500/mo before processing margin. GymVision is a flat $249 or $499/mo with Stripe at-cost, so we take no cut of your member revenue. Our pilot gym displaced about $1,400/mo in platform and processing costs.",
  },
  {
    q: "What does PushPress do better than GymVision?",
    a: "Three honest answers: a shipped text-based AI assistant for owners, AI-generated marketing copy, and Tap-to-Pay kiosk hardware. PushPress also has a decade of ecosystem maturity and a large integration catalog. If those outweigh phone coverage, analytics depth, and flat pricing for you, PushPress is the right call.",
  },
  {
    q: "How hard is it to switch from PushPress to GymVision?",
    a: "One afternoon. Members, plans, and history import via CSV; our pilot gym (Gas House Gym, Spokane) moved 260 active members in one day and kept booking classes the same week. We do the import with you on a call.",
  },
  {
    q: "Does GymVision really answer the phone with AI?",
    a: "Yes. The AI receptionist answers calls, books trial sessions, answers pricing and schedule questions, and takes messages. It's the reason GymVision exists. It's in private beta with founding gyms now; you can hear it live by requesting a demo call on our homepage.",
  },
];

export default function VsPushPressPage() {
  return (
    <>
      <NavBar />
      <main className="pt-24 pb-32">
        {/* Hero / TLDR */}
        <section className="mx-auto max-w-3xl px-6 mb-16">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#e63329] mb-4">
            Comparison
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95] mb-6">
            GymVision vs PushPress.
          </h1>
          <p className="text-lg text-white/60 leading-relaxed mb-4">
            The short version: PushPress is the established player with a big
            ecosystem and new owner-side AI tools. GymVision is the operator-built
            challenger with flat pricing, Stripe at-cost (zero markup on your
            revenue), deeper analytics, and the one thing nobody else has: an AI
            receptionist that actually answers your gym&apos;s phone.
          </p>
          <p className="text-lg text-white/60 leading-relaxed">
            Below is the honest breakdown, including the three places PushPress
            beats us today.
          </p>
        </section>

        {/* At a glance table */}
        <section className="mx-auto max-w-5xl px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">At a glance</h2>
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="hidden md:grid grid-cols-3 bg-white/[0.04] text-sm font-semibold">
              <div className="px-4 py-3 text-white/50">Dimension</div>
              <div className="px-4 py-3">GymVision</div>
              <div className="px-4 py-3 text-white/70">PushPress</div>
            </div>
            {GLANCE.map((row) => (
              <div key={row.dim} className="grid md:grid-cols-3 border-t first:border-t-0 md:first:border-t border-white/[0.06] text-sm">
                <div className="px-4 pt-4 md:py-4 font-semibold text-white/80">{row.dim}</div>
                <div className="px-4 py-2 md:py-4 text-white/60 leading-relaxed">
                  <span className="md:hidden text-[10px] font-mono uppercase tracking-widest text-[#e63329] block mb-0.5">GymVision</span>
                  {row.gv}
                </div>
                <div className="px-4 pb-4 pt-2 md:py-4 text-white/50 leading-relaxed">
                  <span className="md:hidden text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-0.5">PushPress</span>
                  {row.pp}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/30 mt-3">
            PushPress details from their public pricing and 2025 release notes, audited June 2026. Spot something stale? Email us and we&apos;ll fix it.
          </p>
        </section>

        {/* Detailed categories */}
        <section className="mx-auto max-w-3xl px-6 space-y-12 mb-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Pricing: flat vs tiered-plus-add-ons</h2>
            <p className="text-white/60 leading-relaxed mb-3">
              PushPress prices in layers: a free tier (with up to 4.99% payment
              processing), paid tiers at $159 and $229/mo, and add-ons like Grow
              at $329/mo for marketing automation. The sticker is low; the working
              total for a gym that uses the platform seriously usually isn&apos;t.
            </p>
            <p className="text-white/60 leading-relaxed">
              GymVision is $249/mo (Starter) or $499/mo (Pro), flat. Lead drips,
              broadcasts, analytics, and the member app are all in the box, and
              payments run through your own Stripe account at Stripe&apos;s
              published rates. We never touch a percentage of your revenue. Our
              pilot gym&apos;s all-in displacement was about $1,400/mo.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">The phone: the gap nobody else covers</h2>
            <p className="text-white/60 leading-relaxed mb-3">
              Every missed call at a gym is a missed trial, and most gyms miss
              calls all day because coaches are coaching. PushPress has no answer
              for this; their AI investments are owner-side text tools.
            </p>
            <p className="text-white/60 leading-relaxed">
              GymVision&apos;s AI receptionist answers the phone, books trials
              into your actual schedule, quotes your actual pricing, and takes
              messages for anything it shouldn&apos;t handle. It&apos;s in
              private beta with founding gyms.{" "}
              <Link href="/#waitlist" className="text-[#e63329] hover:underline">
                Hear it call you live
              </Link>{" "}
              from the homepage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Analytics and retention</h2>
            <p className="text-white/60 leading-relaxed">
              This is where the products diverge most for owners. GymVision ships
              a live ops dashboard, cohort retention by joined month, and an
              explainable churn score per member, so you know who&apos;s drifting
              before they cancel. PushPress shows at-risk flags on a static
              dashboard, and shallow analytics is a recurring theme in their own
              customers&apos; reviews.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Member experience</h2>
            <p className="text-white/60 leading-relaxed">
              GymVision&apos;s member portal behaves like a consumer app: a feed
              with reactions, sixteen auto-unlocking achievement badges, automatic
              PR detection with a celebration moment, and a GitHub-style
              attendance heatmap. PushPress revamped its feed in 2025 and has a
              tenure leaderboard, but there&apos;s no PR engine and no heatmap.
              Members notice the difference in the first week.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Where PushPress wins today</h2>
            <p className="text-white/60 leading-relaxed">
              Honesty section. PushPress shipped a text-based AI assistant and AI
              marketing copy generation in 2025; ours are still in development.
              They offer Tap-to-Pay kiosk hardware; we run on any tablet but
              don&apos;t do proprietary hardware. And they&apos;ve been at this a
              decade with a $20M Series B behind them, which buys ecosystem
              maturity and integrations we&apos;re still earning. If those three
              things top your list, buy PushPress with our blessing.
            </p>
          </div>
        </section>

        {/* Who for */}
        <section className="mx-auto max-w-5xl px-6 mb-20">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#e63329]/30 bg-[#e63329]/[0.04] p-8">
              <h3 className="text-xl font-bold mb-4">Choose GymVision if</h3>
              <ul className="space-y-3 text-white/60 leading-relaxed text-sm">
                <li>· You're tired of platform fees scaling with your success and want Stripe at-cost</li>
                <li>· Missed phone calls are costing you trials</li>
                <li>· You want retention analytics that name the members worth a text today</li>
                <li>· You want a founder on the phone, not a ticket queue</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <h3 className="text-xl font-bold mb-4">Choose PushPress if</h3>
              <ul className="space-y-3 text-white/60 leading-relaxed text-sm">
                <li>· You want Tap-to-Pay kiosk hardware today</li>
                <li>· Owner-side AI text tools matter more to you than phone coverage</li>
                <li>· You'd rather have a decade-old ecosystem than a private beta, even a fast-moving one</li>
                <li>· A free tier with processing markup fits your stage better than a flat fee</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Proof + migration */}
        <section className="mx-auto max-w-3xl px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Switching is one afternoon, not one quarter</h2>
          <p className="text-white/60 leading-relaxed mb-3">
            Gas House Gym in Spokane ran on PushPress until 2026. We imported all
            260 active members, their plans, and their history in one day, and
            the gym kept booking classes the same week. Members, plans,
            punchcards, and check-in history come over via CSV; we run the import
            with you on a call and verify counts together.
          </p>
          <p className="text-white/60 leading-relaxed">
            Read the full story:{" "}
            <Link href="/case-study/gas-house" className="text-[#e63329] hover:underline">
              the Gas House case study
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Common questions</h2>
          <div className="space-y-8">
            {FAQ.map((f) => (
              <div key={f.q}>
                <h3 className="text-lg font-bold mb-2">{f.q}</h3>
                <p className="text-white/60 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Still on PushPress?
          </h2>
          <p className="text-white/60 mb-8">
            Join the waitlist and we&apos;ll walk you through exactly what your
            gym&apos;s migration would look like, numbers included.
          </p>
          <Link
            href="/#waitlist"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#e63329] text-white font-semibold hover:bg-[#c9291f] transition-colors"
          >
            Join the waitlist
          </Link>
        </section>

        {/* FAQ schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
