'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './shared/Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', message: '' });
        setSubmitSuccess(false);
        onClose();
      }, 2000);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-4 bg-navy-800 border border-navy-700 rounded-lg p-8 z-50 shadow-2xl animate-slide-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cream hover:text-gold transition-colors"
        >
          <X size={24} />
        </button>

        {submitSuccess ? (
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold text-gold mb-2">Thank You!</h3>
            <p className="text-cream mb-4">We&apos;ll be in touch shortly.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Get in Touch</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cream mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cream mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-cream mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cream mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </>
        )}
      </div>
    </>
  );
};
