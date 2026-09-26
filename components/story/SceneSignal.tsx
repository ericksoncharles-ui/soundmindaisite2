'use client';

import React, { useRef } from 'react';
import { motion, useTransform, type MotionValue } from 'framer-motion';
import { Check, FileText } from 'lucide-react';
import { STATS, STATS_NOTE } from '@/lib/content';
import { useSceneProgress } from './hooks';

const EVIDENCE = [
  '12,408 documents read end to end',
  '3 conflicting revenue figures reconciled',
  'Every claim cited to page and paragraph',
];

export const SceneSignal: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const p = useSceneProgress(ref);

  const introOpacity = useTransform(p, [0.02, 0.12, 0.6, 0.68], [0, 1, 1, 0]);
  const introY = useTransform(p, [0.02, 0.12], [40, 0]);

  const cardZ = useTransform(p, [0, 0.3, 0.62, 0.78], [-1800, 0, 0, -1100]);
  const cardRX = useTransform(p, [0, 0.3, 0.62, 0.78], [58, 0, 0, -18]);
  const cardRY = useTransform(p, [0, 0.3, 0.62, 0.78], [-24, -6, -6, 10]);
  const cardOpacity = useTransform(p, [0, 0.12, 0.64, 0.76], [0, 1, 1, 0]);
  const meter = useTransform(p, [0.3, 0.55], [0, 0.97]);

  const statsZ = useTransform(p, [0.66, 0.86], [700, 0]);
  const statsOpacity = useTransform(p, [0.66, 0.8], [0, 1]);

  return (
    <section id="signal" ref={ref} className="scene" style={{ height: '340vh' }} aria-label="From noise to signal">
      <div className="stage" style={{ perspective: 1200 }}>
        <div className="signal-layout">
          <motion.div className="signal-copy" style={{ opacity: introOpacity, y: introY }}>
            <span className="eyebrow">From noise to signal</span>
            <h2 className="h2">Answers you can defend in the room.</h2>
            <p className="lead">
              Every finding arrives with its evidence attached: the page, the paragraph, the figure it
              contradicts. Built for precision, speed, and the reliability that high-stakes work demands.
            </p>
          </motion.div>

          <div className="signal-card-slot">
            <motion.article
              className="brief"
              style={{ z: cardZ, rotateX: cardRX, rotateY: cardRY, opacity: cardOpacity }}
              aria-label="Illustrative SoundMind brief"
            >
              <header className="brief-head">
                <div>
                  <strong>SoundMind Brief</strong>
                  <span>Project Atlas · illustrative</span>
                </div>
                <span className="brief-tag">Material finding</span>
              </header>
              <p className="brief-finding">
                <mark>Supplier MSA §14.2</mark> lets the counterparty terminate on a change of control.
                Contracts under this clause represent <mark>31% of FY25 revenue</mark>.
              </p>
              <ul className="brief-evidence">
                {EVIDENCE.map((e, i) => <EvidenceRow key={e} p={p} start={0.3 + i * 0.07} text={e} />)}
              </ul>
              <div className="brief-sources">
                <span><FileText size={12} /> Supplier MSA · p. 3,412</span>
                <span><FileText size={12} /> Revenue Schedule · tab 4</span>
              </div>
              <div className="brief-meter">
                <span>Confidence</span>
                <div><motion.i style={{ scaleX: meter }} /></div>
              </div>
            </motion.article>
          </div>
        </div>

        <div className="stats-slot">
          <motion.div className="stats" style={{ z: statsZ, opacity: statsOpacity }}>
            <div className="stats-grid">
              {STATS.map(s => <Stat key={s.label} p={p} {...s} />)}
            </div>
            <p className="stats-note">{STATS_NOTE}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function EvidenceRow({ p, start, text }: { p: MotionValue<number>; start: number; text: string }) {
  const opacity = useTransform(p, [start, start + 0.05], [0, 1]);
  const x = useTransform(p, [start, start + 0.05], [-16, 0]);
  return (
    <motion.li style={{ opacity, x }}>
      <Check size={14} /> {text}
    </motion.li>
  );
}

interface StatProps { p: MotionValue<number>; value: number; prefix: string; suffix: string; label: string; }

function Stat({ p, value, prefix, suffix, label }: StatProps) {
  const count = useTransform(p, [0.7, 0.9], [0, value]);
  const text = useTransform(count, v => `${prefix}${Math.round(v)}${suffix}`);
  return (
    <div className="stat">
      <motion.div className="stat-n">{text}</motion.div>
      <div className="stat-l">{label}</div>
    </div>
  );
}
