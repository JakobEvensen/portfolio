import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#070816] font-sans text-slate-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Home />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
