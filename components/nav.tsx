"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname() ?? "/";
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);

  // On the home page, nav links scroll to anchors. Off home, they jump back
  // to the home page's section. The dedicated deep pages live alongside.
  const pricingHref = onHome ? "#pricing" : "/#pricing";
  const waitlistHref = onHome ? "#waitlist" : "/#waitlist";

  const links = [
    { href: "/why-gymvision", label: "Why" },
    { href: "/features", label: "Features" },
    { href: pricingHref, label: "Pricing" },
    { href: "/case-study/gas-house", label: "Case study" },
    { href: "/founder", label: "Founder" },
    { href: "/changelog", label: "Changelog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-black text-lg tracking-tight hover:opacity-80 transition-opacity">
          Gym<span className="text-[#e63329]">Vision</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/60">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={waitlistHref}
            className="inline-flex items-center justify-center h-9 px-5 rounded-full bg-[#e63329] text-white text-sm font-semibold hover:bg-[#c9291f] transition-colors"
          >
            Get early access
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg text-white/70 hover:text-white transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-white/[0.06] bg-[#0a0a0a]/95 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-white/70 hover:text-white transition-colors border-b border-white/[0.04] last:border-0"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
