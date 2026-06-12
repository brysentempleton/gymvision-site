import Link from "next/link";

const SECTIONS = [
  {
    label: "Product",
    links: [
      { href: "/why-gymvision", label: "Why GymVision" },
      { href: "/features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
    ],
  },
  {
    label: "Proof",
    links: [
      { href: "/case-study/gas-house", label: "Gas House case study" },
      { href: "/changelog", label: "Changelog" },
    ],
  },
  {
    label: "Company",
    links: [
      { href: "/founder", label: "Founder" },
      { href: "/#waitlist", label: "Get early access" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-black text-lg tracking-tight hover:opacity-80 transition-opacity inline-block">
              Gym<span className="text-[#e63329]">Vision</span>
            </Link>
            <p className="text-sm text-white/50 mt-3 max-w-xs leading-relaxed">
              The gym OS that thinks ahead. Built by operators, for operators.
            </p>
          </div>

          {/* Link columns */}
          {SECTIONS.map((s) => (
            <div key={s.label}>
              <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">
                {s.label}
              </div>
              <ul className="space-y-2">
                {s.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>Not VC-funded. No board. No churn-tax pressure.</p>
          <a
            href="mailto:brybuscas@gmail.com"
            className="font-mono hover:text-white transition-colors"
          >
            brybuscas@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
