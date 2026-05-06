import React from "react";
import { education } from "../data/portfolio";

const Education = () => {
  return (
    <section id="education" className="relative bg-[#070816] px-5 py-24 text-slate-100 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.11),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200">Education</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Academic foundation.
          </h2>
        </div>

        <div className="grid gap-5">
          {education.map((item) => (
            <article key={item.degree} className="grid gap-6 border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/25 backdrop-blur-xl transition duration-300 hover:border-white/25 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <div className="flex flex-wrap gap-3">
                  <span className="border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                    {item.status}
                  </span>
                  <span className="border border-cyan-200/30 bg-cyan-200/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                    {item.period}
                  </span>
                </div>
                <h3 className="mt-6 text-3xl font-semibold tracking-tight text-white">{item.degree}</h3>
                <p className="mt-2 text-lg font-medium text-slate-300">{item.school}</p>
                <p className="mt-5 max-w-3xl leading-7 text-slate-400">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
