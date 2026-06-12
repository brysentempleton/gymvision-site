import type { Metadata } from "next";
import { NavBar } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service: GymVision",
  description:
    "Terms for using the GymVision website, waitlist, and AI demo call. Plain English, no gotchas.",
};

const SECTIONS = [
  {
    title: "What this covers",
    body: [
      "These terms cover the GymVision website, the early-access waitlist, and the AI receptionist demo call. The GymVision platform itself is in private beta; pilot gyms get a separate agreement that covers the actual service.",
    ],
  },
  {
    title: "The demo call",
    body: [
      "When you submit your phone number, you're asking us to place one automated demo call to that number, and you confirm the number is yours (or that you're authorized to receive calls on it). Don't submit someone else's number. We limit demo calls to one per number per day.",
      "The demo is a demonstration of the AI receptionist, not gym advice, business advice, or a commitment that the production product behaves identically.",
    ],
  },
  {
    title: "The waitlist",
    body: [
      "Joining the waitlist reserves a conversation, not a contract. Founding-member pricing applies to pilot gyms we onboard, as described at the time we make you an offer. We can't guarantee a pilot slot for everyone.",
    ],
  },
  {
    title: "Acceptable use",
    body: [
      "Don't abuse the forms, scrape the site, probe the demo line, or submit phone numbers that aren't yours. We rate-limit and may block abusive traffic.",
    ],
  },
  {
    title: "No warranties, limited liability",
    body: [
      "This site and the demo are provided as-is, without warranties of any kind. To the maximum extent allowed by law, GymVision and its operator aren't liable for indirect or consequential damages arising from your use of this site or the demo. Nothing here limits liability that can't legally be limited.",
    ],
  },
  {
    title: "Changes and contact",
    body: [
      "We may update these terms as the product moves from beta to general availability; material changes get a new date below. Questions or disputes: email brybuscas@gmail.com first, we respond fast and fix things. These terms are governed by the laws of Washington State, USA.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <NavBar />
      <main className="pt-24 pb-32">
        <section className="mx-auto max-w-3xl px-6 mb-12">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#e63329] mb-4">
            Terms
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95] mb-6">
            Terms of service.
          </h1>
          <p className="text-lg text-white/60 leading-relaxed">
            Plain English. The product is in private beta; these terms cover
            the website, the waitlist, and the AI demo call.
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
            Last updated June 11, 2026. Contact:{" "}
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
