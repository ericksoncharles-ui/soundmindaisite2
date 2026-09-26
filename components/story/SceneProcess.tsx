'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { STEPS } from '@/lib/content';
import { reveal } from './hooks';

export const SceneProcess: React.FC<{ reduced: boolean }> = ({ reduced }) => (
  <section id="process" className="sec" aria-label="How we work">
    <div className="wrap">
      <div className="sec-head">
        <div>
          <span className="eyebrow">Process</span>
          <h2 className="h2">How we work</h2>
        </div>
      </div>

      <div className="steps">
        {STEPS.map((s, i) => (
          <motion.article key={s.n} className="step" {...reveal(reduced, i)}>
            <div className="flow-n">{s.n}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
