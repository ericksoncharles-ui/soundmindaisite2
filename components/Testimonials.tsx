import React from 'react';

const testimonials = [
  {
    quote: '[PLACEHOLDER — e.g. "SoundMind cut our diligence timeline in half. We found risks we would have missed under time pressure."]',
    attribution: '[Name], [Title] at [Firm]',
  },
  {
    quote: '[PLACEHOLDER — e.g. "As a boutique advisory firm, we finally have analytical horsepower that matches much larger competitors."]',
    attribution: '[Name], [Title] at [Firm]',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#091524', paddingTop: 104, paddingBottom: 104 }}>
      <div className="wrap">

        <div style={{ marginBottom: 56 }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 3.5vw, 42px)',
            fontWeight: 600,
            lineHeight: 1.12,
            letterSpacing: '-0.015em',
            color: '#ffffff',
          }}>
            What Our Clients Say
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 32,
        }}>
          {testimonials.map((testimonial, i) => (
            <div key={i} style={{
              backgroundColor: '#0E1D30',
              border: '1px solid #1C3050',
              borderLeft: '4px solid #B5904A',
              borderRadius: 6,
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}>
              <blockquote style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontStyle: 'italic',
                color: '#94A3B8',
                lineHeight: 1.75,
                margin: 0,
              }}>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <footer style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: '#64748B',
                lineHeight: 1.5,
              }}>
                {testimonial.attribution}
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
