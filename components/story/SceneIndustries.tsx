'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useTransform, type MotionValue } from 'framer-motion';
import { INDUSTRIES, type Industry } from '@/lib/content';
import { useSceneProgress, useViewportWidth } from './hooks';

const N = INDUSTRIES.length;
const STEP_DEG = 360 / N;

export const SceneIndustries: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const p = useSceneProgress(ref);
  const vw = useViewportWidth();
  const cardW = Math.min(340, vw * 0.72);
  const radius = Math.round(cardW / 2 / Math.tan(Math.PI / N) + Math.min(90, vw * 0.06));

  // Rotate the ring with brief pauses on each industry.
  const input: number[] = [0, 0.08];
  const output: number[] = [0, 0];
  for (let i = 1; i < N; i++) {
    const t = 0.08 + (i / (N - 1)) * 0.84;
    input.push(t - 0.07, t);
    output.push(-(i - 1) * STEP_DEG - STEP_DEG * 0.15, -i * STEP_DEG);
  }
  input.push(1); output.push(-(N - 1) * STEP_DEG);
  const rot = useTransform(p, input, output);

  const [active, setActive] = useState(0);
  useMotionValueEvent(rot, 'change', r => {
    const i = ((Math.round(-r / STEP_DEG) % N) + N) % N;
    setActive(prev => (prev === i ? prev : i));
  });

  const tilt = useTransform(p, [0, 0.1, 0.9, 1], [-22, -8, -8, -18]);
  const ringZ = useTransform(p, [0, 0.1], [-radius - 900, -radius]);

  return (
    <section id="industries" ref={ref} className="scene" style={{ height: '480vh' }} aria-label="Who we serve">
      <div className="stage">
        <div className="ring-head wrap">
          <span className="eyebrow">Industries</span>
          <h2 className="h2">Who we serve</h2>
          <p className="ring-active" aria-live="polite">
            <span>{String(active + 1).padStart(2, '0')}</span> {INDUSTRIES[active].title}
          </p>
        </div>

        <div className="ring-viewport" style={{ perspective: 1400 }}>
          <motion.div className="ring" style={{ z: ringZ, rotateX: tilt }}>
            <motion.div className="ring-spin" style={{ rotateY: rot }}>
              {INDUSTRIES.map((ind, i) => (
                <RingCard key={ind.title} industry={ind} index={i} rot={rot} radius={radius} width={cardW} />
              ))}
            </motion.div>
          </motion.div>
          <div className="ring-floor" aria-hidden />
        </div>
      </div>
    </section>
  );
};

interface RingCardProps { industry: Industry; index: number; rot: MotionValue<number>; radius: number; width: number; }

function RingCard({ industry, index, rot, radius, width }: RingCardProps) {
  const angle = index * STEP_DEG;
  // Brightness follows how squarely the card faces the viewer.
  const opacity = useTransform(rot, r => 0.25 + 0.75 * Math.max(0, Math.cos(((angle + r) * Math.PI) / 180)) ** 2);
  const Icon = industry.icon;
  return (
    <motion.article
      className="ring-card"
      style={{ width, marginLeft: -width / 2, transform: `rotateY(${angle}deg) translateZ(${radius}px) translateY(-50%)`, opacity }}
    >
      <div className="ring-icon"><Icon size={20} /></div>
      <h3>{industry.title}</h3>
      <p>{industry.description}</p>
      <div className="ring-tags">
        {industry.outcomes.map(o => <span key={o}>{o}</span>)}
      </div>
    </motion.article>
  );
}
