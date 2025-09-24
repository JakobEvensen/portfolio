import React from "react";

const ProjectCard = ({ title, description, websiteLink, githubLink }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex gap-4">
        {websiteLink && (
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Live Site
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
