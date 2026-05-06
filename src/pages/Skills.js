import React from "react";

const groups = [
  {
    title: "Frontend craft",
    description: "Interfaces that feel fast, clear and intentional across devices.",
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Responsive UI"],
  },
  {
    title: "Backend systems",
    description: "Practical foundations for APIs, data handling and maintainable application logic.",
    skills: ["Java", "Python", ".NET", "Spring Boot", "SQL", "System design"],
  },
  {
    title: "Delivery mindset",
    description: "Comfortable moving from idea to working product with structure and iteration.",
    skills: ["Git", "Full-stack", "UX thinking", "Testing basics", "Documentation"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#eef3f8] px-5 py-24 text-slate-950 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">Capabilities</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              A full-stack toolkit with a designer's eye for detail.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {groups.map((group) => (
              <div key={group.title} className="border border-slate-950/10 bg-white p-6 shadow-xl shadow-slate-200/60 transition duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{group.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
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
