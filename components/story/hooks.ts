'use client';

import { useEffect, useState } from 'react';
import type { ImageLoaderProps } from 'next/image';
import type { Variants } from 'framer-motion';

/** SSR-safe prefers-reduced-motion. Starts false so server and client markup match. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return reduced;
}

/** Sizes Unsplash CDN images to the width next/image asks for. */
export function unsplashLoader({ src, width, quality }: ImageLoaderProps): string {
  return `${src}?auto=format&fit=crop&w=${width}&q=${quality ?? 70}`;
}

const enter: Variants = {
  hidden: { opacity: 0, rotateX: 24, z: -200, y: 48 },
  show: (i: number = 0) => ({
    opacity: 1, rotateX: 0, z: 0, y: 0,
    transition: { duration: 0.85, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const settled: Variants = {
  show: { opacity: 1, rotateX: 0, z: 0, y: 0, transition: { duration: 0 } },
};

/**
 * Motion props for a block that tilts up out of depth when it scrolls into view.
 * Reduced motion is only known after hydration, so it snaps hidden blocks to their final state.
 */
export function reveal(reduced: boolean, i = 0) {
  return reduced
    ? { variants: settled, initial: false as const, animate: 'show' as const }
    : { variants: enter, custom: i, initial: 'hidden' as const, whileInView: 'show' as const, viewport: { once: true, amount: 0.2 } };
}
