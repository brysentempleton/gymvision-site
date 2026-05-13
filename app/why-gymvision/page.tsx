import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Why GymVision — One platform, zero lock-in",
  description: "Your gym runs on 6 disconnected tools. GymVision replaces them all — at Stripe cost, with AI on top, and 1-click data export when you want to leave.",
};

export default function WhyPage() {
  return (
    <>
      <NavBar />
      <main className="pt-24 pb-32">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 text-center mb-24">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#e63329] mb-4">
            Why GymVision
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95] mb-6">
            Your gym runs on six<br />
            disconnected tools.
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            PushPress for members. Mailchimp for email. Twilio for SMS. Calendly for trainer bookings.
            ChatGPT for admin work. A spreadsheet you keep forgetting to update.
            <span className="text-white font-semibold"> GymVision replaces all of them.</span>
          </p>
        </section>

        {/* The 4 wedges */}
        <section className="mx-auto max-w-5xl px-6 mb-32">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3 text-center">
            Four wedges competitors won't touch.
          </h2>
          <p className="text-base text-white/60 max-w-2xl mx-auto text-center mb-12">
            Because touching them would break their revenue model.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {WEDGES.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 hover:border-white/20 transition-colors"
              >
                <div className="text-xs font-semibold tracking-[0.14em] uppercase text-[#e63329] mb-2">
                  {w.eyebrow}
                </div>
                <h3 className="text-2xl font-bold mb-3">{w.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4">{w.body}</p>
                <div className="text-xs font-mono text-white/40 pt-3 border-t border-white/10">
                  {w.proof}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PushPress comparison */}
        <section className="mx-auto max-w-4xl px-6 mb-32">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3 text-center">
            GymVision vs PushPress.
          </h2>
          <p className="text-base text-white/60 max-w-2xl mx-auto text-center mb-10">
            Same gym category. Different operating model. Numbers don't lie.
          </p>
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white/5 text-white/60">
                <tr>
                  <th className="text-left py-3 px-5 font-mono text-xs uppercase tracking-wider">Compare</th>
                  <th className="text-left py-3 px-5 font-semibold">PushPress</th>
                  <th className="text-left py-3 px-5 font-semibold text-[#e63329]">GymVision</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white/[0.02]" : ""}
                  >
                    <td className="py-3 px-5 text-white/60">{row.label}</td>
                    <td className="py-3 px-5 text-white/80">{row.pushpress}</td>
                    <td className="py-3 px-5 text-white font-semibold">{row.gymvision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Stripe at-cost math */}
        <section className="mx-auto max-w-4xl px-6 mb-32">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#e63329]/[0.06] to-transparent p-8 md:p-12">
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-[#e63329] mb-3">
              The math
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
              At $20k/mo volume, that's $4,800 back in your pocket every year.
            </h2>
            <p className="text-base text-white/70 leading-relaxed max-w-2xl mb-8">
              Most gym platforms charge a 2% markup on top of Stripe's 2.9% + 30¢.
              GymVision takes <span className="text-white font-semibold">zero</span>. You pay
              Stripe directly. We never touch your money.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Typical platform markup", value: "2.0%", tone: "muted" },
                { label: "Your annual cost @ $20k/mo", value: "$4,800", tone: "muted" },
                { label: "GymVision markup", value: "0%", tone: "accent" },
              ].map((c) => (
                <div
                  key={c.label}
                  className={`rounded-xl p-5 ${
                    c.tone === "accent"
                      ? "border-2 border-[#e63329] bg-[#e63329]/10"
                      : "border border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <div className="text-3xl font-black mb-1">{c.value}</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zero lock-in */}
        <section className="mx-auto max-w-3xl px-6 text-center mb-24">
          <div className="text-xs font-semibold tracking-[0.14em] uppercase text-[#e63329] mb-4">
            The exit ramp
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
            Leave any time. One click.
          </h2>
          <p className="text-base text-white/70 leading-relaxed mb-8">
            Every member, every payment, every check-in, every waiver. Export to CSV
            in seconds. No "migration fee." No "data hostage" pricing. We win because
            you stay, not because you can't leave.
          </p>
          <p className="text-sm text-white/40 italic">
            (We've never had a gym ask. But the option is there because it should be.)
          </p>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-2xl px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to see it?</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#e63329] text-white font-semibold hover:bg-[#c9291f] transition-colors"
            >
              Join the waitlist
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/10 text-white/80 font-semibold hover:border-white/30 hover:text-white transition-colors"
            >
              See features →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const WEDGES = [
  {
    eyebrow: "Wedge 1",
    title: "AI-native, not AI-bolted-on",
    body: "AI drafts your broadcasts, triages cancellations, suggests SMS replies, and surfaces at-risk members before you notice. Every surface speaks AI — the receptionist, the inbox, the Cmd+K, the reporting. Not a checkbox feature; the operating model.",
    proof: "Built on Anthropic + Vapi. Real workflows, not chatbots.",
  },
  {
    eyebrow: "Wedge 2",
    title: "Stripe at cost",
    body: "Most platforms charge 2% markup on top of Stripe. We charge zero. You pay Stripe directly. At $20k/mo that's $4,800/year back in your pocket. Year one alone covers GymVision.",
    proof: "Stripe Connect Standard. We never touch your money.",
  },
  {
    eyebrow: "Wedge 3",
    title: "Migrate in one afternoon",
    body: "Export from PushPress / Mindbody / Wodify. Drop the CSV. We map columns, dedupe, confirm counts. Members get an email to set up their new account. Your DNS flip is the last step. Total time: 4 hours.",
    proof: "Done it for Gas House — case study live.",
  },
  {
    eyebrow: "Wedge 4",
    title: "Built by an operator",
    body: "Not a VC-funded growth team. Built by someone who ran a creative studio, photographed gyms, and got tired of recommending bad software to gyms he loved. The roadmap is what the operator needs next, not what investors want to see at the next board meeting.",
    proof: "No VC. No board. No churn-tax pressure.",
  },
];

const COMPARISON = [
  { label: "Stripe markup", pushpress: "2.0%", gymvision: "0%" },
  { label: "Setup fee", pushpress: "$500–$2,000", gymvision: "$0 in year one" },
  { label: "Data export", pushpress: "CSV with caveats", gymvision: "1-click, complete" },
  { label: "AI receptionist", pushpress: "Add-on, $99+/mo", gymvision: "Included" },
  { label: "AI cancellation triage", pushpress: "—", gymvision: "Included" },
  { label: "Two-way SMS", pushpress: "Add-on", gymvision: "Included" },
  { label: "Member PWA + offline kiosk", pushpress: "—", gymvision: "Included" },
  { label: "Migration", pushpress: "Days, with rep help", gymvision: "One afternoon" },
  { label: "Built for", pushpress: "Mid-market gyms at scale", gymvision: "Operators who care" },
];
