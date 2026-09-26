'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { unsplashLoader } from './hooks';

interface PhotoProps { src: string; sizes: string; className: string; quality?: number; }

/**
 * Decorative photo that fills its box, which carries the grade and fades.
 * A photo that fails to load is dropped and the box's navy backdrop shows instead.
 */
export function Photo({ src, sizes, className, quality = 70 }: PhotoProps) {
  const [ok, setOk] = useState(true);
  return (
    <div className={className} aria-hidden>
      {ok && (
        <Image
          src={src} alt="" fill sizes={sizes} quality={quality}
          loader={unsplashLoader} style={{ objectFit: 'cover' }}
          onError={() => setOk(false)}
        />
      )}
    </div>
  );
}
