"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-sm bg-[#5A2DFF]" />
          <span className="text-sm font-semibold text-slate-50 tracking-wide">
            Flux
          </span>
        </div>

        <nav className="flex items-center gap-4 text-xs font-medium text-slate-300">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "px-2 py-1 rounded-md transition " +
                  (active
                    ? "bg-slate-900 text-slate-50"
                    : "hover:bg-slate-900 hover:text-slate-100")
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
