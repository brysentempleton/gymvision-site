import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Founder — GymVision",
  description: "Built by Brysen Templeton, an operator who got tired of recommending bad software to gyms he loved. Not VC-funded. Not a growth team. One operator, building what gyms actually need.",
};

export default function FounderPage() {
  return (
    <>
      <NavBar />
      <main className="pt-24 pb-32">
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 mb-16">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#e63329] mb-4">
            Founder
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95] mb-6">
            I left a firefighter job to fix this.
          </h1>
          <p className="text-lg text-white/60 leading-relaxed">
            Hi, I&apos;m Brysen. GymVision is built by one operator, not a growth
            team. Here&apos;s why.
          </p>
        </section>

        {/* Timeline */}
        <section className="mx-auto max-w-3xl px-6 mb-20">
          <div className="space-y-10">
            {STORY.map((chapter, i) => (
              <div key={chapter.title} className="relative pl-10">
                <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-[#e63329]/15 border border-[#e63329]/30 flex items-center justify-center text-xs font-bold text-[#e63329]">
                  {i + 1}
                </div>
                <div className="text-xs font-mono text-white/40 mb-1">{chapter.year}</div>
                <h2 className="text-xl md:text-2xl font-bold mb-3">{chapter.title}</h2>
                <div className="space-y-3 text-base text-white/70 leading-relaxed">
                  {chapter.body.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The thesis */}
        <section className="mx-auto max-w-3xl px-6 mb-20">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#e63329]/[0.06] to-transparent p-8 md:p-10">
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-[#e63329] mb-4">
              Why this, why now
            </div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-5">
              Gym software is the last category Linear-grade SaaS hasn&apos;t reached.
            </h2>
            <div className="space-y-4 text-base text-white/70 leading-relaxed">
              <p>
                Every modern category — engineering, design, support, finance —
                has a tool that respects the operator&apos;s time. Linear.
                Stripe. Notion. Vercel. They feel like they were built by
                someone who&apos;d actually used the bad alternatives.
              </p>
              <p>
                Gym software is fifteen years behind. PushPress is the
                category leader and members still get charged 2% on top of
                Stripe. Mindbody&apos;s admin UI hasn&apos;t shipped a real
                redesign since 2018. Wodify is locked behind a sales call.
              </p>
              <p>
                <span className="text-white font-semibold">
                  This isn&apos;t a market problem. It&apos;s an operator problem.
                </span>{" "}
                The people building gym software haven&apos;t run gyms. The
                people running gyms can&apos;t build software.
              </p>
              <p>I&apos;m doing both. That&apos;s the entire bet.</p>
            </div>
          </div>
        </section>

        {/* Operating principles */}
        <section className="mx-auto max-w-3xl px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-8">
            How GymVision is run
          </h2>
          <ul className="space-y-4">
            {PRINCIPLES.map((p) => (
              <li
                key={p.title}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5"
              >
                <span className="text-[#e63329] text-2xl font-black leading-none mt-0.5">·</span>
                <div>
                  <h3 className="text-base font-bold mb-1">{p.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Sign-off */}
        <section className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-base text-white/70 leading-relaxed mb-2">
            If you run a gym and you&apos;re tired of recommending software you
            hate to people you love, we should talk.
          </p>
          <p className="text-sm text-white/40 mb-8">— Brysen</p>
          <Link
            href="/#waitlist"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#e63329] text-white font-semibold hover:bg-[#c9291f] transition-colors"
          >
            Get on the list
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

const STORY = [
  {
    year: "2018–2022",
    title: "Firefighter, then not.",
    body: [
      "Worked as a firefighter for four years. Loved the team, loved the work that mattered. But I was the empath on the crew — I carried every bad call home with me. Eventually it caught up.",
      "Left, not because the job was hard, but because I was too empathetic for daily trauma. I needed work that built something instead of constantly responding to things falling apart.",
    ],
  },
  {
    year: "2023",
    title: "Started Kleen Vision.",
    body: [
      "Spent a year shooting photo + video for local Spokane businesses. Gyms became my favorite client — the energy, the people, the actual results.",
      "But every gym I photographed was running terrible software. PushPress, Mindbody, Wodify — all of them frustrated their operators in the same exact ways. Same complaints, every gym.",
    ],
  },
  {
    year: "2024–2025",
    title: "Started recommending workarounds.",
    body: [
      "Twilio for SMS. Mailchimp for email. ChatGPT for follow-up drafting. Calendly for trainer 1:1s. A spreadsheet for at-risk member tracking.",
      "Every gym ended up running six tools and a spreadsheet to do what one tool should have handled. I got tired of recommending it.",
    ],
  },
  {
    year: "2026",
    title: "Started building GymVision.",
    body: [
      "Gas House Gym (Spokane, WA) became the first pilot — 260 members, five years on PushPress, ready to switch. Donnie, the owner, became my design partner.",
      "Eight weeks later we had a working platform. AI receptionist on the gym line. Stripe at-cost billing. Two-way SMS with AI drafting. Member portal as a PWA. One-afternoon migration from any platform.",
      "GymVision is what I wished existed when I was shooting these gyms. Now it does.",
    ],
  },
];

const PRINCIPLES = [
  {
    title: "No VC funding.",
    body: "No board. No pressure to grow at any cost. The roadmap is what operators need, not what investors want to see next quarter.",
  },
  {
    title: "Zero markup on Stripe.",
    body: "Members pay Stripe directly. We never touch the money. This is what locks competitors out — they can&apos;t match it without breaking their revenue model.",
  },
  {
    title: "Operator before scale.",
    body: "Five founding gyms before I open it up. Each one gets my direct line. The system gets better because the operators tell me what's broken.",
  },
  {
    title: "Built in public.",
    body: "Public changelog. Public pricing. Public roadmap. The trust you earn from operators is the only kind that compounds.",
  },
];
