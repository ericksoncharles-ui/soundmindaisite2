import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SoundMind AI | AI for High-Stakes Decisions',
  description:
    'AI-powered decision intelligence for financial services, private equity, consulting, and healthcare.',
  keywords:
    'AI, decision intelligence, enterprise AI, fintech, consulting, due diligence',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-navy-900 text-white">
        {children}
      </body>
    </html>
  );
}
