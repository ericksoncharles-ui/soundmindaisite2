'use client';

import React, { useRef, useState } from 'react';
import { motion, useTransform, type MotionValue } from 'framer-motion';
import { useSceneProgress } from './hooks';

const RINGS = [0, 1, 2, 3, 4, 5];

export const SceneFinale: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  const ref = useRef<HTMLElement>(null);
  const p = useSceneProgress(ref);

  // The camera pulls back: the headline starts right against the lens and settles into place.
  const titleZ = useTransform(p, [0, 0.55], [820, 0]);
  const titleOpacity = useTransform(p, [0, 0.12], [0.2, 1]);
  const actions = useTransform(p, [0.5, 0.7], [0, 1]);
  const actionsY = useTransform(p, [0.5, 0.7], [30, 0]);
  const actionsEvents = useTransform(actions, v => (v > 0.5 ? 'auto' : 'none'));

  return (
    <section id="contact" ref={ref} className="scene" style={{ height: '240vh' }} aria-label="Get started">
      <div className="stage" style={{ perspective: 1000 }}>
        <div className="world">
          {RINGS.map(i => <Ring key={i} i={i} p={p} />)}
        </div>

        <div className="finale">
          <motion.div className="finale-title" style={{ z: titleZ, opacity: titleOpacity }}>
            <span className="eyebrow">Ready to begin</span>
            <h2 className="h1">AI built for decisions<br /><em className="gold-text">that can&apos;t afford to be wrong.</em></h2>
          </motion.div>

          <motion.div className="finale-actions" style={{ opacity: actions, y: actionsY, pointerEvents: actionsEvents }}>
            <p className="lead">
              Let&apos;s talk about your highest-stakes workflows and what it would mean to get them right, every time.
            </p>
            <div className="finale-ctas">
              <button onClick={onContactClick} className="btn-primary">Book a Strategy Call</button>
              <button onClick={onContactClick} className="btn-secondary">Contact Us</button>
            </div>
            <SampleReport />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Ring({ i, p }: { i: number; p: MotionValue<number> }) {
  // Sonar-style rings recede into depth as the view pulls out.
  const z = useTransform(p, [0, 0.7], [600 - i * 120, -400 - i * 520]);
  const opacity = useTransform(p, [0, 0.2, 0.9], [0, 0.9 - i * 0.12, 0.55 - i * 0.07]);
  return (
    <div className="anchor">
      <motion.div className="sonar" style={{ x: '-50%', y: '-50%', z, opacity }} />
    </div>
  );
}

export function SampleReport() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div id="sample-report" className="sample">
      <p>Or get a sample report sent to your inbox:</p>
      {sent ? (
        <div className="sample-ok">Thanks! Check your inbox shortly.</div>
      ) : (
        <form onSubmit={submit}>
          <input type="email" required placeholder="your@email.com" aria-label="Email address"
            value={email} onChange={e => setEmail(e.target.value)} />
          <button type="submit">Send Me the Report</button>
        </form>
      )}
      <small>No spam. Unsubscribe anytime.</small>
    </div>
  );
}
