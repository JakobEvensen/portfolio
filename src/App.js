import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Home />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
