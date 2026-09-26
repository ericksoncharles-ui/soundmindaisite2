'use client';

import React, { useMemo, useRef } from 'react';
import { motion, useTransform, type MotionValue } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { DOC_TITLES } from '@/lib/content';
import { lerpRange, seeded, useSceneProgress } from './hooks';

interface DocSpec {
  title: string; pages: number; x: number; y: number; z: number;
  rx: number; ry: number; rz: number; flagged: boolean; lines: number[];
}

const DOC_COUNT = 44;
const CAMERA_END = 7700;

const CAPTIONS = [
  { at: [0.17, 0.21, 0.31, 0.35], eyebrow: 'The data room', title: '40,000 pages.', body: 'Contracts, filings, financials, minutes. Every deal lives or dies in here.' },
  { at: [0.37, 0.41, 0.51, 0.55], eyebrow: 'The clock',     title: 'Three weeks.',  body: "That's the window before the decision gets made, with or without the full picture." },
  { at: [0.57, 0.61, 0.71, 0.75], eyebrow: 'The risk',      title: 'One clause.',   body: 'Buried on page 3,412. Easy to miss. Impossible to ignore once it surfaces.' },
  { at: [0.83, 0.89, 1.01, 1.02], eyebrow: 'SoundMind AI',  title: 'We find it.',   body: 'Decision intelligence that reads everything, cites everything, and surfaces what matters.', gold: true },
];

function buildDocs(): DocSpec[] {
  const rand = seeded(7);
  return Array.from({ length: DOC_COUNT }, (_, i) => {
    const theta = rand() * Math.PI * 2;
    const r = 24 + rand() * 26;
    return {
      title: DOC_TITLES[i % DOC_TITLES.length],
      pages: Math.round(40 + rand() * 3800),
      x: Math.cos(theta) * r,
      y: Math.sin(theta) * r * 0.85,
      z: -1300 - (i / DOC_COUNT) * 5600 - rand() * 300,
      rx: Math.sin(theta) * 14,
      ry: -Math.cos(theta) * 22,
      rz: (rand() - 0.5) * 16,
      flagged: rand() < 0.14,
      lines: Array.from({ length: 7 }, () => 45 + rand() * 55),
    };
  });
}

export const SceneDive: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  const ref = useRef<HTMLElement>(null);
  const p = useSceneProgress(ref);
  const docs = useMemo(buildDocs, []);

  const cam = useTransform(p, [0, 0.14, 0.82, 1], [0, 1100, 7000, CAMERA_END]);
  const heroFast = useTransform(cam, [0, 180], [1, 0]);
  const heroEvents = useTransform(heroFast, v => (v > 0.4 ? 'auto' : 'none'));
  const headline = useTransform(cam, [0, 320, 820], [1, 1, 0]);
  const hint = useTransform(p, [0, 0.03], [1, 0]);
  const orb = useTransform(cam, [5600, 7100], [0, 1]);
  const floor = useTransform(cam, [0, 600, 6600, CAMERA_END], [0.35, 1, 1, 0]);

  return (
    <section id="top" ref={ref} className="scene" style={{ height: '520vh' }} aria-label="Introduction">
      <div className="stage" style={{ perspective: 1000 }}>
        <div className="stage-glow" />

        <motion.div className="world" style={{ z: cam }}>
          {/* Receding grid floor */}
          <div className="anchor">
            <motion.div className="floor" style={{ opacity: floor }} />
          </div>

          {/* The noise: documents scattered through depth */}
          {docs.map((d, i) => <DocCard key={i} doc={d} cam={cam} />)}

          {/* The signal waiting at the end of the tunnel */}
          <div className="anchor">
            <motion.div className="signal-orb" style={{ x: '-50%', y: '-50%', z: -CAMERA_END, opacity: orb }}>
              <span /><span /><span />
            </motion.div>
          </div>

          {/* Hero copy sits at z=0, so the camera flies straight through it */}
          <div className="anchor">
            <div className="hero-block">
              <motion.div className="hero-eyebrow" style={{ opacity: heroFast }}>
                <i /><span className="eyebrow">Decision Intelligence</span><i />
              </motion.div>
              <motion.h1 className="hero-title" style={{ opacity: headline }}>
                AI That<br /><em>Works the Way You Think</em>
              </motion.h1>
              <motion.p className="hero-sub" style={{ opacity: heroFast }}>
                Built for analysts, advisors, and dealmakers who need rigorous answers fast, without
                the complexity, the overhead, or the wait.
              </motion.p>
              <motion.div className="hero-ctas" style={{ opacity: heroFast, pointerEvents: heroEvents }}>
                <button onClick={onContactClick} className="btn-primary">Book a Strategy Call</button>
                <a href="#capabilities" className="btn-secondary">See Capabilities</a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Narration */}
        {CAPTIONS.map(c => <Caption key={c.title} p={p} {...c} />)}

        <motion.div className="scroll-hint" style={{ opacity: hint }}>
          <span>Scroll to dive in</span>
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
};

function DocCard({ doc, cam }: { doc: DocSpec; cam: MotionValue<number> }) {
  const opacity = useTransform(cam, c => {
    const sz = doc.z + c;
    const fog = lerpRange(sz, [-4600, -3000, -1600, 200, 700], [0, 0.35, 1, 1, 0]);
    return fog * lerpRange(c, [0, 500], [0.4, 1]);
  });
  return (
    <div className="anchor" style={{ left: `calc(50% + ${doc.x}vw * var(--spread))`, top: `calc(50% + ${doc.y}vh)` }}>
      <motion.div
        className={`doc${doc.flagged ? ' doc-flagged' : ''}`}
        style={{ x: '-50%', y: '-50%', z: doc.z, rotateX: doc.rx, rotateY: doc.ry, rotateZ: doc.rz, opacity }}
      >
        <div className="doc-head">
          <span>{doc.title}</span>
          <small>PDF</small>
        </div>
        {doc.lines.map((w, i) => (
          <div key={i} className={`doc-line${doc.flagged && i === 4 ? ' hit' : ''}`} style={{ width: `${w}%` }} />
        ))}
        <div className="doc-foot">{doc.pages.toLocaleString('en-US')} pages</div>
      </motion.div>
    </div>
  );
}

interface CaptionProps { p: MotionValue<number>; at: number[]; eyebrow: string; title: string; body: string; gold?: boolean; }

function Caption({ p, at, eyebrow, title, body, gold }: CaptionProps) {
  const opacity = useTransform(p, at, [0, 1, 1, 0]);
  const scale = useTransform(p, at, [0.7, 1, 1.06, 1.5]);
  const visibility = useTransform(opacity, o => (o > 0.01 ? 'visible' : 'hidden'));
  return (
    <motion.div className="caption" style={{ opacity, scale, visibility }}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={gold ? 'gold-text' : undefined}>{title}</h2>
      <p>{body}</p>
    </motion.div>
  );
}
