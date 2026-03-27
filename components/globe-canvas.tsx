"use client";

import React, { useEffect, useRef } from 'react';

export const GlobeCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width: number, height: number;
        let particles: Particle[] = [];
        const particleCount = 2500; 
        const chars = ['.', '>', '0', '1', '·'];
        
        let rotationY = 0;
        const rotationSpeed = 0.0035;
        const perspective = 800;
        let animationFrameId: number;

        function resize() {
            const parent = canvas?.parentElement;
            if (!parent || !canvas) return;
            width = parent.clientWidth;
            height = parent.clientHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles();
        }

        class Particle {
            phi: number;
            theta: number;
            radius: number;
            char: string;
            drift: number;
            shimmerSpeed: number;

            constructor() {
                this.phi = Math.acos(-1 + (Math.random() * 2));
                this.theta = Math.random() * Math.PI * 2;
                this.radius = Math.min(width, height) * 0.35;
                this.char = chars[Math.floor(Math.random() * chars.length)];
                this.drift = Math.random() * 10;
                this.shimmerSpeed = 0.01 + Math.random() * 0.02;
            }

            project() {
                const rotatedTheta = this.theta + rotationY;
                const x3d = this.radius * Math.sin(this.phi) * Math.cos(rotatedTheta);
                const y3d = this.radius * Math.cos(this.phi);
                const z3d = this.radius * Math.sin(this.phi) * Math.sin(rotatedTheta) + this.radius;

                const scale = perspective / (perspective + z3d);
                
                // Centered within its container
                const centerX = width / 2;
                
                const x2d = (x3d * scale) + centerX;
                const y2d = (y3d * scale) + height / 2;

                const maxZ = this.radius * 2;
                const alpha = Math.max(0.05, 1 - (z3d / maxZ));
                const shimmer = (Math.sin(Date.now() * this.shimmerSpeed + this.drift) + 1) / 2;
                const finalAlpha = alpha * (0.3 + shimmer * 0.7);

                return { x: x2d, y: y2d, scale, alpha: finalAlpha, z: z3d };
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function drawCoreLogo() {
            if (!ctx) return;
            const centerX = width / 2;
            const globeRadius = Math.min(width, height) * 0.35;
            const logoOpacity = Math.max(0.4, (Math.sin(rotationY * 0.5) + 1) / 2);
            
            ctx.save();
            ctx.translate(centerX, height / 2);
            
            // Replaced white with secondary `#626268` => rgb(98, 98, 104)
            const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, globeRadius * 0.5);
            gradient.addColorStop(0, 'rgba(98, 98, 104, 0.15)');
            gradient.addColorStop(1, 'rgba(98, 98, 104, 0)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(0, 0, globeRadius * 0.5, 0, Math.PI * 2);
            ctx.fill();

            // Draw the Bitcoin Logo
            ctx.fillStyle = `rgba(98, 98, 104, ${0.85 * logoOpacity})`;
            ctx.shadowBlur = 25;
            ctx.shadowColor = '#626268';
            ctx.font = `bold ${globeRadius * 0.8}px "Inter", serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            ctx.rotate(Math.sin(rotationY) * 0.05);
            ctx.fillText('₿', 0, 0);
            
            ctx.restore();
        }

        function drawOrbits() {
            if (!ctx) return;
            const globeRadius = Math.min(width, height) * 0.35;
            const centerX = width / 2;
            
            ctx.strokeStyle = 'rgba(98, 98, 104, 0.05)';
            ctx.lineWidth = 1;

            for (let i = 0; i < 2; i++) {
                const tilt = (i - 0.5) * 0.4;
                ctx.beginPath();
                ctx.ellipse(centerX, height / 2, globeRadius * 1.3, globeRadius * 0.4, tilt, 0, Math.PI * 2);
                ctx.stroke();
            }
        }

        function animate() {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
            
            rotationY += rotationSpeed;
            
            // 1. Draw Orbits (Back)
            drawOrbits();

            // 2. Split particles
            const projected = particles.map(p => ({ p, proj: p.project() }));
            const backHalf = projected.filter(item => item.proj.z > Math.min(width, height) * 0.35);
            const frontHalf = projected.filter(item => item.proj.z <= Math.min(width, height) * 0.35);

            // 3. Draw Back Particles
            backHalf.forEach(item => {
                ctx.fillStyle = `rgba(98, 98, 104, ${item.proj.alpha})`;
                ctx.font = `${Math.floor(10 * item.proj.scale)}px monospace`;
                ctx.fillText(item.p.char, item.proj.x, item.proj.y);
            });

            // 4. Draw Core Logo
            drawCoreLogo();

            // 5. Draw Front Particles
            frontHalf.forEach(item => {
                ctx.fillStyle = `rgba(98, 98, 104, ${item.proj.alpha})`;
                ctx.font = `${Math.floor(10 * item.proj.scale)}px monospace`;
                ctx.fillText(item.p.char, item.proj.x, item.proj.y);
            });

            animationFrameId = requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resize);
        // Initial setup
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center relative">
            <canvas 
              ref={canvasRef} 
              className="block w-full h-full outline-none" 
              style={{ background: 'transparent' }} 
            />
        </div>
    );
};

export default GlobeCanvas;
