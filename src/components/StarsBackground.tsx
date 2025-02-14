// src\components\StarsBackground.tsx

'use client'

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function StarsBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;

    // Setup Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Load Star Texture
    const loader = new THREE.TextureLoader();
    const starTexture = loader.load("/textures/star4.png");

    // Create Particles
    const starCount = 500;
    const positions = new Float32Array(starCount * 3);
    const velocities = new Float32Array(starCount * 3).fill(0);

    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10; // X-axis
      positions[i + 1] = Math.random() * 10; // Y-axis
      positions[i + 2] = (Math.random() - 0.5) * 10; // Z-axis
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      map: starTexture,
      size: 0.08, // 🔹 Increased star size (was 0.05)
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // Handle Mouse Movement - Expanded Scatter Effect
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Scatter effect: Covers a wider area
      for (let i = 0; i < starCount; i++) {
        const index = i * 3;

        const dx = (mouseRef.current.x * 5) - positions[index];
        const dy = (mouseRef.current.y * 5) - positions[index + 1];
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 4) { // 🔹 Scatter area increased (was 1.5)
          const angle = Math.random() * Math.PI * 2;
          const force = 0.006 + Math.random() * 0.006; // 🔹 Slightly stronger scatter force
          velocities[index] += Math.cos(angle) * force;
          velocities[index + 1] += Math.sin(angle) * force;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      const positions = stars.geometry.attributes.position.array;

      for (let i = 0; i < starCount; i++) {
        const index = i * 3;

        // Move stars downward **slowly**
        positions[index + 1] -= 0.0004; // 🔹 Slower falling speed

        // Reset stars when they reach the bottom
        if (positions[index + 1] < -5) {
          positions[index + 1] = 5;
          positions[index] = (Math.random() - 0.5) * 10; // Reset X randomly
          velocities[index] = 0; // Reset velocity
          velocities[index + 1] = 0;
        }

        // Apply velocities
        positions[index] += velocities[index];
        positions[index + 1] += velocities[index + 1];

        // Dampen velocity so stars stop moving over time
        velocities[index] *= 0.97; // 🔹 Smooth slowdown effect
        velocities[index + 1] *= 0.97;
      }

      stars.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resizing
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 1000,
      }}
    />
  );
}




