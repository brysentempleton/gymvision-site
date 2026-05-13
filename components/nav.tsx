"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname() ?? "/";
  const onHome = pathname === "/";

  // On the home page, nav links scroll to anchors. Off home, they jump back
  // to the home page's section. The dedicated deep pages live alongside.
  const featuresHref = onHome ? "#features" : "/#features";
  const pricingHref = onHome ? "#pricing" : "/#pricing";
  const waitlistHref = onHome ? "#waitlist" : "/#waitlist";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-black text-lg tracking-tight hover:opacity-80 transition-opacity">
          Gym<span className="text-[#e63329]">Vision</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/60">
          <Link href="/why-gymvision" className="hover:text-white transition-colors">
            Why
          </Link>
          <Link href="/features" className="hover:text-white transition-colors">
            Features
          </Link>
          <a href={pricingHref} className="hover:text-white transition-colors">
            Pricing
          </a>
          <Link href="/case-study/gas-house" className="hover:text-white transition-colors">
            Case study
          </Link>
          <Link href="/founder" className="hover:text-white transition-colors">
            Founder
          </Link>
          <Link href="/changelog" className="hover:text-white transition-colors">
            Changelog
          </Link>
        </nav>
        <a
          href={waitlistHref}
          className="inline-flex items-center justify-center h-9 px-5 rounded-full bg-[#e63329] text-white text-sm font-semibold hover:bg-[#c9291f] transition-colors"
        >
          Get early access
        </a>
      </div>
    </header>
  );
}
