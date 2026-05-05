const FEATURES = [
  {
    icon: "⚡",
    title: "AI-native everywhere",
    body: "AI drafts your broadcasts, triages cancellations, suggests SMS replies, and surfaces at-risk members before you notice. Not bolted on — built in.",
  },
  {
    icon: "💳",
    title: "Stripe at-cost",
    body: "We take zero markup on payments. You pay Stripe's 2.9% + 30¢ and nothing more. At $20k/mo volume that's $4,800/year back in your pocket vs. PushPress.",
  },
  {
    icon: "📤",
    title: "1-click data export",
    body: "Your members, payments, and history export in seconds. No hostage-taking, no \"migration fee.\" We win by being better, not by locking you in.",
  },
  {
    icon: "📊",
    title: "Churn intelligence",
    body: "AI churn-risk scoring surfaces which members are at risk — and why — before they cancel. Habits, check-in streaks, class affinity, and more.",
  },
  {
    icon: "📱",
    title: "PWA — works offline",
    body: "Kiosk check-ins queue locally when your WiFi drops and sync when you reconnect. No special hardware. Runs on any tablet.",
  },
  {
    icon: "🧩",
    title: "Built on Stripe + Supabase",
    body: "The same infrastructure Fortune 500 companies use. Real-time updates, battle-tested security, and 99.99% uptime — not managed WordPress.",
  },
];

export function WedgeSection() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-[#e63329] font-mono text-xs uppercase tracking-[0.2em] mb-3">Why GymVision</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Not another PushPress clone.
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            Four genuine wedges that competitors haven&apos;t touched — and won&apos;t touch, because it would break their revenue model.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {FEATURES.map(({ icon, title, body }) => (
            <div key={title} className="bg-[#0a0a0a] p-8 hover:bg-white/[0.03] transition-colors">
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
