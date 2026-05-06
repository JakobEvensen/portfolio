import React from "react";
import { skillGroups } from "../data/portfolio";

const Skills = () => {
  return (
    <section id="skills" className="relative bg-[#070816] px-5 py-24 text-slate-100 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(103,232,249,0.1),transparent_28%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200">Capabilities</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Technical areas I am building on.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/25">
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{group.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
