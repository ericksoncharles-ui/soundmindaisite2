'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CAPABILITIES } from '@/lib/content';
import { reveal } from './hooks';

export const SceneCapabilities: React.FC<{ reduced: boolean }> = ({ reduced }) => (
  <section id="capabilities" className="sec" aria-label="Core capabilities">
    <div className="wrap">
      <div className="sec-head">
        <div>
          <span className="eyebrow">What we do</span>
          <h2 className="h2">Six capabilities. <em className="gold-text">One standard.</em></h2>
        </div>
        <p className="lead">
          Every capability is built for precision, speed, and the reliability that high-stakes work demands.
        </p>
      </div>

      <div className="cap-grid">
        {CAPABILITIES.map((c, i) => (
          <motion.article key={c.n} className="cap-card" {...reveal(reduced, i % 3)}>
            <div className="cap-num" aria-hidden>{c.n}</div>
            <div className="cap-icon"><c.icon size={20} /></div>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
