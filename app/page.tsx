'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { Capabilities } from '@/components/Capabilities';
import { Industries } from '@/components/Industries';
import { HowItWorks } from '@/components/HowItWorks';
import { Differentiators } from '@/components/Differentiators';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-navy-900">
      <Navbar onContactClick={handleContactClick} />
      <Hero onContactClick={handleContactClick} />
      <TrustStrip />
      <Capabilities />
      <Industries />
      <HowItWorks />
      <Differentiators />
      <CTASection onContactClick={handleContactClick} />
      <Footer onContactClick={handleContactClick} />
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
