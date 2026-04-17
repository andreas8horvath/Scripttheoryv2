import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Send } from 'lucide-react';
import Button from './Button';

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const checkConsentAndShow = () => {
      const consent = localStorage.getItem('cookieConsent');
      const hasShown = localStorage.getItem('newsletterPopupShown');

      // Only show if user has interacted with cookies and hasn't seen this popup yet
      if (consent && !hasShown) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 3000); // 3-second delay after cookie banner interaction
        return () => clearTimeout(timer);
      } else if (!consent) {
        // If no consent yet, check again in a few seconds or set up an interval
        const interval = setInterval(() => {
          const latestConsent = localStorage.getItem('cookieConsent');
          if (latestConsent) {
            clearInterval(interval);
            const timer = setTimeout(() => setIsVisible(true), 3000);
            return () => clearTimeout(timer);
          }
        }, 2000);
        return () => clearInterval(interval);
      }
    };

    checkConsentAndShow();
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newsletterPopupShown', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Logic for newsletter subscription would go here
      console.log('Newsletter subscription for:', email);
      setIsSubscribed(true);
      localStorage.setItem('newsletterPopupShown', 'true');
      
      // Close after a success message delay
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-espresso-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-textured-vellum rounded-3xl shadow-2xl overflow-hidden border border-espresso-black/5"
          >
            {/* Visual Header */}
            <div className="h-32 bg-directors-crimson relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              <Mail className="text-white w-16 h-16 relative z-10 opacity-80" />
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:bg-white/10 p-2 rounded-full transition-colors z-20"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12 text-center">
              {!isSubscribed ? (
                <>
                  <h2 className="text-3xl md:text-4xl font-serif text-espresso-black mb-4">
                    Master Your <span className="text-golden-ocher italic">Storytelling</span>
                  </h2>
                  <p className="text-espresso-black/70 mb-8 leading-relaxed">
                    Join our literary inner circle. Receive exclusive screenwriting insights, 
                    character development deep-dives, and industry wisdom delivered to your inbox.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="Your professional email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-espresso-black/10 rounded-2xl px-6 py-4 pl-12 focus:outline-none focus:ring-2 focus:ring-golden-ocher/30 focus:border-golden-ocher transition-all"
                      />
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-espresso-black/30 w-5 h-5" />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-directors-crimson text-white hover:bg-espresso-black py-4 rounded-2xl shadow-lg shadow-directors-crimson/10 flex items-center justify-center gap-2 group"
                    >
                      <span>Join the Collective</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </form>
                  <p className="mt-6 text-[10px] uppercase tracking-widest text-espresso-black/40">
                    No spam. Just knowledge. Unsubscribe anytime.
                  </p>
                </>
              ) : (
                <div className="py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h2 className="text-3xl font-serif text-espresso-black mb-2">You're on the list!</h2>
                  <p className="text-espresso-black/70">
                    Welcome to the collective. Look out for our welcome email shortly.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
