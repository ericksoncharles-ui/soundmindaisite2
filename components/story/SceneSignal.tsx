'use client';

import React, { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { Check, FileText } from 'lucide-react';
import { BEATS, SIGNAL_IMAGE, STATS, STATS_NOTE } from '@/lib/content';
import { reveal } from './hooks';
import { Photo } from './Photo';

const EVIDENCE = [
  '12,408 documents read end to end',
  '3 conflicting revenue figures reconciled',
  'Every claim cited to page and paragraph',
];

const EASE = [0.16, 1, 0.3, 1] as const;

export const SceneSignal: React.FC<{ reduced: boolean }> = ({ reduced }) => {
  const briefRef = useRef<HTMLElement>(null);
  const briefIn = useInView(briefRef, { once: true, amount: 0.35 });
  const shown = reduced || briefIn;
  const t = (delay: number) => (reduced ? { duration: 0 } : { duration: 0.6, delay, ease: EASE });

  return (
    <section id="signal" className="sec" aria-label="From noise to signal">
      <div className="wrap">
        <div className="beats">
          {BEATS.map((b, i) => (
            <motion.div key={b.title} className="beat" {...reveal(reduced, i)}>
              <span className="eyebrow">{b.eyebrow}</span>
              <p className={`beat-title${b.gold ? ' gold-text' : ''}`}>{b.title}</p>
              <p className="beat-body">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* The library photo sits behind the brief and fades into the dark behind the copy. */}
      <div className="signal-stage">
        <Photo src={SIGNAL_IMAGE} className="signal-photo" sizes="(max-width: 960px) 100vw, 64vw" quality={65} />
        <div className="wrap signal-grid">
          <motion.div className="signal-copy" {...reveal(reduced)}>
            <span className="eyebrow">From noise to signal</span>
            <h2 className="h2">Answers you can defend in the room.</h2>
            <p className="lead">
              Every finding arrives with its evidence attached: the page, the paragraph, the figure it
              contradicts. Built for precision, speed, and the reliability that high-stakes work demands.
            </p>
            <div className="stats-row">
              {STATS.map(s => <Stat key={s.label} reduced={reduced} {...s} />)}
            </div>
            <p className="stats-note">{STATS_NOTE}</p>
          </motion.div>

          <div className="signal-card-slot">
            {/* The brief swings up out of depth, then its evidence checks off line by line. */}
            <motion.article
              ref={briefRef}
              className="brief"
              initial={false}
              animate={shown
                ? { opacity: 1, rotateX: 0, rotateY: -6, z: 0 }
                : { opacity: 0, rotateX: 48, rotateY: -22, z: -700 }}
              transition={t(0)}
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
                {EVIDENCE.map((e, i) => (
                  <motion.li
                    key={e}
                    initial={false}
                    animate={shown ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                    transition={t(0.5 + i * 0.18)}
                  >
                    <Check size={14} /> {e}
                  </motion.li>
                ))}
              </ul>
              <div className="brief-sources">
                <span><FileText size={12} /> Supplier MSA · p. 3,412</span>
                <span><FileText size={12} /> Revenue Schedule · tab 4</span>
              </div>
              <div className="brief-meter">
                <span>Confidence</span>
                <div>
                  <motion.i initial={false} animate={{ scaleX: shown ? 0.97 : 0 }} transition={reduced ? { duration: 0 } : { duration: 1.2, delay: 0.9, ease: EASE }} />
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatProps { value: number; prefix: string; suffix: string; label: string; reduced: boolean; }

function Stat({ value, prefix, suffix, label, reduced }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const text = useTransform(count, v => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (reduced) { count.set(value); return; }
    if (!inView) return;
    const c = animate(count, value, { duration: 1.4, ease: EASE });
    return () => c.stop();
  }, [inView, reduced, value, count]);

  return (
    <div ref={ref} className="stat">
      <motion.div className="stat-n">{text}</motion.div>
      <div className="stat-l">{label}</div>
    </div>
  );
}
