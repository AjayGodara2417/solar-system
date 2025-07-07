import React from 'react';
import { planetData } from '../data/planetData';

export default function ControlsPanel({ speeds, setSpeeds, isPaused, setIsPaused}) {
  const handleSpeedChange = (name, value) => {
    setSpeeds(prev => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div id="controls">
      <h3>Speed Control</h3>
      {planetData.map(planet => (
        <div key={planet.name}>
          <label>{planet.name}: </label>
          <input
            type="range"
            min="0.001"
            max="0.05"
            step="0.001"
            value={speeds[planet.name]}
            onChange={e => handleSpeedChange(planet.name, e.target.value)}
          />
        </div>
      ))}
      <button onClick={() => setIsPaused(!isPaused)}>
        {isPaused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
}
