import React from "react";
import SplashCursor from "./components/SplashCursor";
import Header from "./components/Header";

import './App.css'

function App() {
  return (
    <>
      <main className="max-w-[1500px] mx-auto">
        <Header />
        <SplashCursor />
      </main>
    </>
  );
}

export default App;
