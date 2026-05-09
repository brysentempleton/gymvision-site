export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(230,51,41,0.15),transparent)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          In private beta
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-6">
          The gym OS that<br />
          <span className="text-[#e63329]">thinks ahead.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
          Replace your gym OS in one afternoon.
          Keep Stripe at-cost. Let AI handle the follow-ups.
          Built by operators, for operators.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#e63329] text-white font-semibold text-base hover:bg-[#c9291f] transition-colors shadow-lg shadow-red-900/30"
          >
            Join the waitlist
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/10 text-white/80 font-semibold text-base hover:border-white/30 hover:text-white transition-colors"
          >
            See what's different →
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {[
            { stat: "$0", label: "Stripe markup" },
            { stat: "99.99%", label: "Uptime SLA" },
            { stat: "1-click", label: "Migration" },
          ].map(({ stat, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-black text-white">{stat}</div>
              <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
