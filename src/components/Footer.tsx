import React from 'react';
import { MapPin, Phone, Mail, Globe, Leaf, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_PILLARS } from '../data/servicesData';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-[#071D3E] text-white pt-16 sm:pt-20 pb-10 sm:pb-12 overflow-hidden border-t-4 border-monarch-blue">
      {/* Decorative leaf watermark in the background */}
      <div className="absolute top-0 right-0 transform translate-x-16 -translate-y-16 text-white pointer-events-none opacity-[0.03]">
        <Leaf className="w-96 h-96" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-blue-900/60">
          
          {/* Column 1: Brand, Logo & Trust Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            {/* White Logo Container Badge for High Visibility */}
            <div className="inline-block bg-white px-4 py-2.5 rounded-2xl shadow-lg">
              <img
                src="/images/Logo1.png"
                alt="Monarch Services Logo"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </div>

            <div>
              <p className="text-sm font-extrabold tracking-wider uppercase text-emerald-400">
                {BUSINESS_INFO.tagline}
              </p>
              <p className="mt-2 text-sm text-blue-200/90 leading-relaxed max-w-sm">
                Complete property care solutions for homes, commercial facilities, strata complexes, and hospitality venues across Melbourne.
              </p>
            </div>

            <div className="pt-2 flex items-center space-x-2 text-xs text-blue-300/80">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{BUSINESS_INFO.abn}</span>
            </div>
          </div>

          {/* Column 2: Our Services (3 cols) */}
          <div className="lg:col-span-3 text-left space-y-3.5">
            <h3 className="text-base font-bold text-white tracking-wide uppercase">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-blue-200/90">
              {SERVICE_PILLARS.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-emerald-300 transition-colors inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 group-hover:scale-125 transition-transform" />
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#services"
                  className="hover:text-emerald-300 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 group-hover:scale-125 transition-transform" />
                  <span>End-of-Lease Bond Cleaning</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-emerald-300 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 group-hover:scale-125 transition-transform" />
                  <span>Pressure Washing &amp; Gutters</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details (3 cols) */}
          <div className="lg:col-span-3 text-left space-y-3.5">
            <h3 className="text-base font-bold text-white tracking-wide uppercase">
              Contact &amp; Location
            </h3>
            <div className="space-y-3 text-sm text-blue-200/90">
              
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                <span className="leading-snug">
                  {BUSINESS_INFO.address}
                </span>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                <div className="leading-snug">
                  <a
                    href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
                    className="block font-bold text-white hover:text-emerald-300 transition-colors text-base"
                  >
                    {BUSINESS_INFO.phonePrimary}
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneSecondary.replace(/\s+/g, '')}`}
                    className="block text-xs text-blue-300 hover:text-emerald-300 transition-colors mt-0.5"
                  >
                    Alt: {BUSINESS_INFO.phoneSecondary}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-emerald-300 transition-colors break-all leading-snug"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                <span className="text-xs text-blue-300 leading-snug">
                  {BUSINESS_INFO.hours}
                </span>
              </div>

            </div>
          </div>

          {/* Column 4: Socials & Eco Slogan (2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start space-y-4 text-left">
            <h3 className="text-base font-bold text-white tracking-wide uppercase">
              Follow Us
            </h3>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2.5">
              <a
                href="#facebook"
                className="w-9 h-9 rounded-full bg-blue-900/80 hover:bg-monarch-blue text-white flex items-center justify-center transition-all duration-200 border border-blue-700/50 hover:scale-110 shadow-sm"
                aria-label="Monarch Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#instagram"
                className="w-9 h-9 rounded-full bg-blue-900/80 hover:bg-monarch-blue text-white flex items-center justify-center transition-all duration-200 border border-blue-700/50 hover:scale-110 shadow-sm"
                aria-label="Monarch Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#linkedin"
                className="w-9 h-9 rounded-full bg-blue-900/80 hover:bg-monarch-blue text-white flex items-center justify-center transition-all duration-200 border border-blue-700/50 hover:scale-110 shadow-sm"
                aria-label="Monarch LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#youtube"
                className="w-9 h-9 rounded-full bg-blue-900/80 hover:bg-monarch-blue text-white flex items-center justify-center transition-all duration-200 border border-blue-700/50 hover:scale-110 shadow-sm"
                aria-label="Monarch YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Script Leaf Badge (Matching Flyer) */}
            <div className="flex items-center space-x-2 bg-emerald-900/40 border border-emerald-400/40 px-3.5 py-1.5 rounded-full">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span className="script-font text-xs font-semibold text-emerald-200">
                Cleaner Greener Brighter Together
              </span>
            </div>

            <p className="text-xs text-blue-300/80">
              Serving Homes &amp; Businesses across Melbourne VIC
            </p>
          </div>

        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-300/80 gap-4">
          <p>© 2024 Monarch Services. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-blue-700">|</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span className="text-blue-700">|</span>
            <span className="text-emerald-400 font-medium">294 Thomas St, Dandenong VIC 3175</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
