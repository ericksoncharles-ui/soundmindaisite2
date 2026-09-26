'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { DIFFERENTIATORS, SECTORS, TESTIMONIALS, type Differentiator } from '@/lib/content';
import { reveal } from './hooks';

export const SceneProof: React.FC<{ reduced: boolean }> = ({ reduced }) => {
  return (
    <section id="why-us" className="proof" aria-label="Why SoundMind AI">
      <div className="marquee" aria-label="Built for">
        <div className="marquee-track">
          {[...SECTORS, ...SECTORS].map((s, i) => (
            <span key={i} aria-hidden={i >= SECTORS.length}>{s}</span>
          ))}
        </div>
      </div>

      <div className="wrap proof-inner">
        <div className="proof-quotes">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure key={t.name} className="quote" {...reveal(reduced, i)}>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption><strong>{t.name}</strong><span>{t.role}</span></figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="proof-head">
          <div>
            <span className="eyebrow">Why SoundMind AI</span>
            <h2 className="h2">Different by design.</h2>
          </div>
          <p className="lead">
            Most firms have tried AI. Most pilots don&apos;t survive contact with real workflows, real
            data, and real deadlines. That gap between promising and production-ready is exactly where we work.
          </p>
        </div>

        <div className="diff-grid">
          {DIFFERENTIATORS.map((d, i) => (
            <motion.div key={d.title} {...reveal(reduced, i % 2)}>
              <TiltCard item={d} reduced={reduced} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function TiltCard({ item, reduced }: { item: Differentiator; reduced: boolean }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-11, 11]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(mx, v => `${(v + 0.5) * 100}%`);
  const glowY = useTransform(my, v => `${(v + 0.5) * 100}%`);
  const Icon = item.icon;

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (reduced || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.article
      className="tilt"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX, rotateY, ['--gx' as string]: glowX, ['--gy' as string]: glowY }}
    >
      <div className="tilt-icon"><Icon size={22} /></div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </motion.article>
  );
}
