import React from 'react';
import { Home, Building2, Briefcase, UtensilsCrossed, Factory, ArrowRight, Check } from 'lucide-react';
import { CLIENT_SECTORS } from '../data/servicesData';

interface WhoWeServiceProps {
  onOpenQuote: (serviceCategory?: string) => void;
}

export const WhoWeService: React.FC<WhoWeServiceProps> = ({ onOpenQuote }) => {
  return (
    <section id="sectors" className="py-12 sm:py-16 bg-[#F0F5FD] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-monarch-green bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/80 shadow-2xs">
            Tailored Property Solutions
          </span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-extrabold text-monarch-blue tracking-tight">
            Who We Service
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            From private homeowners and rental property managers to bustling commercial offices and hospitality venues across Melbourne.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_SECTORS.map((sector) => (
            <div
              key={sector.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white font-bold text-lg">
                  {sector.title}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-left">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[48px]">
                  {sector.description}
                </p>

                {/* Sub-tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {sector.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium bg-slate-50 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenQuote(sector.title)}
                  className="pt-2 text-xs font-bold text-monarch-blue hover:text-blue-800 flex items-center justify-between w-full group/btn"
                >
                  <span>Enquire for {sector.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Real Estate Callout Banner (Flyer highlight: "One supplier. Multiple services. Less administration.") */}
        <div className="mt-12 bg-gradient-to-r from-monarch-blue to-blue-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              For Real Estate Agents & Property Managers
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              One Supplier. Multiple Services. Less Administration. One Invoice.
            </h3>
            <p className="text-sm text-blue-100 max-w-2xl">
              Simplify your vendor management. We coordinate bond cleans, carpet steaming, lawn touch-ups, and handyman fixes under one reliable SLA.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote('Real Estate / Strata Partner')}
            className="flex-shrink-0 bg-white hover:bg-slate-100 text-monarch-blue px-6 py-3.5 rounded-full font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Partner With Monarch
          </button>
        </div>

      </div>
    </section>
  );
};
