import React, { useState } from "react";
import { profile } from "../data/portfolio";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-8">
      <div className="mx-auto max-w-7xl border border-white/10 bg-[#070816]/75 shadow-2xl shadow-black/20 backdrop-blur-2xl">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.28em] text-white" onClick={() => setIsOpen(false)}>
            {profile.name}
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden border border-cyan-200/40 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-200 hover:text-slate-950 sm:inline-flex"
          >
            Hire me
          </a>
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.06] text-white transition hover:border-cyan-200/40 hover:bg-white/10 lg:hidden"
          >
            <span className="relative h-4 w-5">
              <span className={`absolute left-0 top-0 h-px w-5 bg-current transition duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-2 h-px w-5 bg-current transition duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-4 h-px w-5 bg-current transition duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        <div className={`grid overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="grid gap-px bg-white/10 p-px">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between bg-[#090d1b]/95 px-4 py-4 text-sm font-medium text-slate-200 transition hover:bg-white/[0.08] hover:text-white"
              >
                {link.label}
                <span className="text-cyan-200">-&gt;</span>
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center bg-cyan-300 px-4 py-4 text-sm font-semibold text-slate-950 transition hover:bg-white sm:hidden"
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
