import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Cypher Translator",
    description: "I needed a encoder/decoder for different cyphers for a course i was taking. By making this myself i always had a free and ad-less resource at my disposal.",
    websiteLink: "https://ciphertranslator.netlify.app",
    githubLink: "https://github.com/JakobEvensen/cipher-translator.git",
  },
  {
    title: "UnionPizza.no",
    description: "Developed a simple web application for Union Pizza Drammen as part of a course project at OsloMet. Implemented a basic website with an integrated customer management system. Although frontend was not my main focus, the project gave me valuable experience in full-stack development.",
    websiteLink: "https://unionpizza.no",
    githubLink: "https://github.com",
  },
];

const Home = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-50 p-8 pt-32">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Home;
