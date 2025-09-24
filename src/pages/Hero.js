import React from "react";
import aiImage from "../ai.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-gradient-to-br from-blue-50 to-gray-100 relative">
      
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${aiImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black/50 md:hidden"></div> {/* overlay */}

      <div className="md:flex-[0_0_45%] relative z-10 text-center md:text-left mb-12 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white md:text-gray-900">
          Jakob <span className="text-blue-400 md:text-blue-600">Evensen</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-white md:text-gray-700">
          IT-student & developer
        </h2>
        <p className="max-w-xl mb-8 leading-relaxed text-white md:text-gray-600">
          Bachelor student in Information Technology at OsloMet, developing skills in fullstack development and system design. <br />
          Explore my portfolio to see some of the projects I've built and contributed to.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full shadow-lg hover:bg-gray-300 transition"
          >
            Contact me
          </a>
        </div>
      </div>

      <div className="hidden md:flex md:flex-[0_0_35%] justify-center md:justify-start">
        <div className="relative w-64 h-64 md:w-72 md:h-72 overflow-hidden shadow-2xl">
          <img
            src={aiImage}
            alt="Jakob Evensen"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/20"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
