'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  animate, motion, useMotionValue, useScroll, useTransform,
  type AnimationPlaybackControls, type MotionValue,
} from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import { HERO_SLIDES } from '@/lib/content';
import { unsplashLoader } from './hooks';

const SLIDE_SECONDS = 6.5;
const N = HERO_SLIDES.length;

/** Next slide after `from` whose photo hasn't failed to load. */
function nextSlide(from: number, broken: number[]): number {
  for (let k = 1; k <= N; k++) {
    const i = (from + k) % N;
    if (!broken.includes(i)) return i;
  }
  return from;
}

export const Hero: React.FC<{ onContactClick: () => void; reduced: boolean }> = ({ onContactClick, reduced }) => {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [broken, setBroken] = useState<number[]>([]);
  // Photos are fetched only once their slide is showing or up next.
  const [loadedUpTo, setLoadedUpTo] = useState(1);

  const progress = useMotionValue(0);
  const controls = useRef<AnimationPlaybackControls | null>(null);
  const brokenRef = useRef(broken);
  const pausedRef = useRef(paused);
  brokenRef.current = broken;
  pausedRef.current = paused;

  // Each slide runs a timed progress bar, then hands off to the next one.
  useEffect(() => {
    setLoadedUpTo(n => Math.max(n, active + 1));
    progress.set(0);
    if (reduced) return;
    const c = animate(progress, 1, {
      duration: SLIDE_SECONDS,
      ease: 'linear',
      onComplete: () => setActive(a => nextSlide(a, brokenRef.current)),
    });
    if (pausedRef.current) c.pause();
    controls.current = c;
    return () => { c.stop(); controls.current = null; };
  }, [active, reduced, progress]);

  useEffect(() => {
    if (paused) controls.current?.pause();
    else controls.current?.play();
  }, [paused]);

  // A photo that fails to load drops out of the rotation; the navy backdrop shows instead.
  const markBroken = (i: number) => {
    setBroken(prev => (prev.includes(i) ? prev : [...prev, i]));
    setActive(a => (a === i ? nextSlide(i, [...brokenRef.current, i]) : a));
  };

  // Photos drift down and the copy lifts away as the hero scrolls out.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const slide = HERO_SLIDES[active];
  const anyPhotos = broken.length < N;

  return (
    <section id="top" ref={ref} className="hero" aria-label="Introduction">
      <motion.div className="hero-media" style={reduced ? undefined : { y: mediaY }} aria-hidden>
        {HERO_SLIDES.map((s, i) => (
          <div key={s.src} className={`hero-slide${i === active ? ' on' : ''}${broken.includes(i) ? ' broken' : ''}`}>
            {i <= loadedUpTo && (
              <Image
                src={s.src} alt="" fill sizes="100vw" quality={70}
                loader={unsplashLoader} priority={i === 0}
                style={{ objectFit: 'cover' }}
                onError={() => markBroken(i)}
              />
            )}
          </div>
        ))}
      </motion.div>
      <div className="hero-shade" aria-hidden />

      <motion.div className="hero-copy wrap" style={reduced ? undefined : { y: copyY, opacity: copyOpacity }}>
        <div className="hero-eyebrow"><i /><span className="eyebrow">Decision Intelligence</span></div>
        <h1 className="hero-title">AI That<br /><em>Works the Way You Think</em></h1>
        <p className="hero-sub">
          Built for analysts, advisors, and dealmakers who need rigorous answers fast, without
          the complexity, the overhead, or the wait.
        </p>
        <div className="hero-ctas">
          <button onClick={onContactClick} className="btn-primary">Book a Strategy Call</button>
          <a href="#capabilities" className="btn-secondary btn-glass">See Capabilities</a>
        </div>
      </motion.div>

      {anyPhotos && <div className="hero-deck wrap">
        <p className="hero-now" aria-hidden>
          <span>{String(active + 1).padStart(2, '0')}</span> {slide.label} <em>{slide.caption}</em>
        </p>
        <div className="hero-deck-row">
          <nav className="hero-tabs" aria-label="Hero images">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.src}
                type="button"
                className={`hero-tab${i === active ? ' on' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Show ${s.label}`}
                aria-current={i === active ? 'true' : undefined}
                hidden={broken.includes(i)}
              >
                <TabBar index={i} active={active} progress={progress} />
                <small>{String(i + 1).padStart(2, '0')}</small>
                <span>{s.label}</span>
                <em>{s.caption}</em>
              </button>
            ))}
          </nav>
          {!reduced && (
            <button
              type="button"
              className="hero-pause"
              onClick={() => setPaused(p => !p)}
              aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
            >
              {paused ? <Play size={14} /> : <Pause size={14} />}
            </button>
          )}
        </div>
      </div>}
    </section>
  );
};

function TabBar({ index, active, progress }: { index: number; active: number; progress: MotionValue<number> }) {
  const fill = useTransform(progress, v => (index === active ? v : index < active ? 1 : 0));
  return <i className="hero-tab-bar"><motion.b style={{ scaleX: fill }} /></i>;
}
