const STEPS = [
  { n: "1", title: "Export from PushPress", body: "Hit Export in PushPress. You get a CSV dump of members, payments, and history. Takes 30 seconds." },
  { n: "2", title: "Import into GymVision", body: "Drop the CSV. GymVision maps columns, deduplicates, and confirms the count before importing anything." },
  { n: "3", title: "Members self-migrate", body: "Every member gets an email: \"Tap here to set up your new account.\" No staff calls. No confusion." },
  { n: "4", title: "Flip the DNS", body: "Update your domain. GymVision provisions SSL. Done. PushPress never knows you left." },
];

export function MigrationSection() {
  return (
    <section id="migrate" className="py-32 px-6 bg-white/[0.02]">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-[#e63329] font-mono text-xs uppercase tracking-[0.2em] mb-3">Migration</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            One afternoon.<br />Not one week.
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-lg mx-auto">
            We&apos;ve done the migration so many times we made it a feature. Your members don&apos;t even notice.
          </p>
        </div>

        <div className="space-y-4">
          {STEPS.map(({ n, title, body }) => (
            <div key={n} className="flex gap-6 items-start rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
              <div className="shrink-0 w-10 h-10 rounded-full border border-[#e63329]/40 bg-[#e63329]/10 text-[#e63329] flex items-center justify-center font-black text-lg">
                {n}
              </div>
              <div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-white/50 text-sm mt-1 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex items-start gap-4">
          <span className="text-2xl shrink-0">💬</span>
          <div>
            <p className="font-semibold text-sm">Works from Mindbody and Wodify too.</p>
            <p className="text-white/50 text-sm mt-1">Same process, different CSVs. We&apos;ve mapped the column formats. <a href="#waitlist" className="text-[#ff6b63] underline underline-offset-4 hover:text-[#ff8a84]">Talk to us</a> if you&apos;re on something else.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
