import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="space-x-6">
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
