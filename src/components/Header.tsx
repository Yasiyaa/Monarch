import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Services', href: '#services' },
    { name: 'About Us', href: '#why-us' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Gallery', href: '#sectors' },
    { name: 'Contact', href: '#contact-bar' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md py-3' : 'py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <img
              src="/images/logo.jpg"
              alt="Monarch Services - Cleaner Spaces. Greener Tomorrow."
              className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-semibold text-slate-700 hover:text-monarch-blue transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-monarch-blue transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action: Click to Call (No Instant Quote) */}
          <div className="hidden sm:flex items-center">
            <a
              href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center space-x-2.5 bg-monarch-blue hover:bg-monarch-blue-800 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="tracking-wide">{BUSINESS_INFO.phonePrimary}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="sm:hidden p-2.5 rounded-full bg-monarch-blue text-white shadow"
              title="Call Monarch Services"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-semibold text-slate-800 hover:bg-monarch-blue-50 hover:text-monarch-blue"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-3">
            <a
              href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center justify-center space-x-2 w-full bg-monarch-blue text-white py-3 rounded-full font-bold text-sm shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_INFO.phonePrimary}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="block w-full text-center bg-monarch-green hover:bg-emerald-600 text-white py-3 rounded-full font-bold text-sm shadow transition-colors"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
