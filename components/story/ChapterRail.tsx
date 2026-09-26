'use client';

import React, { useEffect, useState } from 'react';
import { CHAPTERS } from '@/lib/content';

/** Fixed side navigation showing which chapter of the story is on screen. */
export const ChapterRail: React.FC = () => {
  const [active, setActive] = useState(CHAPTERS[0].id);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const mid = window.innerHeight * 0.5;
      let current = CHAPTERS[0].id;
      for (const c of CHAPTERS) {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top <= mid) current = c.id;
      }
      setActive(current);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <nav className="rail" aria-label="Chapters">
      {CHAPTERS.map((c, i) => (
        <a key={c.id} href={`#${c.id}`} className={active === c.id ? 'on' : undefined} aria-current={active === c.id ? 'step' : undefined}>
          <span>{String(i + 1).padStart(2, '0')} · {c.label}</span>
          <i />
        </a>
      ))}
    </nav>
  );
};
