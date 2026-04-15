import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar style based on scroll
  // We want the navbar to be transparent at the top for all pages to show the hero background
  const isTransparent = !isScrolled;
  
  const navClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
    isTransparent 
      ? "bg-transparent border-transparent py-6" 
      : "bg-textured-vellum/95 backdrop-blur-md border-espresso-black/5 py-4 shadow-sm"
  );

  const textClass = isTransparent ? "text-textured-vellum hover:text-golden-ocher" : "text-espresso-black/80 hover:text-directors-crimson";
  const activeTextClass = isTransparent ? "text-golden-ocher font-semibold" : "text-directors-crimson font-semibold";
  const buttonClass = isTransparent 
    ? "bg-textured-vellum text-espresso-black hover:bg-golden-ocher hover:text-white"
    : "bg-directors-crimson text-textured-vellum hover:bg-golden-ocher hover:text-white";

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="z-50 relative group h-16">
            <Logo 
              className="h-full w-auto" 
              showText={false} 
              iconClassName="h-full w-auto" 
              light={isTransparent}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm uppercase tracking-widest transition-colors duration-300",
                  location.pathname === link.href ? activeTextClass : textClass
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              to="/contact"
              className={cn(
                "px-6 py-3 text-sm uppercase tracking-widest transition-all duration-300",
                buttonClass
              )}
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={cn(
              "md:hidden z-50 p-2 focus:outline-none transition-colors",
              isTransparent ? "text-textured-vellum" : "text-directors-crimson"
            )}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-textured-vellum z-[100] flex flex-col md:hidden"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-espresso-black/5">
              <Link to="/" onClick={toggleMenu} className="h-12 block">
                <Logo className="h-full w-auto" showText={true} iconClassName="h-full w-auto" />
              </Link>
              <button 
                onClick={toggleMenu}
                className="p-2 text-directors-crimson focus:outline-none"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-8 p-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={toggleMenu}
                  className={cn(
                    "font-serif text-3xl text-directors-crimson hover:text-golden-ocher transition-colors",
                    location.pathname === link.href && "italic text-golden-ocher"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                to="/contact"
                onClick={toggleMenu}
                className="mt-8 px-8 py-4 bg-directors-crimson text-textured-vellum text-lg uppercase tracking-widest hover:bg-golden-ocher hover:text-white transition-all duration-300"
              >
                Book a Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
