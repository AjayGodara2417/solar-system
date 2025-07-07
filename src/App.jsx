import React, { useState } from "react";
import SolarSystem from "./components/SolarSystem";
import ControlsPanel from "./components/ControlsPanel";
import "./styles/App.css";
import { planetData } from "./data/planetData";

export default function App() {
  const [speeds, setSpeeds] = useState(
    Object.fromEntries(planetData.map((p) => [p.name, p.speed]))
  );
  const [isPaused, setIsPaused] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const [showControls, setShowControls] = useState(false);

  return (
    <div>
      <header className="header">
        <h1>Solar System</h1>
        <button
          className="hamburger"
          onClick={() => setShowControls((prev) => !prev)}
        >
          {showControls ? "✖" : "☰"}
        </button>
      </header>

      {showControls && (
        <ControlsPanel
          speeds={speeds}
          setSpeeds={setSpeeds}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
          isDark={isDark}
          setIsDark={setIsDark}
          className={showControls ? "" : "hidden"}
        />
      )}
      <SolarSystem speeds={speeds} isPaused={isPaused} isDark={isDark} />
    </div>
  );
}
