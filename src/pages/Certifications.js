import React from "react";
import { certifications } from "../data/portfolio";

const Certifications = () => {
  return (
    <section id="certifications" className="bg-[#070816] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200">Certifications</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Completed credentials and what I am currently working on.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-400">
            I do not currently hold certifications, but I am actively planning which ones best support my interest in cloud computing, infrastructure and reliable systems.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((certification) => (
            <article key={certification.title} className="border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/25 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/25">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="border border-cyan-200/30 bg-cyan-200/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  {certification.status}
                </span>
                <span className="text-sm font-medium text-slate-400">{certification.timeline}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{certification.title}</h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">{certification.provider}</p>
              <p className="mt-5 leading-7 text-slate-300">{certification.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
