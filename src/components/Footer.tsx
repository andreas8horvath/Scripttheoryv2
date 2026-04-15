import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { SafeEmail } from './SafeEmail';

const Footer = () => {
  return (
    <footer className="bg-directors-crimson text-textured-vellum pt-20 pb-8 px-6 lg:px-12 border-t border-directors-crimson">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="mb-6 block">
            <Logo showText={false} iconClassName="h-20 w-auto" light={true} />
          </Link>
          <p className="text-textured-vellum/80 max-w-md font-light leading-relaxed">
            Holistic screenwriting coaching for writers ready to go beyond formula and build living, emotionally powerful stories.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-golden-ocher">Navigation</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-textured-vellum/70 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-textured-vellum/70 hover:text-white transition-colors">About</Link></li>
            <li><Link to="/services" className="text-textured-vellum/70 hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/contact" className="text-textured-vellum/70 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-golden-ocher">Connect</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-textured-vellum/70 hover:text-white transition-colors">LinkedIn</a></li>
            <li><SafeEmail user="contact" domain="scriptheory.com" className="text-textured-vellum/70 hover:text-white transition-colors">Email</SafeEmail></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-6 text-golden-ocher">Legal</h4>
          <ul className="space-y-4">
            <li><Link to="/privacy-policy" className="text-textured-vellum/70 hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/cookie-policy" className="text-textured-vellum/70 hover:text-white transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-textured-vellum/50 text-sm">
        <p>&copy; {new Date().getFullYear()} Script Theory. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
