import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#070816] px-5 py-8 text-sm text-slate-500 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row">
        <p>© {new Date().getFullYear()} Jakob Evensen. Built with React.</p>
        <p>Portfolio / Full-stack development / OsloMet</p>
      </div>
    </footer>
  );
};

export default Footer;
