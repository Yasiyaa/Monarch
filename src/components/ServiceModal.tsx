import React from 'react';
import { X, Check, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { ServicePillar } from '../types';
import { BUSINESS_INFO } from '../data/servicesData';

interface ServiceModalProps {
  service: ServicePillar | null;
  onClose: () => void;
  onOpenQuote: (serviceName?: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onOpenQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 transform transition-all animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Image with Gradient */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent"></div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on Image */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/20 backdrop-blur mb-2">
              Monarch Property Care
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-base text-slate-700 leading-relaxed font-medium">
            {service.detailedDescription}
          </p>

          {/* Included Sub-services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center">
              <span className="w-2 h-2 rounded-full bg-monarch-blue mr-2"></span>
              Service Inclusions & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.subServices.map((sub, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-sm text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <Check className="w-4 h-4 text-monarch-green flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Advantages */}
          <div className="bg-blue-50/60 rounded-2xl p-4 border border-blue-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-monarch-blue mb-2.5 flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-monarch-blue" />
              The Monarch Quality Guarantee
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-monarch-blue"></span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
            <a
              href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-slate-700 hover:text-monarch-blue px-4 py-2.5 text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-monarch-blue" />
              <span>Call {BUSINESS_INFO.phonePrimary}</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenQuote(service.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-monarch-blue hover:bg-monarch-blue-800 text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <span>Request Quote for this Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
