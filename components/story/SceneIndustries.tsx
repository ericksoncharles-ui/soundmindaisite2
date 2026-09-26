'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { INDUSTRIES } from '@/lib/content';
import { reveal } from './hooks';
import { Photo } from './Photo';

export const SceneIndustries: React.FC<{ reduced: boolean }> = ({ reduced }) => (
  <section id="industries" className="sec" aria-label="Who we serve">
    <div className="wrap">
      <div className="sec-head">
        <div>
          <span className="eyebrow">Industries</span>
          <h2 className="h2">Who we serve</h2>
        </div>
      </div>

      <div className="ind-grid">
        {INDUSTRIES.map((ind, i) => (
          <motion.article key={ind.title} className="ind-card" {...reveal(reduced, i % 3)}>
            <Photo src={ind.photo} className="ind-photo" sizes="(max-width: 760px) 84vw, (max-width: 960px) 46vw, 360px" />
            <div className="ind-body">
              <div className="ind-icon"><ind.icon size={20} /></div>
              <h3>{ind.title}</h3>
              <p>{ind.description}</p>
              <div className="ind-tags">
                {ind.outcomes.map(o => <span key={o}>{o}</span>)}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
