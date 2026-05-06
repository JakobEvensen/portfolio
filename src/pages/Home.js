import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Cypher Translator",
    category: "Utility / Web app",
    year: "2025",
    description: "A focused encoder and decoder for multiple classical ciphers, created as a clean, ad-free tool for coursework and repeat use.",
    impact: "Turned a recurring study need into a fast self-service tool with a clear interface and practical daily value.",
    stack: ["React", "JavaScript", "Netlify", "UX"],
    websiteLink: "https://ciphertranslator.netlify.app",
    githubLink: "https://github.com/JakobEvensen/cipher-translator.git",
    accent: "from-cyan-300 to-blue-500",
  },
  {
    title: "UnionPizza.no",
    category: "Course project / Full-stack",
    year: "2025",
    description: "A web application concept for Union Pizza Drammen, combining a public-facing site with an integrated customer management system.",
    impact: "Practiced end-to-end product delivery, database thinking and the tradeoffs between simple UX and operational workflows.",
    stack: ["Full-stack", "Database", "Customer system", "OsloMet"],
    websiteLink: "https://unionpizza.no",
    githubLink: "https://github.com",
    accent: "from-emerald-300 to-teal-500",
  },
];

const Home = () => {
  return (
    <section id="projects" className="relative bg-[#070816] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200">Selected work</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Case-study driven projects with real product intent.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-400">
            Each project is framed around the problem, outcome and stack so recruiters can quickly understand both craft and engineering judgment.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
