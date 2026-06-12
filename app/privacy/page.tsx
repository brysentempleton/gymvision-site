import type { Metadata } from "next";
import { NavBar } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy: GymVision",
  description:
    "What GymVision collects on this site, why, and what we never do with it. Short version: two forms, no trackers, no selling data.",
};

const SECTIONS = [
  {
    title: "What we collect",
    body: [
      "This site has exactly two places where you give us information, and both are voluntary.",
      "The waitlist form collects your email address, and optionally your gym's name and rough member count. The AI demo form collects your phone number and optionally your gym's name, used to place the single demo call you requested.",
      "Like nearly every website, our hosting provider (Vercel) keeps standard server logs, including IP addresses, for security and debugging. We run no analytics scripts, no advertising pixels, and no tracking cookies.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "Waitlist submissions are delivered to us by email (via Resend, our email processor) and used for one thing: reaching out to you about GymVision early access.",
      "Demo-call phone numbers are used to place the one outbound AI call you asked for, through Vapi, our voice-AI provider. Demo calls may be processed and transcribed by Vapi to make the conversation work. We limit demo calls to one per number per day.",
      "By requesting a demo call, you consent to receiving that single automated call at the number you provided. It is not a sales cadence; you will not get recurring automated calls.",
    ],
  },
  {
    title: "What we never do",
    body: [
      "We do not sell your data. We do not share it with advertisers. We do not add you to automated drip campaigns. When we say we'll reach out personally, we mean a human (Brysen) sending you a message.",
    ],
  },
  {
    title: "Who processes your data",
    body: [
      "Vercel (hosting and server logs), Resend (email delivery), and Vapi (the AI demo call). Each receives only what it needs to do its job.",
    ],
  },
  {
    title: "Retention and your rights",
    body: [
      "We keep waitlist and demo-call information only as long as it's useful for onboarding pilot gyms. Want your information corrected or deleted? Email brybuscas@gmail.com and it's done, no questions, no forms.",
    ],
  },
  {
    title: "Changes",
    body: [
      "If this policy changes in a way that matters, we'll update this page and note the date below. We won't quietly expand what we collect.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main className="pt-24 pb-32">
        <section className="mx-auto max-w-3xl px-6 mb-12">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#e63329] mb-4">
            Privacy
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95] mb-6">
            Privacy policy.
          </h1>
          <p className="text-lg text-white/60 leading-relaxed">
            Short version: two voluntary forms, no trackers, nothing sold,
            delete on request. The long version below is still short.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl md:text-2xl font-bold mb-3">{s.title}</h2>
              <div className="space-y-3">
                {s.body.map((p, i) => (
                  <p key={i} className="text-white/60 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
          <p className="text-sm text-white/40 pt-4 border-t border-white/[0.06]">
            Last updated June 11, 2026. Questions:{" "}
            <a href="mailto:brybuscas@gmail.com" className="underline underline-offset-2 hover:text-white transition-colors">
              brybuscas@gmail.com
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
