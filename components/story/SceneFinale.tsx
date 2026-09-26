'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FINALE_IMAGE } from '@/lib/content';
import { reveal, unsplashLoader } from './hooks';

export const SceneFinale: React.FC<{ onContactClick: () => void; reduced: boolean }> = ({ onContactClick, reduced }) => {
  const ref = useRef<HTMLElement>(null);
  const [photoOk, setPhotoOk] = useState(true);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const mediaY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="contact" ref={ref} className="finale-sec" aria-label="Get started">
      {photoOk && (
        <motion.div className="finale-media" style={reduced ? undefined : { y: mediaY }} aria-hidden>
          <Image
            src={FINALE_IMAGE} alt="" fill sizes="100vw" quality={65}
            loader={unsplashLoader} style={{ objectFit: 'cover' }}
            onError={() => setPhotoOk(false)}
          />
        </motion.div>
      )}
      <div className="finale-shade" aria-hidden />

      <div className="wrap finale">
        <motion.div {...reveal(reduced)}>
          <span className="eyebrow">Ready to begin</span>
          <h2 className="h1">AI built for decisions<br /><em className="gold-text">that can&apos;t afford to be wrong.</em></h2>
        </motion.div>

        <motion.div className="finale-actions" {...reveal(reduced, 1)}>
          <p className="lead">
            Let&apos;s talk about your highest-stakes workflows and what it would mean to get them right, every time.
          </p>
          <div className="finale-ctas">
            <button onClick={onContactClick} className="btn-primary">Book a Strategy Call</button>
            <button onClick={onContactClick} className="btn-secondary btn-glass">Contact Us</button>
          </div>
          <SampleReport />
        </motion.div>
      </div>
    </section>
  );
};

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
