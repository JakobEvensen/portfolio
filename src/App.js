import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import Footer from "./components/Footer";
import { projects } from "./data/portfolio";

const getCurrentHash = () => window.location.hash.replace(/^#/, "");

function App() {
  const [hash, setHash] = useState(getCurrentHash);
  const projectSlug = hash.startsWith("project/") ? hash.replace("project/", "") : "";
  const activeProject = projectSlug ? projects.find((project) => project.slug === projectSlug) : null;

  useEffect(() => {
    const handleHashChange = () => {
      const nextHash = getCurrentHash();

      setHash(nextHash);

      if (nextHash.startsWith("project/")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      window.setTimeout(() => {
        document.getElementById(nextHash)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#070816] font-sans text-slate-100 antialiased">
      <Navbar />
      {projectSlug ? (
        <ProjectDetail project={activeProject} />
      ) : (
        <main>
          <Hero />
          <Home />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
