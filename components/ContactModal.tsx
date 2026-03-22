'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm]             = useState({ name: '', email: '', company: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess]       = useState(false);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else        document.body.style.overflow = '';
    return ()  => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setTimeout(() => { setSuccess(false); setForm({ name: '', email: '', company: '', message: '' }); onClose(); }, 2500);
    }, 700);
  };

  if (!isOpen) return null;

  const inputClass =
    'w-full bg-navy-900 border border-navy-600/60 rounded-md px-4 py-2.5 text-sm text-white placeholder-muted/50 focus:outline-none focus:border-gold/60 transition-colors duration-200';

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-navy-950/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-navy-800 border border-navy-600/50 rounded-xl shadow-2xl shadow-navy-950/80 animate-slide-in">

          {/* Header */}
          <div className="flex items-start justify-between p-6 pb-0">
            <div>
              <h2 className="font-serif text-2xl font-bold text-white">Get in Touch</h2>
              <p className="text-sm text-muted mt-1">We&apos;ll respond within one business day.</p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-muted hover:text-white transition-colors rounded-md"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {success ? (
            <div className="p-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-serif text-xl font-bold text-gold mb-2">Message Received</h3>
              <p className="text-sm text-muted">We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-cream mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-cream mb-1.5">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your firm"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-cream mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@firm.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-cream mb-1.5">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your challenge or what you're trying to solve..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-md bg-gold text-navy-900 font-semibold text-sm
                           hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-300
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};
