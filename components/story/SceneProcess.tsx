'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useTransform, type MotionValue } from 'framer-motion';
import { STEPS, type Step } from '@/lib/content';
import { useSceneProgress, useViewportWidth } from './hooks';

export const SceneProcess: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const p = useSceneProgress(ref);
  const vw = useViewportWidth();
  const cardW = Math.min(520, vw * 0.8);
  const step = cardW + Math.min(80, vw * 0.08);

  // Continuous position along the track: 0 = first card centered, 2 = last.
  const s = useTransform(p, [0.12, 0.3, 0.45, 0.63, 0.78], [0, 0, 1, 1, 2]);
  const line = useTransform(p, [0.12, 0.78], [0, 1]);
  const [active, setActive] = useState(0);
  useMotionValueEvent(s, 'change', v => {
    const i = Math.round(v);
    setActive(prev => (prev === i ? prev : i));
  });

  const bigScale = useTransform(p, [0, 1], [0.8, 1.4]);

  return (
    <section id="process" ref={ref} className="scene" style={{ height: '400vh' }} aria-label="How we work">
      <div className="stage">
        <motion.div className="process-bg-num" style={{ scale: bigScale }} aria-hidden>
          {STEPS[active].n}
        </motion.div>

        <div className="process-head wrap">
          <span className="eyebrow">Process</span>
          <h2 className="h2">How we work</h2>
          <div className="process-rail" aria-hidden>
            <motion.i style={{ scaleX: line }} />
            {STEPS.map((st, i) => (
              <span key={st.n} className={i <= active ? 'on' : undefined} style={{ left: `${(i / (STEPS.length - 1)) * 100}%` }}>
                {st.title}
              </span>
            ))}
          </div>
        </div>

        <div className="coverflow" style={{ perspective: 1100 }}>
          {STEPS.map((st, i) => <FlowCard key={st.n} step={st} index={i} s={s} stepPx={step} width={cardW} />)}
        </div>
      </div>
    </section>
  );
};

interface FlowCardProps { step: Step; index: number; s: MotionValue<number>; stepPx: number; width: number; }

function FlowCard({ step, index, s, stepPx, width }: FlowCardProps) {
  const x = useTransform(s, v => `calc(-50% + ${(index - v) * stepPx}px)`);
  const rotateY = useTransform(s, v => Math.max(-55, Math.min(55, (index - v) * -42)));
  const z = useTransform(s, v => -Math.abs(index - v) * 360);
  const opacity = useTransform(s, v => Math.max(0.12, 1 - Math.abs(index - v) * 0.62));
  return (
    <motion.article className="flow-card" style={{ width, x, y: '-50%', z, rotateY, opacity }}>
      <div className="flow-n">{step.n}</div>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </motion.article>
  );
}
