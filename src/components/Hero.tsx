import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-white border-b border-slate-100 min-h-[440px] lg:min-h-[490px] flex items-center">
      
      {/* Right-Side Team Banner with Soft Feathered Fade Mask on the Left */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[54%] xl:w-[55%] pointer-events-none z-0 overflow-hidden">
        
        {/* Soft Left Fade: Feathered from transparent on the left into 100% opaque, 
            revealing all 5 team members with zero harsh cutoff */}
        <div 
          className="w-full h-full relative"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 5%, rgba(0,0,0,0.5) 15%, rgba(0,0,0,1) 28%)',
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 5%, rgba(0,0,0,0.5) 15%, rgba(0,0,0,1) 28%)',
          }}
        >
          <img
            src="/images/hero-team.jpg"
            alt="Monarch Services - Professional Property Care Team"
            className="w-full h-full object-cover object-[center_top] sm:object-[68%_center] lg:object-[center_15%]"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Mobile Gradient Overlay (Only on small screens to ensure text contrast) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/75 lg:hidden"></div>

        {/* Floating Top Right Script Text */}
        <div className="absolute top-5 right-5 sm:top-7 sm:right-7 lg:top-8 lg:right-10 z-10 pointer-events-none text-right">
          <p className="script-font text-3xl sm:text-4xl lg:text-[40px] text-white font-bold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] rotate-[-4deg]">
            A Cleaner<br />
            Greener<br />
            Brighter<br />
            Tomorrow
          </p>
        </div>

        {/* Floating Bottom Right Badge: SERVING HOMES & BUSINESSES (Matching reference image) */}
        <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-10 z-10 hidden sm:flex items-center space-x-3.5 bg-[#0B1E33]/92 backdrop-blur-md py-2.5 px-4 rounded-2xl border border-slate-600/50 shadow-2xl">
          {/* Green Ring with White Leaf */}
          <div className="w-11 h-11 rounded-full border-[2.5px] border-[#4CAF50] flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 28 28" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M23 4C14 4.5 6 12.5 6 22.5C16 22.5 24 14.5 24.5 5.5L23 4Z" 
                fill="white"
              />
              <path 
                d="M6 22.5C11 17.5 16 12.5 21 7" 
                stroke="#0B1E33" 
                strokeWidth="1.8" 
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* 3-Line Text */}
          <div className="text-left leading-tight">
            <span className="block text-xs font-extrabold tracking-wider uppercase text-white">SERVING</span>
            <span className="block text-xs font-extrabold tracking-wider uppercase text-white">HOMES &amp;</span>
            <span className="block text-xs font-extrabold tracking-wider uppercase text-white">BUSINESSES</span>
          </div>
        </div>
      </div>

      {/* Main Content (Left Column on Pure Crisp White Background) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-7 lg:py-8">
        <div className="max-w-xl lg:max-w-[560px] xl:max-w-[620px] text-left space-y-3.5 sm:space-y-4">
          
          {/* Subtitle / Brand Slogan */}
          <div className="pt-0.5">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-slate-500">
              CLEANER SPACES. GREENER TOMORROW.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.08] text-slate-900">
            <span className="block text-monarch-blue">ONE TEAM.</span>
            <span className="block text-monarch-blue">COMPLETE</span>
            <span className="block text-monarch-green">PROPERTY CARE.</span>
          </h1>

          {/* Core Services Subtitle */}
          <p className="text-lg sm:text-xl lg:text-[22px] font-extrabold text-slate-900 leading-snug">
            Cleaning, Lawn Mowing, Landscaping <br className="hidden sm:inline" />
            &amp; Property Maintenance.
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed max-w-lg">
            Reliable, professional and affordable solutions for homes and small businesses.
          </p>

          {/* Action Buttons (Round edged pill buttons) */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center space-x-2.5 bg-monarch-blue hover:bg-monarch-blue-800 text-white px-7 py-3 rounded-full font-bold text-sm sm:text-base shadow-lg shadow-monarch-blue/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#services"
              className="inline-flex items-center bg-white hover:bg-slate-50 text-monarch-blue border-2 border-monarch-blue px-7 py-2.5 rounded-full font-bold text-sm sm:text-base transition-all hover:shadow-sm"
            >
              Our Services
            </a>
          </div>

          {/* Bottom Trust Badges (Exact layout & icons from reference image) */}
          <div className="pt-5 sm:pt-6 border-t border-slate-200/80">
            <div className="flex flex-wrap items-center gap-y-4 gap-x-5 sm:gap-x-7 lg:gap-x-8">
              
              {/* 1. Reliable Service: Solid Blue Shield with White Checkmark */}
              <div className="flex items-center space-x-2.5 flex-shrink-0">
                <svg viewBox="0 0 32 32" className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2.5L5 6.8V15.2C5 22.8 9.7 29.8 16 31.5C22.3 29.8 27 22.8 27 15.2V6.8L16 2.5Z" fill="#003B95"/>
                  <path d="M11 16.2L14.2 19.5L21.5 12" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="text-left leading-tight">
                  <span className="block text-xs sm:text-[13px] font-bold text-slate-900">Reliable</span>
                  <span className="block text-xs sm:text-[13px] font-medium text-slate-700">Service</span>
                </div>
              </div>

              {/* 2. Professional Team: Solid Blue 3-Person Silhouettes */}
              <div className="flex items-center space-x-2.5 flex-shrink-0">
                <svg viewBox="0 0 36 32" className="w-9 h-8 sm:w-10 sm:h-9 flex-shrink-0" fill="#003B95" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="11" r="3.5"/>
                  <path d="M9 16.5C6.5 16.5 4.5 18.5 4.5 21V24.5H13.5V21C13.5 18.5 11.5 16.5 9 16.5Z"/>
                  <circle cx="27" cy="11" r="3.5"/>
                  <path d="M27 16.5C24.5 16.5 22.5 18.5 22.5 21V24.5H31.5V21C31.5 18.5 29.5 16.5 27 16.5Z"/>
                  <circle cx="18" cy="8.5" r="4.2"/>
                  <path d="M18 14.5C14.7 14.5 12 17.2 12 20.5V25H24V20.5C24 17.2 21.3 14.5 18 14.5Z"/>
                </svg>
                <div className="text-left leading-tight">
                  <span className="block text-xs sm:text-[13px] font-bold text-slate-900">Professional</span>
                  <span className="block text-xs sm:text-[13px] font-medium text-slate-700">Team</span>
                </div>
              </div>

              {/* 3. Eco-Friendly Solutions: Solid Blue Leaf with White Stem */}
              <div className="flex items-center space-x-2.5 flex-shrink-0">
                <svg viewBox="0 0 32 32" className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.5 4.5C16.5 4.5 6.5 14.5 6.5 26.5C18.5 26.5 28.5 16.5 28.5 5.5L27.5 4.5Z" fill="#003B95"/>
                  <path d="M6.5 26.5C12.5 20.5 18.5 14.5 25 7" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
                <div className="text-left leading-tight">
                  <span className="block text-xs sm:text-[13px] font-bold text-slate-900">Eco-Friendly</span>
                  <span className="block text-xs sm:text-[13px] font-medium text-slate-700">Solutions</span>
                </div>
              </div>

              {/* 4. 100% Customer Focused: Solid Blue Circle with White Smiley */}
              <div className="flex items-center space-x-2.5 flex-shrink-0">
                <svg viewBox="0 0 32 32" className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="14" fill="#003B95"/>
                  <circle cx="11" cy="13.5" r="1.8" fill="white"/>
                  <circle cx="21" cy="13.5" r="1.8" fill="white"/>
                  <path d="M10.5 18C12 21.8 15 23 16 23C17 23 20 21.8 21.5 18" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
                <div className="text-left leading-tight">
                  <span className="block text-xs sm:text-[13px] font-bold text-slate-900">100%</span>
                  <span className="block text-xs sm:text-[13px] font-medium text-slate-700">Customer Focused</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
