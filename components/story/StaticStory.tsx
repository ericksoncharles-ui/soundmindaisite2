'use client';

import React from 'react';
import { CAPABILITIES, INDUSTRIES, STATS, STATS_NOTE, STEPS } from '@/lib/content';
import { SampleReport } from './SceneFinale';

/**
 * Motion-free version of the story for visitors who prefer reduced motion.
 * Same content and anchors, laid out as ordinary sections.
 */
export const StaticStory: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => (
  <>
    <section id="top" className="static-sec static-hero wrap">
      <span className="eyebrow">Decision Intelligence</span>
      <h1 className="hero-title">AI That<br /><em>Works the Way You Think</em></h1>
      <p className="hero-sub">
        Built for analysts, advisors, and dealmakers who need rigorous answers fast, without the
        complexity, the overhead, or the wait.
      </p>
      <div className="hero-ctas">
        <button onClick={onContactClick} className="btn-primary">Book a Strategy Call</button>
        <a href="#capabilities" className="btn-secondary">See Capabilities</a>
      </div>
    </section>

    <section id="signal" className="static-sec wrap">
      <span className="eyebrow">From noise to signal</span>
      <h2 className="h2">Answers you can defend in the room.</h2>
      <p className="lead">
        40,000 pages. Three weeks. One clause that changes everything. Every finding arrives with its
        evidence attached: the page, the paragraph, the figure it contradicts.
      </p>
      <div className="stats-grid">
        {STATS.map(s => (
          <div key={s.label} className="stat">
            <div className="stat-n">{s.prefix}{s.value}{s.suffix}</div>
            <div className="stat-l">{s.label}</div>
          </div>
        ))}
      </div>
      <p className="stats-note">{STATS_NOTE}</p>
    </section>

    <section id="capabilities" className="static-sec wrap">
      <span className="eyebrow">What we do</span>
      <h2 className="h2">Core capabilities</h2>
      <div className="static-grid">
        {CAPABILITIES.map(c => (
          <article key={c.n} className="cap-panel">
            <div className="cap-num" aria-hidden>{c.n}</div>
            <div className="cap-icon"><c.icon size={22} /></div>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section id="process" className="static-sec wrap">
      <span className="eyebrow">Process</span>
      <h2 className="h2">How we work</h2>
      <div className="static-grid">
        {STEPS.map(s => (
          <article key={s.n} className="flow-card">
            <div className="flow-n">{s.n}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section id="industries" className="static-sec wrap">
      <span className="eyebrow">Industries</span>
      <h2 className="h2">Who we serve</h2>
      <div className="static-grid">
        {INDUSTRIES.map(ind => (
          <article key={ind.title} className="ring-card">
            <div className="ring-icon"><ind.icon size={20} /></div>
            <h3>{ind.title}</h3>
            <p>{ind.description}</p>
            <div className="ring-tags">{ind.outcomes.map(o => <span key={o}>{o}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  </>
);

export const StaticFinale: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => (
  <section id="contact" className="static-sec wrap finale">
    <span className="eyebrow">Ready to begin</span>
    <h2 className="h1">AI built for decisions<br /><em className="gold-text">that can&apos;t afford to be wrong.</em></h2>
    <p className="lead">
      Let&apos;s talk about your highest-stakes workflows and what it would mean to get them right, every time.
    </p>
    <div className="finale-ctas">
      <button onClick={onContactClick} className="btn-primary">Book a Strategy Call</button>
      <button onClick={onContactClick} className="btn-secondary">Contact Us</button>
    </div>
    <SampleReport />
  </section>
);
