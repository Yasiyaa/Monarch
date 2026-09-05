import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICE_PILLARS } from '../data/servicesData';
import { ServicePillar } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuote }) => {
  const [selectedService, setSelectedService] = useState<ServicePillar | null>(null);

  // Render the exact icons matching the user's reference image
  const renderCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'cleaning':
        // Blue Circle with Broom / Mop Sweeping & Sparkles
        return (
          <div className="w-14 h-14 rounded-full bg-[#003B95] border-[3.5px] border-white shadow-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
              {/* Broom handle */}
              <rect x="18" y="4" width="2.8" height="15" rx="1.4" transform="rotate(45 18 4)" />
              {/* Broom collar */}
              <path d="M14.5 14L18 17.5L15.8 19.7L12.3 16.2L14.5 14Z" />
              {/* Bristles sweeping */}
              <path d="M12.3 16.2L15.8 19.7L11.5 25.5C10.5 26.8 8.8 27.2 7.3 26.5C5.8 25.8 5.2 24.2 5.5 22.8L7.5 18.5L12.3 16.2Z" />
              {/* Sparkles */}
              <circle cx="7" cy="8" r="1.4" />
              <circle cx="13" cy="5" r="1.8" />
              <circle cx="5" cy="14" r="1" />
            </svg>
          </div>
        );

      case 'mowing':
        // Green Circle with Solid White Leaf & Vein
        return (
          <div className="w-14 h-14 rounded-full bg-[#2EA632] border-[3.5px] border-white shadow-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M26 6C15 6 6 15 6 26C17 26 26 17 26 6Z"
                fill="white"
              />
              <path
                d="M6 26C12 20 18 14 23 9"
                stroke="#2EA632"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        );

      case 'landscaping':
        // Green Circle with Sprouting 3-Leaf Plant
        return (
          <div className="w-14 h-14 rounded-full bg-[#2EA632] border-[3.5px] border-white shadow-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
              {/* Center Leaf */}
              <path d="M16 4C12.5 9 12.5 15.5 16 19C19.5 15.5 19.5 9 16 4Z" />
              {/* Left Leaf */}
              <path d="M7 14.5C7 20 12 23 15 23.5C14.5 20.5 11.5 15.5 7 14.5Z" />
              {/* Right Leaf */}
              <path d="M25 14.5C25 20 20 23 17 23.5C17.5 20.5 20.5 15.5 25 14.5Z" />
              {/* Stem */}
              <path d="M14.5 21V27C14.5 27.5 15 28 16 28C17 28 17.5 27.5 17.5 27V21H14.5Z" />
            </svg>
          </div>
        );

      case 'maintenance':
        // Dark Slate / Charcoal Circle with Open-Ended Wrench
        return (
          <div className="w-14 h-14 rounded-full bg-[#374151] border-[3.5px] border-white shadow-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 19.8L18.2 13C19.1 11.2 18.9 8.9 17.4 7.4C15.8 5.8 13.5 5.5 11.8 6.2L15.6 10L13.2 12.4L9.4 8.6C8.7 10.3 9 12.6 10.6 14.2C12.1 15.7 14.4 15.9 16.2 15L23 21.8C23.4 22.2 24.1 22.2 24.5 21.8L25 21.3C25.4 20.9 25.4 20.2 25 19.8Z" />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="services" className="pt-6 pb-12 sm:pt-7 sm:pb-14 bg-[#F0F5FD] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 sm:mb-5">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-monarch-blue tracking-tight">
              Our Services
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600 font-medium">
              Professional solutions for every part of your property. One team you can trust, every time.
            </p>
          </div>

          <div className="mt-2.5 md:mt-0 text-left md:text-right">
            <button
              onClick={() => onOpenQuote()}
              className="inline-flex items-center text-sm font-bold text-monarch-blue hover:text-blue-800 transition-colors group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid - Compact format without details list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICE_PILLARS.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 text-left relative overflow-visible"
            >
              <div>
                {/* Image Container with rounded top only */}
                <div className="relative h-44 sm:h-48 w-full rounded-t-2xl overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                {/* Floating Circular Icon - Positioned in front with z-30 overlapping bottom of image */}
                <div className="relative px-5 z-30">
                  <div className="absolute -top-7 left-5">
                    {renderCardIcon(service.iconName)}
                  </div>
                </div>

                {/* Compact Content Block (No details list, just title & description) */}
                <div className="pt-9 px-5 pb-3">
                  <h3 className="text-lg sm:text-[19px] font-bold text-monarch-blue group-hover:text-blue-700 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[50px]">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              {/* Learn More link opens details popup */}
              <div className="px-5 pb-5 pt-1">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-monarch-blue hover:text-blue-800 transition-colors group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Pop-up Modal with Full Inclusions and Details */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuote={onOpenQuote}
      />
    </section>
  );
};
