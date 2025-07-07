import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { planetData } from "../data/planetData";

export default function SolarSystem({ speeds, isPaused, isDark }) {
  const mountRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(50, 40, 150);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    const sunLight = new THREE.PointLight(0xffffff, 2, 300);
    scene.add(ambientLight, sunLight);

    // Sun
    const sunGeo = new THREE.SphereGeometry(5, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    scene.add(sun);

    // Planets
    const planets = planetData.map((data) => {
      const geometry = new THREE.SphereGeometry(data.size, 16, 16);
      const material = new THREE.MeshStandardMaterial({
        color: data.color,
        roughness: 1,
        metalness: 0,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.userData = { angle: 0, distance: data.distance, name: data.name };
      scene.add(mesh);
      return mesh;
    });

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (!isPaused) {
        planets.forEach((p) => {
          p.userData.angle += speeds[p.userData.name] * delta * 60;
          p.position.x = Math.cos(p.userData.angle) * p.userData.distance;
          p.position.z = Math.sin(p.userData.angle) * p.userData.distance;
          p.rotation.y += 0.02;
        });
      }
      controls.update();
      renderer.setClearColor(isDark ? 0x000000 : 0xffffff);
      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    function addStars() {
      const starGeometry = new THREE.BufferGeometry();
      const starCount = 1000; // number of stars
      const positions = [];

      for (let i = 0; i < starCount; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        positions.push(x, y, z);
      }

      starGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );

      const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1,
      });
      const starField = new THREE.Points(starGeometry, starMaterial);
      scene.add(starField);
    }
    addStars();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [speeds, isPaused, isDark]);

  return <div ref={mountRef}></div>;
}
