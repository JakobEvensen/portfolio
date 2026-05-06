import React from "react";
import aiImage from "../ai.png";

const Hero = () => {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(47,124,255,0.22),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(27,214,178,0.14),transparent_24%),linear-gradient(135deg,#070816_0%,#0e1528_48%,#111827_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-[#070816] to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-cyan-100 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
            IT-student at OsloMet / Full-stack developer
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] text-white sm:text-6xl lg:text-7xl">
            Jakob Evensen builds clean digital products with practical engineering depth.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            I design and develop fast, usable web experiences with React, Java,
            .NET, Spring Boot and SQL. This portfolio highlights project work,
            product thinking and the systems mindset I bring to teams.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center bg-cyan-300 px-6 py-4 text-sm font-semibold text-slate-950 shadow-[0_20px_70px_rgba(103,232,249,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Explore case studies
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-white/15 bg-white/[0.05] px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-white/10"
            >
              Start a conversation
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-px border border-white/10 bg-white/10">
            {[
              ["02", "Featured builds"],
              ["Full-stack", "Primary focus"],
              ["2026", "Portfolio refresh"],
            ].map(([value, label]) => (
              <div key={label} className="bg-[#0b1020]/80 p-4 backdrop-blur-xl">
                <p className="text-2xl font-semibold text-white">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[520px] lg:min-h-[620px]">
          <div className="absolute left-0 top-8 h-64 w-64 border border-cyan-200/20 bg-cyan-200/10 backdrop-blur-2xl" />
          <div className="absolute bottom-10 right-0 h-72 w-72 border border-blue-200/20 bg-blue-500/10 backdrop-blur-2xl" />
          <div className="group absolute inset-x-3 top-0 overflow-hidden border border-white/12 bg-white/[0.06] p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 sm:inset-x-10">
            <div className="relative h-[420px] overflow-hidden bg-slate-900 sm:h-[520px]">
              <img src={aiImage} alt="Jakob Evensen" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070816] via-[#070816]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200">Available for opportunities</p>
                <p className="mt-3 max-w-sm text-2xl font-semibold leading-tight text-white">Developer profile with design sensitivity and delivery focus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
