import React from "react";
import { profile } from "../data/portfolio";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between border border-white/10 bg-[#070816]/70 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl">
        <a href="#top" className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
          {profile.name}
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#skills" className="transition hover:text-white">Skills</a>
          <a href="#education" className="transition hover:text-white">Education</a>
          <a href="#certifications" className="transition hover:text-white">Certifications</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
        <a
          href="#contact"
          className="border border-cyan-200/40 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-200 hover:text-slate-950"
        >
          Hire me
        </a>
        <div className="absolute left-4 right-4 top-full mt-2 flex justify-center gap-4 text-xs font-medium text-slate-300 md:hidden">
          <a href="#projects" className="border border-white/10 bg-[#070816]/80 px-3 py-2 backdrop-blur-xl">Projects</a>
          <a href="#skills" className="border border-white/10 bg-[#070816]/80 px-3 py-2 backdrop-blur-xl">Skills</a>
          <a href="#education" className="border border-white/10 bg-[#070816]/80 px-3 py-2 backdrop-blur-xl">Edu</a>
          <a href="#certifications" className="border border-white/10 bg-[#070816]/80 px-3 py-2 backdrop-blur-xl">Certs</a>
          <a href="#contact" className="border border-white/10 bg-[#070816]/80 px-3 py-2 backdrop-blur-xl">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
