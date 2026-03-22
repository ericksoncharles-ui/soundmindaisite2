'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ContactModalProps { isOpen: boolean; onClose: () => void; }

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm]         = useState({ name: '', email: '', company: '', message: '' });
  const [submitting, setSub]    = useState(false);
  const [success, setSuccess]   = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [isOpen, onClose]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSub(true);
    setTimeout(() => {
      setSub(false); setSuccess(true);
      setTimeout(() => { setSuccess(false); setForm({ name: '', email: '', company: '', message: '' }); onClose(); }, 2500);
    }, 700);
  };

  if (!isOpen) return null;

  const field = 'w-full bg-ink border border-line rounded px-4 py-3 text-sm text-white placeholder-muted/40 focus:outline-none focus:border-gold/40 transition-colors duration-200';

  return (
    <>
      <div className="fixed inset-0 z-40 bg-ink/80 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-[440px] bg-navy-800 border border-line rounded-lg shadow-2xl animate-slide-in overflow-hidden">

          {/* Header bar */}
          <div className="flex items-center justify-between px-7 pt-7 pb-5 border-b border-line">
            <div>
              <h2 className="font-serif text-xl font-semibold text-white">Get in Touch</h2>
              <p className="text-xs text-muted mt-0.5">We respond within one business day.</p>
            </div>
            <button onClick={onClose} className="p-1.5 text-muted hover:text-white transition-colors" aria-label="Close">
              <X size={18} />
            </button>
          </div>

          {success ? (
            <div className="px-7 py-14 text-center">
              <div className="text-gold font-serif text-5xl mb-4">✓</div>
              <h3 className="font-serif text-xl font-semibold text-white mb-2">Message Received</h3>
              <p className="text-sm text-muted">We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="px-7 py-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.75rem] font-medium text-slate mb-1.5">Name</label>
                  <input type="text" required placeholder="Your name" className={field}
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className="block text-[0.75rem] font-medium text-slate mb-1.5">Company</label>
                  <input type="text" placeholder="Your firm" className={field}
                    value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="block text-[0.75rem] font-medium text-slate mb-1.5">Email</label>
                <input type="email" required placeholder="you@firm.com" className={field}
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
              <div>
                <label className="block text-[0.75rem] font-medium text-slate mb-1.5">Message</label>
                <textarea rows={4} required placeholder="Describe what you're working on..." className={`${field} resize-none`}
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              </div>
              <button type="submit" disabled={submitting}
                className="w-full py-3 rounded bg-gold text-ink font-semibold text-sm
                           hover:bg-gold-light transition-colors duration-200 disabled:opacity-50">
                {submitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};
