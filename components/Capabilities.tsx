'use client';

import React from 'react';
import { Card } from './shared/Card';
import { Container } from './shared/Container';

interface Capability {
  title: string;
  description: string;
}

export const Capabilities: React.FC = () => {
  const capabilities: Capability[] = [
    {
      title: 'AI-Powered Due Diligence',
      description: 'Automated analysis of complex documents and datasets at scale.',
    },
    {
      title: 'Decision Intelligence Systems',
      description: 'Real-time insights to support high-stakes strategic decisions.',
    },
    {
      title: 'Workflow Automation',
      description: 'Intelligent automation of repetitive analysis and reporting tasks.',
    },
    {
      title: 'Document & Compliance Analysis',
      description: 'Precision extraction and risk assessment from regulatory documents.',
    },
    {
      title: 'Investment & Portfolio Insights',
      description: 'Data-driven analysis for portfolio optimization and risk management.',
    },
    {
      title: 'Precision-Focused Analysis',
      description: 'Accuracy-first approach optimized for mission-critical decisions.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-navy-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="section-title">What We Do</h2>
          <p className="text-lg text-cream max-w-2xl mx-auto">
            Core capabilities built for enterprise-grade AI decision intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-serif font-bold text-white mb-3">
                {capability.title}
              </h3>
              <p className="text-cream text-sm leading-relaxed">
                {capability.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
