export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-sm bg-[#5A2DFF]" />
          <span className="text-xs font-semibold text-slate-200">Flux</span>
        </div>

        <p className="text-[11px] text-slate-400">
          © {new Date().getFullYear()} Flux. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
