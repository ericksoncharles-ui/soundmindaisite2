'use client';

import React, { useCallback, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { Starfield } from '@/components/story/Starfield';
import { ChapterRail } from '@/components/story/ChapterRail';
import { SceneDive } from '@/components/story/SceneDive';
import { SceneSignal } from '@/components/story/SceneSignal';
import { SceneCapabilities } from '@/components/story/SceneCapabilities';
import { SceneProcess } from '@/components/story/SceneProcess';
import { SceneIndustries } from '@/components/story/SceneIndustries';
import { SceneProof } from '@/components/story/SceneProof';
import { SceneFinale } from '@/components/story/SceneFinale';
import { StaticStory, StaticFinale } from '@/components/story/StaticStory';
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

      {reduced ? (
        <StaticStory onContactClick={handleContactClick} />
      ) : (
        <>
          <SceneDive onContactClick={handleContactClick} />
          <SceneSignal />
          <SceneCapabilities />
          <SceneProcess />
          <SceneIndustries />
        </>
      )}

      <SceneProof reduced={reduced} />

      {reduced
        ? <StaticFinale onContactClick={handleContactClick} />
        : <SceneFinale onContactClick={handleContactClick} />}

      <Footer onContactClick={handleContactClick} />
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
