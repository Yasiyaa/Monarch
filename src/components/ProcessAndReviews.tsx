import React, { useState, useEffect } from 'react';
import { PhoneCall, FileText, Sparkles, ThumbsUp, Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { FOUR_STEP_PROCESS, TESTIMONIALS } from '../data/servicesData';

export const ProcessAndReviews: React.FC = () => {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - itemsPerPage);

  // Auto-play every 5 seconds, pauses when hovered
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <PhoneCall className="w-5 h-5 text-white" />;
      case 1:
        return <FileText className="w-5 h-5 text-white" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-white" />;
      case 3:
        return <ThumbsUp className="w-5 h-5 text-white" />;
      default:
        return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <>
      {/* 4-Step Process Section with Panoramic Property Background Banner */}
      <section id="how-it-works" className="relative w-full overflow-hidden bg-[#071D3E] py-16 sm:py-20 lg:py-24 border-y border-slate-200/20">
        {/* Background Panoramic Property Banner */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/process-banner.jpg"
            alt="Monarch Services Quality Property Care"
            className="w-full h-full object-cover object-center transform scale-105"
            loading="lazy"
          />
          {/* Deep Royal Navy Gradient Overlay for Rich Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#071D3E]/94 via-[#09224A]/90 to-[#071D3E]/96" />
          {/* Radial Top Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/15 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 px-4 py-1.5 rounded-full border border-emerald-500/30 shadow-sm backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>How It Works</span>
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-tight">
              Our Simple 4-Step Process
            </h2>
            <p className="mt-2.5 text-sm sm:text-base lg:text-lg text-blue-100/90 font-medium">
              Getting quality property care has never been easier.
            </p>
          </div>

          {/* Cards Grid with Connecting Flow Line on Desktop */}
          <div className="relative">
            {/* Desktop Connecting Flow Line */}
            <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-blue-400/20 via-emerald-400/40 to-blue-400/20 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {FOUR_STEP_PROCESS.map((item, idx) => (
                <div
                  key={item.step}
                  className="relative bg-white/95 hover:bg-white rounded-2xl p-6 sm:p-7 border border-white/40 shadow-xl hover:shadow-2xl hover:shadow-blue-900/40 transition-all duration-300 text-center flex flex-col items-center group transform hover:-translate-y-2 backdrop-blur-sm"
                >
                  {/* Step Number Circle */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-monarch-blue to-[#002766] group-hover:scale-105 transition-transform flex items-center justify-center shadow-lg shadow-monarch-blue/30 mb-5 relative">
                    {getStepIcon(idx)}
                    <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-monarch-green text-white text-xs font-black flex items-center justify-center border-2 border-white shadow-sm">
                      {item.step}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-monarch-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Premium Testimonials / Client Reviews Section */}
      <section id="reviews" className="py-16 sm:py-20 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/80 shadow-2xs">
                VERIFIED FEEDBACK
              </span>
              <h2 className="mt-2.5 text-3xl sm:text-4xl font-extrabold text-monarch-blue tracking-tight">
                What Our Clients Say
              </h2>
              <div className="flex items-center justify-center space-x-1.5 mt-2.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-xs sm:text-sm font-bold text-slate-700">
                  5.0 Star Rated Across Melbourne
                </span>
              </div>
            </div>

            {/* Carousel Viewport & Cards Track */}
            <div
              className="overflow-hidden px-1 py-3"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                }}
              >
                {TESTIMONIALS.map((review, idx) => (
                  <div
                    key={idx}
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                  >
                    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full relative group transform hover:-translate-y-1 text-left">
                      <Quote className="w-8 h-8 text-blue-100/90 absolute top-5 right-5 group-hover:text-blue-200 transition-colors" />

                      <div className="space-y-4">
                        {/* 5 Stars */}
                        <div className="flex space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        {/* Quote Text */}
                        <p className="text-slate-700 text-sm sm:text-[14.5px] leading-relaxed italic font-normal min-h-[72px]">
                          "{review.quote}"
                        </p>
                      </div>

                      {/* Author & Verification Footer */}
                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-monarch-blue/10 text-monarch-blue font-bold text-xs flex items-center justify-center flex-shrink-0 border border-monarch-blue/20">
                            {getInitials(review.author)}
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 text-sm group-hover:text-monarch-blue transition-colors">
                              {review.author}
                            </p>
                            <p className="text-xs text-slate-500 font-medium">
                              {review.role}
                            </p>
                          </div>
                        </div>

                        <span className="hidden sm:inline-flex items-center text-[10.5px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                          <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-600" />
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls: Arrows & Dot Pagination */}
            <div className="mt-8 flex items-center justify-between max-w-xs mx-auto px-4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 hover:bg-monarch-blue hover:text-white hover:border-monarch-blue flex items-center justify-center transition-all duration-200 active:scale-95"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Pagination Dots */}
              <div className="flex items-center space-x-2">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      currentIndex === idx
                        ? 'w-8 h-2.5 bg-monarch-blue shadow-xs'
                        : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 hover:bg-monarch-blue hover:text-white hover:border-monarch-blue flex items-center justify-center transition-all duration-200 active:scale-95"
                aria-label="Next reviews"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
