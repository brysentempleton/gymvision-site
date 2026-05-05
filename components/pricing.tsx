const PLANS = [
  {
    name: "Starter",
    price: "$249",
    interval: "/mo",
    description: "Everything a growing gym needs to run and retain.",
    features: [
      "Up to 150 members",
      "Stripe at-cost payments",
      "AI-drafted broadcasts",
      "Churn risk scoring",
      "Two-way SMS",
      "Member portal + kiosk",
      "1-click data export",
    ],
    cta: "Join waitlist",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$499",
    interval: "/mo",
    description: "For gyms doing serious volume who want the full AI stack.",
    features: [
      "Unlimited members",
      "Everything in Starter",
      "AI cancellation triage",
      "AI Cmd+K assistant",
      "AI SMS reply drafts",
      "Custom domains",
      "API + webhooks",
      "Weekly digest reports",
      "Priority support",
    ],
    cta: "Join waitlist",
    highlight: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-[#e63329] font-mono text-xs uppercase tracking-[0.2em] mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Flat rate. No surprises.</h2>
          <p className="mt-4 text-white/50 text-lg max-w-lg mx-auto">
            One price. No per-member fees. No payment processing markup. No hostage clause.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 flex flex-col ${
                plan.highlight
                  ? "border-[#e63329]/60 bg-[#e63329]/[0.06]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.highlight && (
                <div className="inline-flex self-start items-center px-3 py-1 rounded-full bg-[#e63329]/20 text-[#e63329] text-xs font-mono uppercase tracking-wider mb-4">
                  Most popular
                </div>
              )}
              <h3 className="text-2xl font-black">{plan.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-5xl font-black">{plan.price}</span>
                <span className="text-white/40">{plan.interval}</span>
              </div>
              <p className="mt-3 text-sm text-white/50">{plan.description}</p>
              <ul className="mt-6 space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className="text-[#e63329] mt-0.5 shrink-0">✓</span>
                    <span className="text-white/70">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className={`mt-8 inline-flex items-center justify-center h-11 rounded-full font-semibold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-[#e63329] text-white hover:bg-[#c9291f]"
                    : "border border-white/20 text-white hover:border-white/40"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-white/30 mt-8">
          Early access gyms lock in founding pricing forever. + Stripe fees (2.9% + 30¢) paid directly to Stripe — GymVision takes zero cut.
        </p>
      </div>
    </section>
  );
}
