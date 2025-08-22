import React from "react";
import "./index.css";
import Navigation from "./components/layout/Navigation";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-dark-bg dark">
      <Navigation />

      <main className="relative pt-20">
        <Hero />

        <About />

        <Projects />

        <Contact />
      </main>

      <footer className="relative z-10 text-center py-8 text-gray-400 border-t border-white/10">
        <div className="container-responsive">
          {/* <p className="mb-2">
            ✨ Desenvolvido com React.js, Tailwind CSS e muito ☕
          </p> */}
          <p className="text-sm">
            © 2025 Filippe Andrade Monteiro. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
