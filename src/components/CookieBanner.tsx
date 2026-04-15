import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay to ensure it pops in after initial page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-espresso-black text-textured-vellum rounded-2xl shadow-2xl border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-serif text-golden-ocher mb-2">We value your privacy</h3>
              <p className="text-sm text-textured-vellum/80 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or reject non-essential cookies at any time. Read our{' '}
                <Link to="/cookie-policy" className="underline hover:text-white transition-colors">
                  Cookie Policy
                </Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="underline hover:text-white transition-colors">
                  Privacy Policy
                </Link>{' '}
                for more information.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Button
                onClick={handleRejectAll}
                variant="outline"
                className="px-6 py-2.5 text-sm whitespace-nowrap text-textured-vellum border-textured-vellum/30 hover:bg-white/10 hover:text-textured-vellum"
              >
                Reject Non-Essential
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="px-6 py-2.5 text-sm whitespace-nowrap bg-golden-ocher text-espresso-black hover:bg-golden-ocher/90"
              >
                Accept All
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
