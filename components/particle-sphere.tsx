"use client";

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

/**
 * ParticleSphere Component
 * Features a spinning globe with an interactive Bitcoin logo at its core.
 * Globe Color: #0185EE
 * BTC Logo Color: #F7931A
 */
const ParticleSphere = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef(new THREE.Vector2(9999, 9999));
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene setup ---
    const scene = new THREE.Scene();

    const getSize = () => ({
      width: container.clientWidth,
      height: container.clientHeight,
    });

    let { width, height } = getSize();

    const getResponsiveZ = (w: number) => {
      if (w < 480) return 6.5; // Mobile: Fit in 300x300 
      return 5.0;              // Desktop: Default
    };

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = getResponsiveZ(width);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- Container for all particles (to rotate together) ---
    const allGroup = new THREE.Group();
    scene.add(allGroup);

    // --- 1. GLOBE PARTICLES ---
    const globeCount = 6000;
    const globeRadius = 1.8;
    const globeGeometry = new THREE.BufferGeometry();
    const globeInitialPos = new Float32Array(globeCount * 3);
    const globeCurrentPos = new Float32Array(globeCount * 3);

    for (let i = 0; i < globeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / globeCount);
      const theta = Math.sqrt(globeCount * Math.PI) * phi;

      const x = globeRadius * Math.cos(theta) * Math.sin(phi);
      const y = globeRadius * Math.sin(theta) * Math.sin(phi);
      const z = globeRadius * Math.cos(phi);

      globeInitialPos[i * 3]     = x;
      globeInitialPos[i * 3 + 1] = y;
      globeInitialPos[i * 3 + 2] = z;

      globeCurrentPos[i * 3]     = x;
      globeCurrentPos[i * 3 + 1] = y;
      globeCurrentPos[i * 3 + 2] = z;
    }

    globeGeometry.setAttribute('position', new THREE.BufferAttribute(globeCurrentPos, 3));
    const globeMaterial = new THREE.PointsMaterial({
      size: 0.012,
      color: new THREE.Color('#0185EE'),
      transparent: true,
      opacity: 0.3,
      sizeAttenuation: true,
    });

    const globePoints = new THREE.Points(globeGeometry, globeMaterial);
    allGroup.add(globePoints);

    // --- 2. BTC LOGO PARTICLES ---
    let logoGeometry: THREE.BufferGeometry;
    let logoMaterial: THREE.PointsMaterial;
    let logoPoints: THREE.Points;
    let logoInitialPos: Float32Array;
    let logoCount = 0;

    const createBtcLogo = () => {
      const img = new window.Image();
      img.src = "/images/future/bitcoin.svg";

      img.onload = () => {
        const size = 500;
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = size;
        canvas.height = size;
        ctx.drawImage(img, 0, 0, size, size);

        const data = ctx.getImageData(0, 0, size, size).data;
        const pts: { x: number; y: number }[] = [];

        // EXTREMELY DENSE Sampling (0.8 step)
        for (let y = 0; y < size; y += 1.5) {
          for (let x = 0; x < size; x += 1.5) {
            const alpha = data[(Math.floor(y) * size + Math.floor(x)) * 4 + 3];
            if (alpha > 150) {
              pts.push({
                x: (x - size / 2) / 180, // Restored to good original size
                y: -(y - size / 2) / 180,
              });
            }
          }
        }

        logoCount = pts.length;
        logoGeometry = new THREE.BufferGeometry();
        logoInitialPos = new Float32Array(logoCount * 3);
        const currentPos = new Float32Array(logoCount * 3);

        for (let i = 0; i < logoCount; i++) {
          const { x, y } = pts[i];
          const z = (Math.random() - 0.5) * 0.05;

          logoInitialPos[i * 3]     = x;
          logoInitialPos[i * 3 + 1] = y;
          logoInitialPos[i * 3 + 2] = z;
          currentPos[i * 3] = x;
          currentPos[i * 3 + 1] = y;
          currentPos[i * 3 + 2] = z;
        }

        logoGeometry.setAttribute('position', new THREE.BufferAttribute(currentPos, 3));
        logoMaterial = new THREE.PointsMaterial({
          size: 0.02,
          color: new THREE.Color('#0185EE'),
          transparent: true,
          opacity: 1.0,
          depthWrite: false,
        });

        logoPoints = new THREE.Points(logoGeometry, logoMaterial);
        scene.add(logoPoints); // Stationary Core

        setIsReady(true);
        startAnimation();
      };
    };

    // --- Interaction ---
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handleMouseLeave = () => {
      mouse.current.set(9999, 9999);
    };

    const handleResize = () => {
      const s = getSize();
      width = s.width;
      height = s.height;
      camera.aspect = width / height;
      camera.position.z = getResponsiveZ(width);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // --- Animation loop ---
    let animationFrameId: number;
    const raycaster = new THREE.Raycaster();

    const startAnimation = () => {
      const animate = () => {
        const time = Date.now() * 0.001;

        // Restore gentle rotation
        allGroup.rotation.y += 0.002;
        allGroup.rotation.x = Math.sin(time * 0.5) * 0.1;

        // Interaction
        raycaster.setFromCamera(mouse.current, camera);
        const hitSphere = new THREE.Sphere(new THREE.Vector3(0,0,0), globeRadius);
        const intersectPoint = new THREE.Vector3();
        raycaster.ray.intersectSphere(hitSphere, intersectPoint);
        
        const localHit = intersectPoint.clone();
        allGroup.worldToLocal(localHit);

        const gAttr = globeGeometry.attributes.position;
        for (let i = 0; i < globeCount; i++) {
          const ix = i * 3, iy = i * 3 + 1, iz = i * 3 + 2;
          const baseX = globeInitialPos[ix], baseY = globeInitialPos[iy], baseZ = globeInitialPos[iz];
          let targetX = baseX, targetY = baseY, targetZ = baseZ;
          const dx = baseX - localHit.x, dy = baseY - localHit.y, dz = baseZ - localHit.z;
          const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);

          if (dist < 0.4) {
             const push = (0.4 - dist) * 1.5;
             targetX += (dx/dist) * push;
             targetY += (dy/dist) * push;
             targetZ += (dz/dist) * push;
          }

          (gAttr.array as Float32Array)[ix] += (targetX - (gAttr.array as Float32Array)[ix]) * 0.1;
          (gAttr.array as Float32Array)[iy] += (targetY - (gAttr.array as Float32Array)[iy]) * 0.1;
          (gAttr.array as Float32Array)[iz] += (targetZ - (gAttr.array as Float32Array)[iz]) * 0.1;
        }
        gAttr.needsUpdate = true;

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();
    };

    createBtcLogo();

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      globeGeometry.dispose();
      globeMaterial.dispose();
      if (logoGeometry) logoGeometry.dispose();
      if (logoMaterial) logoMaterial.dispose();
      renderer.dispose();
      // Remove the canvas correctly
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full relative transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}
    />
  );
};

export default ParticleSphere;
