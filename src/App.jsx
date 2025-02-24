import React, { useRef } from "react";
import SplashCursor from "./components/SplashCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import Particles from "./components/Particles";

function App() {
  const refSection = useRef(null);

  const scrollToSection = () => {
    if (refSection.current) {
      refSection.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <main className="max-w-[1500px] mx-auto bg-[]">
        <div className="absolute w-full h-full min-h-screen max-w-screen-xl mx-auto">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <SplashCursor />
        <Header />
        <Hero scrollToSection={scrollToSection} />
        <div className="text-white mt-4" ref={refSection}></div>
      </main>
    </>
  );
}

export default App;
