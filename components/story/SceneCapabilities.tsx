'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useTransform, type MotionValue } from 'framer-motion';
import { CAPABILITIES, type Capability } from '@/lib/content';
import { lerpRange, useSceneProgress } from './hooks';

const GAP = 1500;
const N = CAPABILITIES.length;

// Camera keyframes: travel to each panel, then dwell while it reads at full size.
const CAM_IN: number[] = [0, 0.06];
const CAM_OUT: number[] = [0, 0];
CAPABILITIES.forEach((_, i) => {
  const start = 0.06 + (i / N) * 0.94;
  const end = 0.06 + ((i + 1) / N) * 0.94;
  CAM_IN.push(start + (end - start) * 0.5, end);
  CAM_OUT.push((i + 1) * GAP - 60, (i + 1) * GAP + 140);
});

export const SceneCapabilities: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const p = useSceneProgress(ref);
  const cam = useTransform(p, CAM_IN, CAM_OUT);
  const [active, setActive] = useState(0);

  useMotionValueEvent(cam, 'change', c => {
    const i = Math.max(0, Math.min(N - 1, Math.round(c / GAP) - 1));
    setActive(prev => (prev === i ? prev : i));
  });

  const headOpacity = useTransform(p, [0, 0.03, 0.09], [1, 1, 0]);
  const headScale = useTransform(p, [0, 0.09], [1, 1.6]);
  const hudOpacity = useTransform(p, [0.04, 0.1], [0, 1]);

  return (
    <section id="capabilities" ref={ref} className="scene" style={{ height: '720vh' }} aria-label="Core capabilities">
      <div className="stage" style={{ perspective: 1000 }}>
        <div className="stage-glow stage-glow-cool" />

        <motion.div className="world" style={{ z: cam }}>
          {CAPABILITIES.map((c, i) => <Panel key={c.n} cap={c} index={i} cam={cam} />)}
        </motion.div>

        <motion.div className="corridor-head" style={{ opacity: headOpacity, scale: headScale }}>
          <span className="eyebrow">What we do</span>
          <h2 className="h1">Six capabilities.<br /><em className="gold-text">One standard.</em></h2>
          <p className="lead">Every capability is built for precision, speed, and the reliability that high-stakes work demands.</p>
        </motion.div>

        <motion.div className="hud" style={{ opacity: hudOpacity }} aria-hidden>
          <span className="hud-count">{CAPABILITIES[active].n}<small> / 0{N}</small></span>
          <div className="hud-bars">
            {CAPABILITIES.map((c, i) => <i key={c.n} className={i <= active ? 'on' : undefined} />)}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function Panel({ cap, index, cam }: { cap: Capability; index: number; cam: MotionValue<number> }) {
  const z = -(index + 1) * GAP;
  const side = index % 2 === 0 ? -1 : 1;
  const opacity = useTransform(cam, c => lerpRange(z + c, [-3200, -1500, -250, 160, 460], [0, 0.3, 1, 1, 0]));
  // Upcoming panels swing in from alternating sides, then settle dead center.
  const x = useTransform(cam, c => `calc(-50% + ${lerpRange(z + c, [-3200, -250, 400], [side * 34, 0, 0])}vw)`);
  const rotateY = useTransform(cam, c => lerpRange(z + c, [-3200, -250], [side * -28, 0]));
  const Icon = cap.icon;

  return (
    <div className="anchor">
      <motion.article className="cap-panel" style={{ x, y: '-50%', z, rotateY, opacity }}>
        <div className="cap-num" aria-hidden>{cap.n}</div>
        <div className="cap-icon"><Icon size={22} /></div>
        <h3>{cap.title}</h3>
        <p>{cap.description}</p>
      </motion.article>
    </div>
  );
}
