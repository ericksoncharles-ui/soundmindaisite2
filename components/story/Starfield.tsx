'use client';

import React, { useEffect, useRef } from 'react';

interface Star { x: number; y: number; z: number; gold: boolean; }

const COUNT = 220;
const DEPTH = 1600;

/**
 * Fixed full-screen particle field. Particles drift toward the viewer and
 * accelerate with scroll velocity, so every scroll feels like forward motion.
 */
export const Starfield: React.FC<{ reduced: boolean }> = ({ reduced }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    let w = 0, h = 0, dpr = 1;
    const stars: Star[] = [];
    const spawn = (s: Partial<Star> = {}): Star => ({
      x: (Math.random() - 0.5) * 2400,
      y: (Math.random() - 0.5) * 1600,
      z: Math.random() * DEPTH,
      gold: Math.random() < 0.18,
      ...s,
    });
    for (let i = 0; i < COUNT; i++) stars.push(spawn());

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    let lastY = window.scrollY;
    let velocity = 0;
    let raf = 0;
    const focal = 420;

    const draw = (speed: number) => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      for (const s of stars) {
        const pz = s.z;
        s.z -= speed;
        if (s.z < 1) { Object.assign(s, spawn({ z: DEPTH })); continue; }
        if (s.z > DEPTH) { Object.assign(s, spawn({ z: 1 })); continue; }
        const k = focal / s.z;
        const x = cx + s.x * k, y = cy + s.y * k;
        if (x < -20 || x > w + 20 || y < -20 || y > h + 20) continue;
        const depth = 1 - s.z / DEPTH;
        const alpha = Math.min(1, depth * 1.2) * 0.75;
        const color = s.gold ? `rgba(201,163,92,${alpha})` : `rgba(148,163,184,${alpha * 0.8})`;
        // Streak length follows speed: warp lines when scrolling fast.
        const kp = focal / Math.max(1, pz);
        const px = cx + s.x * kp, py = cy + s.y * kp;
        if (Math.abs(speed) > 4) {
          ctx.strokeStyle = color;
          ctx.lineWidth = Math.max(0.6, depth * 1.8);
          ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(x, y); ctx.stroke();
        } else {
          ctx.fillStyle = color;
          ctx.beginPath(); ctx.arc(x, y, Math.max(0.4, depth * 1.6), 0, Math.PI * 2); ctx.fill();
        }
      }
    };

    if (reduced) {
      draw(0);
      return () => window.removeEventListener('resize', resize);
    }

    const tick = () => {
      const y = window.scrollY;
      velocity += ((y - lastY) - velocity) * 0.12;
      lastY = y;
      draw(0.8 + Math.max(-30, Math.min(60, velocity * 0.9)));
      raf = requestAnimationFrame(tick);
    };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [reduced]);

  return <canvas ref={ref} aria-hidden className="starfield" />;
};
