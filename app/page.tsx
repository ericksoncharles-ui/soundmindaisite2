'use client';

import React, { useCallback, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { Starfield } from '@/components/story/Starfield';
import { ChapterRail } from '@/components/story/ChapterRail';
import { Hero } from '@/components/story/Hero';
import { SceneSignal } from '@/components/story/SceneSignal';
import { SceneCapabilities } from '@/components/story/SceneCapabilities';
import { SceneProcess } from '@/components/story/SceneProcess';
import { SceneIndustries } from '@/components/story/SceneIndustries';
import { SceneProof } from '@/components/story/SceneProof';
import { SceneFinale } from '@/components/story/SceneFinale';
import { usePrefersReducedMotion } from '@/components/story/hooks';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const reduced = usePrefersReducedMotion();

  const handleContactClick = useCallback(() => setIsContactModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsContactModalOpen(false), []);

  return (
    <main className="story">
      <Starfield reduced={reduced} />
      <Navbar onContactClick={handleContactClick} />
      {!reduced && <ChapterRail />}

      <Hero onContactClick={handleContactClick} reduced={reduced} />
      <SceneSignal reduced={reduced} />
      <SceneCapabilities reduced={reduced} />
      <SceneProcess reduced={reduced} />
      <SceneIndustries reduced={reduced} />
      <SceneProof reduced={reduced} />
      <SceneFinale onContactClick={handleContactClick} reduced={reduced} />

      <Footer onContactClick={handleContactClick} />
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
