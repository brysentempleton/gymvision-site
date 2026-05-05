export function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <span className="font-black text-lg tracking-tight">
          Gym<span className="text-[#e63329]">Vision</span>
        </span>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#case-study" className="hover:text-white transition-colors">Case Study</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#migrate" className="hover:text-white transition-colors">Migration</a>
        </nav>
        <a
          href="#waitlist"
          className="inline-flex items-center justify-center h-9 px-5 rounded-full bg-[#e63329] text-white text-sm font-semibold hover:bg-[#c9291f] transition-colors"
        >
          Get early access
        </a>
      </div>
    </header>
  );
}
