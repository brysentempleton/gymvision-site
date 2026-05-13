import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Changelog — GymVision",
  description: "Every shipped change to GymVision. Updated weekly. Built in public.",
};

// Public changelog. Honest, shipped-this-week shape. Trust-builder + SEO content
// engine. Each entry: date, scope (admin/desk/portal/platform), one-line
// headline + 3-7 bullets of what shipped.

export default function ChangelogPage() {
  return (
    <>
      <NavBar />
      <main className="pt-24 pb-32">
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 mb-16">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#e63329] mb-4">
            Changelog
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95] mb-6">
            Every shipped change.
          </h1>
          <p className="text-lg text-white/60 leading-relaxed">
            Updated weekly. No marketing fluff — just what we shipped, when, and why.
            Built in public because operators deserve to see the velocity before they sign.
          </p>
        </section>

        {/* Entries */}
        <section className="mx-auto max-w-3xl px-6">
          <div className="space-y-12">
            {ENTRIES.map((e) => (
              <article
                key={e.date}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#e63329]" />
                <div className="flex items-baseline justify-between gap-3 flex-wrap mb-2">
                  <time className="text-xs font-mono text-white/50">{e.date}</time>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#e63329] bg-[#e63329]/10 border border-[#e63329]/30 rounded-full px-2 py-0.5">
                    {e.scope}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-3">{e.title}</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">{e.body}</p>
                <ul className="space-y-1.5">
                  {e.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm text-white/70 flex items-start gap-2"
                    >
                      <span className="text-[#e63329] mt-0.5">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Sign-off CTA */}
        <section className="mx-auto max-w-2xl px-6 text-center mt-24">
          <p className="text-base text-white/60 mb-8">
            Want changelog updates by email? Join the waitlist and you&apos;ll get every
            weekly digest until launch.
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

const ENTRIES = [
  {
    date: "May 13, 2026",
    scope: "Admin · Portal",
    title: "Sentence-case overhaul + gym-driven accent system",
    body: "Stripped the platform-amber accent that was bleeding onto every surface, replaced with a 4-tier cascade derived from each gym's own accent_color. Sentence case headlines everywhere. Avatar dropdown reduced to profile + account + settings + sign out. Codemod touched 204 files (1,293 uppercase removed, 1,037 trackings loosened).",
    bullets: [
      "Gym accent flows through admin, desk, coach, and portal — not just member surfaces",
      "CSS color-mix() derives accent / hot / deep / muted from a single gym setting",
      "Onboarding checklist collapsed from a 50%-viewport panel to a 40px banner with click-to-expand",
      "Public marketing site (this one) intentionally stays in its bold-allcaps register",
    ],
  },
  {
    date: "May 13, 2026",
    scope: "Platform",
    title: "Pilot-#2 unblocker — content.ts retired",
    body: "Every Gas-House-specific string used to be reachable via a fallback in content.ts. Today: deleted. Site-wide content now reads from gym_settings DB exclusively. New tenants land on a generic blank-gym shape, never Gas House defaults.",
    bullets: [
      "Site routes moved to a properly-named module (was misleadingly called `pushpress`)",
      "getGymSettings fallback rewritten to safe blank-gym defaults",
      "Ready to onboard pilot #2 with no codebase changes",
    ],
  },
  {
    date: "May 13, 2026",
    scope: "Desk",
    title: "/desk counter portal — 12 shipped items",
    body: "Front-desk staff get a purpose-built counter portal (not a stripped-down admin). Multi-modal check-in, walk-in capture, photo-grid attendance, counter payments — all the verbs a front desk actually uses, none of the admin clutter.",
    bullets: [
      "Multi-modal check-in dispatcher (search · phone · QR · photo-grid tap)",
      "3-step walk-in lead capture (under 30s for Step 1)",
      "Counter payments: drop-in via Stripe, cash collection, saved-card retry",
      "Tablet waiver hand-off with single-use signing tokens",
      "Async escalation to owner (silent badge) + opt-in urgent SMS (Twilio)",
    ],
  },
  {
    date: "May 13, 2026",
    scope: "Admin",
    title: "Schedule + Comms + Billing arch rewrite",
    body: "Three admin surfaces shipped in their final shape. Schedule gets a 7-day Calendar grid + List bulk-ops. Comms consolidates Inbound + Outbound + Templates into one tabbed surface. Billing pivots from analytics-first to operator-first.",
    bullets: [
      "/admin/schedule — Calendar week view + List bulk-cancel/bulk-uncancel",
      "/admin/comms — Inbound default tab + Outbound + Templates",
      "/admin/billing — Today queue (failed payments + refunds + manual) as the default tab; analytics moved to History",
    ],
  },
  {
    date: "May 13, 2026",
    scope: "Build",
    title: "Deploy loop hardened",
    body: "Three real build failures in one day prompted three guardrails: pre-push hook runs pnpm build locally, @sentry/cli postinstall approval, Enhanced Build Machines (16GB / 8 vCPU). Net effect: the deploy loop is no longer the bottleneck.",
    bullets: [
      "Husky pre-push hook: 15s local build vs 5–15 min Vercel cycle",
      "Vercel Enhanced Build Machines: permanent OOM ceiling fix",
      "Sentry config migrated from deprecated `disableLogger` to `webpack.treeshake.removeDebugLogging`",
    ],
  },
  {
    date: "May 9, 2026",
    scope: "Platform",
    title: "Notification severity tiers",
    body: "Three-tier severity model (critical / important / informational) per the admin brief. Bell badge counts only critical + important. Informational rows live in history but never drive a badge.",
    bullets: [
      "Migration 0072: notification_severity ENUM + indexed bell-badge query",
      "Bell renders red bg for critical, accent for important, no badge for informational",
      "Failed payment + coach no-show flagged critical; new lead + churn ≥75 flagged important",
    ],
  },
  {
    date: "May 6, 2026",
    scope: "Platform",
    title: "Multi-tenant RLS isolation (21 tables)",
    body: "Tenant data isolation enforced at the database layer. RESTRICTIVE policies on every tenant-scoped table. JWT carries gym_id via Supabase Auth Hook for per-query authorization without round-trips.",
    bullets: [
      "21 tables wrapped in tenant_isolation RESTRICTIVE policies",
      "custom_access_token_hook live — JWT-fast-path RLS",
      "effective_gym_id() Postgres helper with hook-first / lookup-fallback semantics",
    ],
  },
];
