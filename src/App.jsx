import React, { useRef } from "react";
import SplashCursor from "./components/SplashCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import Particles from "./components/Particles";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Social from "./components/Social";
import Projects from "./components/Projects";

function App() {
  const refSection = useRef(null);

  const scrollToSection = () => {
    if (refSection.current) {
      refSection.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <main className="max-w-[1500px] mx-auto custom-font">
        <div className="absolute hidden md:block w-full h-full min-h-screen max-w-screen-xl mx-auto">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <SplashCursor />
        <Header />
        <Hero scrollToSection={scrollToSection} />

        <div className="text-white p-4" ref={refSection}>
          <Projects />
        </div>

        {/* GET IN Touch section */}
        <section>
          <Form />
        </section>

        {/* Footer Section */}
        <section>
          <Footer />
          <Social />
        </section>
      </main>
    </>
  );
}

export default App;
