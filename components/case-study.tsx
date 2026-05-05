export function CaseStudySection() {
  return (
    <section id="case-study" className="py-32 px-6 bg-white/[0.02]">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-[#e63329] font-mono text-xs uppercase tracking-[0.2em] mb-3">Live deployment</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Gas House Gym</h2>
          <p className="mt-3 text-white/50">Spokane, WA · 260 members · Displacing PushPress</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { stat: "260", label: "Active members", sub: "imported from PushPress in one day" },
            { stat: "$22.8k", label: "Monthly member revenue", sub: "tracked in real-time" },
            { stat: "$1,400/mo", label: "PushPress cost displaced", sub: "now $0 platform fee" },
          ].map(({ stat, label, sub }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <div className="text-4xl font-black text-[#e63329]">{stat}</div>
              <div className="text-sm font-semibold mt-2">{label}</div>
              <div className="text-xs text-white/40 mt-1">{sub}</div>
            </div>
          ))}
        </div>

        <blockquote className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <div className="text-4xl text-white/10 font-serif absolute top-4 left-6">&ldquo;</div>
          <p className="text-lg text-white/80 leading-relaxed pl-6 italic">
            The design is the first thing everyone notices. But what got me was the AI — it flagged three members I had completely forgotten about as at-risk before they cancelled. That&apos;s the kind of thing I could never do manually at 260 members.
          </p>
          <footer className="mt-4 pl-6 text-sm text-white/40">
            — Donnie Santos, Owner, Gas House Gym
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
