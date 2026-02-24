
import { useState } from "react";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Navigation } from "./components/Navigation";
import { Contact } from "./components/Contact";

export const PortafolioApp = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
