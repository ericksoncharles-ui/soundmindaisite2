'use client';

import React from 'react';
import { DollarSign, TrendingUp, Briefcase, Stethoscope } from 'lucide-react';
import { Card } from './shared/Card';
import { Container } from './shared/Container';

interface IndustryCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Industries: React.FC = () => {
  const industries: IndustryCard[] = [
    {
      icon: <DollarSign className="w-8 h-8 text-gold" />,
      title: 'Financial Services',
      description: 'Accelerate trading decisions, risk assessment, and regulatory compliance.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gold" />,
      title: 'Private Equity & Investment',
      description: 'Precision due diligence and portfolio analysis at scale.',
    },
    {
      icon: <Briefcase className="w-8 h-8 text-gold" />,
      title: 'Consulting & Advisory',
      description: 'Strategic insights for client engagements and market analysis.',
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-gold" />,
      title: 'Healthcare & Life Sciences',
      description: 'Clinical decision support and regulatory documentation analysis.',
    },
  ];

  return (
    <section id="industries" className="py-20 md:py-32 bg-gradient-navy">
      <Container>
        <div className="text-center mb-16">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="text-lg text-cream max-w-2xl mx-auto">
            Purpose-built for the most demanding sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="flex items-start gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0 mt-1">{industry.icon}</div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  {industry.title}
                </h3>
                <p className="text-cream text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
