## 🌞 Solar System 3D Simulation

An interactive, mobile-responsive 3D simulation of our solar system built with **React.js** and **Three.js**.

✨ Features:
* Realistic orbital animations of all 8 planets
* Adjustable orbital speed for each planet (control panel)
* Restart / Resume animation
* Starfield background
* Modern responsive UI with hamburger menu

## 📌 **Project Objective**

> Built as part of a frontend developer assignment to demonstrate skills in:

* 3D rendering with Three.js
* Scene, camera, lighting, and object animation
* React state management and component structure
* Clean UI design and user interaction


## 🚀 **Live Demo**

*([Solar System](https://solar-system-bice-seven.vercel.app/))*


## 🛠 **Tech Stack**

* React.js
* Three.js
* HTML & CSS


## 📁 **Folder Structure**

```bash
src/
├── components/
│   ├── SolarSystem.jsx        # Three.js scene, planets, stars
│   ├── ControlsPanel.jsx      # Speed sliders, restart button
│
├── data/
│   └── planetData.js          # Planet colors, speed, distance config
│
├── styles/
│   └── App.css                # Global styles & UI design
│
├── App.jsx                    # Main app component
└── main.jsx                   # Entry point
```


## ✏️ **Features & Details**

### 🌌 Solar System Scene

* Sun in center, 8 planets orbiting
* Each planet has:
  * Rotation around its axis
  * Orbit animation based on adjustable speed
* Perspective camera at an angle for 3D depth
* Point light (Sunlight) + ambient light

### ⭐ Starfield Background

* Thousands of small stars randomly scattered
* Adds realism and depth

### ⚙ Controls Panel

* Sliders to change each planet’s orbital speed in real-time
* Restart button
* Responsive hamburger menu: opens/closes control panel


## ✅ **How to Run Locally**

1. **Clone the repository:**

```bash
git clone https://github.com/AjayGodara2417/solar-system
cd solar-system-react
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the project:**

```bash
npm run dev
```

4. Open your browser at [http://localhost:5173](http://localhost:5173) (Vite default port).

---

## ⚙ **How it works (Short Walkthrough)**

* `SolarSystem.jsx`:
  * Sets up Three.js scene, camera, renderer
  * Creates sun & planets from `planetData`
  * Adds starfield as random points
  * Animates orbits with `requestAnimationFrame` based on slider speeds
  * Uses `OrbitControls` to allow drag & zoom
  
* `ControlsPanel.jsx`:
  * React controlled inputs: sliders to adjust speed
  * Toggles for restart & resume
  * Shows/hides with hamburger icon

* `App.jsx`:
  * Holds state: speeds, paused, showControls
  * Renders header, control panel, and canvas


## ✨ **Enhancements & Future Ideas**

* Tooltips / labels on hover over each planet
* Smooth slide-in/out animation for control panel
* Zoom on click for each planet
* Realistic planet textures
* Galaxy or nebula background image
* Deploy to Netlify / Vercel with a live link


## 📽 **Demo Video**

*(Attach your screen recording showing: project, speed control, how planets & orbits were created, code walkthrough.)*


## 💡 **Made by:**

*Name* : Ajay Godara
*MERN Stack Web Developer*