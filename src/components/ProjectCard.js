import React from "react";

const ProjectCard = ({
  title,
  category,
  year,
  description,
  impact,
  stack,
  websiteLink,
  githubLink,
  accessNote,
  accent,
  index,
}) => {
  return (
    <article className="group relative min-h-[400px] overflow-hidden border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-white/25">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} />
      <div className="absolute right-5 top-5 text-7xl font-semibold text-white/[0.035] transition duration-500 group-hover:text-white/[0.06]">
        0{index + 1}
      </div>
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between gap-4 text-sm text-slate-400">
          <span>{category}</span>
          <span>{year}</span>
        </div>
        <h3 className="mt-7 max-w-md text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h3>
        <p className="mt-4 leading-7 text-slate-300">{description}</p>
        <p className="mt-4 border-l border-cyan-200/40 pl-4 text-sm leading-6 text-slate-400">{impact}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span key={item} className="border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-300">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          {websiteLink && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-200"
            >
              View live
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-white/15 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/10"
            >
              Source code
            </a>
          )}
          {accessNote && (
            <div className="border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-slate-300">
              <span className="mr-2 text-cyan-200">Private project</span>
              {accessNote}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
