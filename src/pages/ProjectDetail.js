import React from "react";

const detailSections = [
  ["Overview", "overview"],
  ["My role", "role"],
  ["What I learned", "learned"],
  ["Challenges", "challenges"],
  ["What I would improve", "improvements"],
];

const ProjectDetail = ({ project }) => {
  if (!project) {
    return (
      <main className="min-h-screen bg-[#070816] px-5 py-32 text-slate-100 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200">Project not found</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">This project page does not exist.</h1>
          <a href="#projects" className="mt-8 inline-flex bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white">
            Back to projects
          </a>
        </div>
      </main>
    );
  }

  const screenshots = project.details?.screenshots || [];

  return (
    <main className="relative min-h-screen bg-[#070816] px-5 pb-24 pt-32 text-slate-100 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_10%,rgba(103,232,249,0.14),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.13),transparent_24%)]" />
      <div className="relative mx-auto max-w-7xl">
        <a href="#projects" className="inline-flex items-center text-sm font-semibold text-cyan-200 transition hover:text-white">
          &lt;- Back to projects
        </a>

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="flex flex-wrap gap-3">
              <span className="border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                {project.category}
              </span>
              <span className="border border-cyan-200/30 bg-cyan-200/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                {project.year}
              </span>
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{project.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.websiteLink && (
                <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
                  View live
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Source code
                </a>
              )}
              {project.accessNote && (
                <div className="border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-slate-300">
                  <span className="mr-2 text-cyan-200">Private project</span>
                  {project.accessNote}
                </div>
              )}
            </div>
          </div>

          <aside className="border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/25 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Stack</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-300">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 border-l border-cyan-200/40 pl-4">
              <p className="text-sm leading-6 text-slate-400">{project.impact}</p>
            </div>
          </aside>
        </section>

        <section className="mt-16 grid gap-5 lg:grid-cols-2">
          {detailSections.map(([label, key]) => (
            project.details?.[key] && (
              <article key={key} className="border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <h2 className="text-2xl font-semibold text-white">{label}</h2>
                <p className="mt-4 leading-7 text-slate-300">{project.details[key]}</p>
              </article>
            )
          ))}
        </section>

        {screenshots.length > 0 && (
          <section className="mt-16">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200">Visuals</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Screenshots and code snippets.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {screenshots.map((screenshot) => (
                <figure key={screenshot.src} className="overflow-hidden border border-white/10 bg-white/[0.045] p-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
                  <img src={screenshot.src} alt={screenshot.alt} className="h-auto w-full bg-[#090d1b] object-cover" />
                  {screenshot.caption && (
                    <figcaption className="px-2 pb-2 pt-4 text-sm leading-6 text-slate-400">{screenshot.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProjectDetail;
