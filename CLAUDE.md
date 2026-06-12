# GymVision Site

Marketing + changelog site for GymVision SaaS. Next.js 16 + Tailwind + shadcn. Vercel auto-deploys from main. Live URL: `https://gymvision-site.vercel.app` (production alias). **No custom domain yet: `gymvision.app` is NOT ours** (it serves a third-party "AI Workout Planner" product); `gymvision.co` / `getgymvision.com` ownership unverified. When a real domain is bought and attached, update metadataBase (`app/layout.tsx`), `app/sitemap.ts`, `app/robots.ts`, and the vs-PushPress canonical.

**Full ship sequence, pre-flight gates, changelog pipeline detail:**
`~/.openclaw/workspace/05-system/runbooks/gymvision-site-runbook-2026-05-25.md`

---

## Canonical Task

Ongoing marketing surface. Changelog auto-drafted Friday 4pm PT via `koios-changelog-draft` → review at `~/.openclaw/workspace/06-inbox/changelog-draft-YYYY-MM-DD.md` → publish to `app/changelog/page.tsx`.

---

## Commands

```bash
pnpm build         # must be green
pnpm tsc --noEmit  # types must pass
/ship              # runs full pre-ship sequence (build → types → /ui-check → push → verify)
```

---

## Non-Negotiable Warnings (WILL break)

1. **No Gas House Gym theming as site chrome.** This is the GymVision marketing site, NOT a tenant: never import Gas House brand tokens, logos, or colors into the layout/nav/global styles. Gas House *mentions* are expected and correct: it is the flagship case study (`/case-study/gas-house`, homepage CaseStudySection, founder story). Gate on theming, not on the string. (Rule narrowed 2026-06-11; the old "grep must be empty" check is impossible now that the case study exists.)
2. **Vercel deployment-protection must be OFF** before any client share.
3. **Brand isolation:** GymVision's own brand. Do NOT import Koios/KV spatial-glass tokens — use `app/globals.css`.
