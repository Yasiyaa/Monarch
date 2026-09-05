import React from 'react';
import { Phone, Mail, Calendar, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface QuickActionBarProps {
  onOpenQuote: () => void;
}

export const QuickActionBar: React.FC<QuickActionBarProps> = ({ onOpenQuote }) => {
  return (
    <section id="contact-bar" className="relative bg-[#082046] text-white py-8 sm:py-9 lg:py-10 overflow-hidden border-b border-blue-900/40">
      
      {/* Minimal Subtle Bubble Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-60 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bubble-pattern" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
              {/* Bubble 1 */}
              <circle cx="28" cy="32" r="14" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)" />
              <circle cx="32" cy="27" r="3.5" fill="rgba(255,255,255,0.12)" />
              
              {/* Bubble 2 */}
              <circle cx="105" cy="45" r="20" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" fill="rgba(255,255,255,0.015)" />
              <circle cx="111" cy="39" r="4.5" fill="rgba(255,255,255,0.1)" />
              
              {/* Bubble 3 */}
              <circle cx="145" cy="115" r="10" stroke="rgba(255,255,255,0.06)" strokeWidth="1.2" fill="none" />
              
              {/* Bubble 4 */}
              <circle cx="60" cy="120" r="16" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)" />
              <circle cx="65" cy="115" r="3.5" fill="rgba(255,255,255,0.11)" />
              
              {/* Bubble 5 (Tiny accent bubbles) */}
              <circle cx="18" cy="135" r="5" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
              <circle cx="130" cy="18" r="7" stroke="rgba(255,255,255,0.06)" strokeWidth="1.2" fill="none" />
              <circle cx="75" cy="15" r="4" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bubble-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-blue-400/20">
          
          {/* Column 1: Let's Get Started */}
          <div className="flex flex-col justify-between space-y-3.5 md:pr-8 xl:pr-10 text-left">
            <div className="flex items-start space-x-3.5">
              <div className="w-12 h-12 rounded-full bg-[#133E82] border border-blue-400/30 flex items-center justify-center flex-shrink-0 shadow-md">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-[19px] font-bold text-white tracking-tight">
                  Let's Get Started
                </h3>
                <p className="mt-1 text-xs sm:text-[13px] text-blue-200/90 leading-snug">
                  One call. One team. Complete peace of mind.
                </p>
              </div>
            </div>

            <div className="pl-[62px]">
              <a
                href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="text-2xl sm:text-[27px] font-black text-white tracking-tight hover:text-emerald-400 transition-colors inline-block leading-tight"
              >
                {BUSINESS_INFO.phonePrimary}
              </a>
              <p className="text-[11px] sm:text-xs text-blue-300/80 mt-0.5 font-medium">
                Direct hotline | Alt: {BUSINESS_INFO.phoneSecondary}
              </p>
            </div>
          </div>

          {/* Column 2: Request a Quote */}
          <div className="flex flex-col justify-between space-y-3.5 pt-6 md:pt-0 md:px-8 xl:px-10 text-left">
            <div className="flex items-start space-x-3.5">
              <div className="w-12 h-12 rounded-full bg-[#133E82] border border-blue-400/30 flex items-center justify-center flex-shrink-0 shadow-md">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-[19px] font-bold text-white tracking-tight">
                  Request a Quote
                </h3>
                <p className="mt-1 text-xs sm:text-[13px] text-blue-200/90 leading-snug">
                  Fill out our quick form and we'll get back to you shortly.
                </p>
              </div>
            </div>

            <div className="pl-[62px]">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center space-x-2 border-2 border-white hover:bg-white hover:text-[#082046] text-white px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 shadow-md active:translate-y-0.5"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>

          {/* Column 3: Flexible Scheduling */}
          <div className="flex flex-col justify-between space-y-3.5 pt-6 md:pt-0 md:pl-8 xl:pl-10 text-left">
            <div className="flex items-start space-x-3.5">
              <div className="w-12 h-12 rounded-full bg-[#133E82] border border-blue-400/30 flex items-center justify-center flex-shrink-0 shadow-md">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-[19px] font-bold text-white tracking-tight">
                  Flexible Scheduling
                </h3>
                <p className="mt-1 text-xs sm:text-[13px] text-blue-200/90 leading-snug">
                  One-off jobs or regular services to suit your needs and budget.
                </p>
              </div>
            </div>

            <div className="pl-[62px]">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center space-x-2 border-2 border-white hover:bg-white hover:text-[#082046] text-white px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 shadow-md active:translate-y-0.5"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
