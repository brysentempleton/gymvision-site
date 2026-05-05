export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-black text-base tracking-tight">
          Gym<span className="text-[#e63329]">Vision</span>
        </span>
        <p className="text-xs text-white/30 text-center">
          Built by operators, for operators. Not VC-funded. Not PushPress.
        </p>
        <div className="flex items-center gap-4 text-xs text-white/40">
          <a href="mailto:hello@gymvision.com" className="hover:text-white transition-colors">hello@gymvision.com</a>
        </div>
      </div>
    </footer>
  );
}
