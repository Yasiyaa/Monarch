import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FeatureBannerProps {
  onOpenQuote: () => void;
}

export const FeatureBanner: React.FC<FeatureBannerProps> = ({ onOpenQuote }) => {
  return (
    <section id="why-us" className="relative w-full overflow-hidden bg-white border-b-4 border-monarch-blue">
      
      {/* Left-Side Architectural Property Banner with Soft Feathered Fade Mask on the Right */}
      <div className="absolute top-0 left-0 bottom-0 w-full lg:w-[46%] xl:w-[42%] pointer-events-none z-0 overflow-hidden">
        <div
          className="w-full h-full relative"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 42%, rgba(0,0,0,0.55) 68%, rgba(0,0,0,0.12) 86%, transparent 100%)',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 42%, rgba(0,0,0,0.55) 68%, rgba(0,0,0,0.12) 86%, transparent 100%)',
          }}
        >
          <img
            src="/images/feature-property.jpg"
            alt="Well Maintained Properties - Monarch Services"
            className="w-full h-full object-cover object-[left_center]"
            loading="lazy"
          />
        </div>

        {/* Mobile Soft Overlay so text remains 100% legible on small screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/80 lg:hidden" />
      </div>

      {/* Main Content Container - Compact Panoramic Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8 lg:py-9">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-0">
          
          {/* Left Spacer on Desktop: Lets the house, walkway and lawn shine through on the left */}
          <div className="hidden lg:block lg:w-[22%] xl:w-[23%] flex-shrink-0" />

          {/* Center-Left Content Block: Headline, Subtitle & Green CTA Button */}
          <div className="lg:w-[32%] xl:w-[31%] text-left space-y-3 sm:space-y-3.5 flex-shrink-0">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-black text-monarch-blue tracking-tight leading-[1.12]">
              Well Maintained <br />
              Properties. Happier Lives.
            </h2>
            
            <p className="text-xs sm:text-sm lg:text-[14.5px] text-slate-700 font-medium leading-relaxed max-w-sm">
              From clean spaces to green lawns, we help you create a better environment to live and work.
            </p>

            <div className="pt-1">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center space-x-2 bg-[#2EA632] hover:bg-[#258B29] text-white px-7 py-3 rounded-xl font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Vertical Divider Line (Desktop) */}
          <div className="hidden lg:block w-[1.5px] h-36 xl:h-40 bg-slate-200/90 mx-4 xl:mx-6 flex-shrink-0" />

          {/* Horizontal Divider Line (Mobile) */}
          <div className="block lg:hidden w-full h-[1px] bg-slate-200/80 my-2" />

          {/* Right 2x2 Feature Grid with Bigger & Clearer Icons and Text */}
          <div className="lg:w-[43%] xl:w-[44%] grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 xl:gap-x-10 gap-y-5 sm:gap-y-6 text-left flex-shrink-0">
            
            {/* Feature 1: Experienced & Diverse Team */}
            <div className="flex items-start space-x-3.5 sm:space-x-4">
              <svg viewBox="0 0 36 32" className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 fill-[#003B95] mt-0.5" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="11" r="3.5"/>
                <path d="M9 16.5C6.5 16.5 4.5 18.5 4.5 21V24.5H13.5V21C13.5 18.5 11.5 16.5 9 16.5Z"/>
                <circle cx="27" cy="11" r="3.5"/>
                <path d="M27 16.5C24.5 16.5 22.5 18.5 22.5 21V24.5H31.5V21C31.5 18.5 29.5 16.5 27 16.5Z"/>
                <circle cx="18" cy="8.5" r="4.2"/>
                <path d="M18 14.5C14.7 14.5 12 17.2 12 20.5V25H24V20.5C24 17.2 21.3 14.5 18 14.5Z"/>
              </svg>
              <div className="leading-tight">
                <h4 className="text-[15px] sm:text-[16px] lg:text-[17px] font-bold text-monarch-blue">
                  Experienced &amp; Diverse Team
                </h4>
                <p className="mt-1.5 text-xs sm:text-[13.5px] lg:text-[14px] text-slate-700 font-medium leading-snug">
                  A combination of mature and young professionals.
                </p>
              </div>
            </div>

            {/* Feature 2: Fully Insured & Trained */}
            <div className="flex items-start space-x-3.5 sm:space-x-4">
              <svg viewBox="0 0 32 32" className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 mt-0.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2.5L5 6.8V15.2C5 22.8 9.7 29.8 16 31.5C22.3 29.8 27 22.8 27 15.2V6.8L16 2.5Z" fill="#003B95"/>
                <path d="M11 16.2L14.2 19.5L21.5 12" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="leading-tight">
                <h4 className="text-[15px] sm:text-[16px] lg:text-[17px] font-bold text-monarch-blue">
                  Fully Insured &amp; Trained
                </h4>
                <p className="mt-1.5 text-xs sm:text-[13.5px] lg:text-[14px] text-slate-700 font-medium leading-snug">
                  Your property is in safe hands.
                </p>
              </div>
            </div>

            {/* Feature 3: Sustainable Solutions */}
            <div className="flex items-start space-x-3.5 sm:space-x-4">
              <svg viewBox="0 0 32 32" className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 mt-0.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.5 4.5C16.5 4.5 6.5 14.5 6.5 26.5C18.5 26.5 28.5 16.5 28.5 5.5L27.5 4.5Z" fill="#2EA632"/>
                <path d="M6.5 26.5C12.5 20.5 18.5 14.5 25 7" stroke="white" strokeWidth="2.4" strokeLinecap="round"/>
              </svg>
              <div className="leading-tight">
                <h4 className="text-[15px] sm:text-[16px] lg:text-[17px] font-bold text-monarch-blue">
                  Sustainable Solutions
                </h4>
                <p className="mt-1.5 text-xs sm:text-[13.5px] lg:text-[14px] text-slate-700 font-medium leading-snug">
                  A cleaner, greener tomorrow.
                </p>
              </div>
            </div>

            {/* Feature 4: Competitive Pricing */}
            <div className="flex items-start space-x-3.5 sm:space-x-4">
              <svg viewBox="0 0 32 32" className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 fill-[#2EA632] mt-0.5" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H23V13C23 16.9 19.9 20 16 20C12.1 20 9 16.9 9 13V5Z" />
                <path d="M9 7H6C4.9 7 4 7.9 4 9V11C4 13.2 5.8 15 8 15H9V13H8C6.9 13 6 12.1 6 11V9H9V7Z" />
                <path d="M23 7H26C27.1 7 28 7.9 28 9V11C28 13.2 26.2 15 24 15H23V13H24C25.1 13 26 12.1 26 11V9H23V7Z" />
                <path d="M14.5 20H17.5V24H14.5V20Z" />
                <path d="M10 24H22V27H10V24Z" />
              </svg>
              <div className="leading-tight">
                <h4 className="text-[15px] sm:text-[16px] lg:text-[17px] font-bold text-monarch-blue">
                  Competitive Pricing
                </h4>
                <p className="mt-1.5 text-xs sm:text-[13.5px] lg:text-[14px] text-slate-700 font-medium leading-snug">
                  Great value without compromising quality.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
