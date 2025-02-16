"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function StarsBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(0.16); // ✅ Increased Star Speed
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;

    // ✅ Setup Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // ✅ Load Star Texture
    const loader = new THREE.TextureLoader();
    const starTexture = loader.load("/textures/star4.png");

    // ✅ Create Star Particles
    const starCount = 100; // Adjust the number of stars
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount); // ✅ Store per-star size
    const opacities = new Float32Array(starCount).fill(1);
    const speeds = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      const index = i * 3;
      positions[index] = (Math.random() - 0.5) * 50; // X Position
      positions[index + 1] = (Math.random() - 0.5) * 50; // Y Position
      positions[index + 2] = Math.random() * -50; // Z Position (Depth)

      speeds[i] = Math.random() * 0.035 + 0.015; // ✅ Increased Speed Variation
      sizes[i] = Math.random() * 14 + 3; // ✅ Sizes from 3px to 9px (Randomized)
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1)); // ✅ Store Star Sizes
    geometry.setAttribute("opacity", new THREE.BufferAttribute(opacities, 1)); // Store Opacity

    // ✅ Custom Shader Material (Fix for Random Star Sizes)
    const material = new THREE.ShaderMaterial({
      uniforms: {
        pointTexture: { value: starTexture },
      },
      vertexShader: `
        attribute float size;
        attribute float opacity;
        varying float vOpacity;
        void main() {
          vOpacity = opacity;
          gl_PointSize = size; // ✅ RANDOM Star Sizes (Uses Buffer Attribute)
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D pointTexture;
        varying float vOpacity;
        void main() {
          vec4 texColor = texture2D(pointTexture, gl_PointCoord);
          gl_FragColor = vec4(texColor.rgb, texColor.a * vOpacity);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // ✅ Handle Mouse Movement - Make Nearby Stars Disappear
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // ✅ Animation Loop - Move Stars Toward Camera
    const animate = () => {
      requestAnimationFrame(animate);

      const positions = stars.geometry.attributes.position.array;
      const opacityArray = stars.geometry.attributes.opacity.array;

      for (let i = 0; i < starCount; i++) {
        const index = i * 3;
        positions[index + 2] += speeds[i] * speedRef.current; // ✅ Increased Speed

        // ✅ Reset stars when they pass the camera
        if (positions[index + 2] > 5) {
          positions[index] = (Math.random() - 0.5) * 50;
          positions[index + 1] = (Math.random() - 0.5) * 50;
          positions[index + 2] = -50;
        }

        // ✅ Calculate distance from mouse to star
        const dx = (mouseRef.current.x * 30) - positions[index];
        const dy = (mouseRef.current.y * 30) - positions[index + 1];
        const distance = Math.sqrt(dx * dx + dy * dy);

        opacityArray[i] = distance < 15 ? 0 : 1; // ✅ Stars near mouse fully fade out
      }

      stars.geometry.attributes.position.needsUpdate = true;
      stars.geometry.attributes.opacity.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    // ✅ Handle resizing
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
