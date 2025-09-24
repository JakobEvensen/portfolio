import React from "react";

const skills = ["Java","Python","SQL","React", "Tailwind CSS", "JavaScript",".NET","Springboot", "HTML", "CSS", "Git"];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen p-8 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
