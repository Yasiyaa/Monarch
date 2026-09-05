import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, Sparkles, Scissors, Trees, Wrench, Send, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_PILLARS } from '../data/servicesData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('cleaning');
  const [selectedSubServices, setSelectedSubServices] = useState<string[]>([]);
  const [propertyType, setPropertyType] = useState<string>('House');
  const [frequency, setFrequency] = useState<string>('One-off');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [suburb, setSuburb] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialService) {
      const lower = initialService.toLowerCase();
      if (lower.includes('clean')) setSelectedCategory('cleaning');
      else if (lower.includes('lawn') || lower.includes('mow') || lower.includes('garden')) setSelectedCategory('lawn-mowing');
      else if (lower.includes('landscap')) setSelectedCategory('landscaping');
      else if (lower.includes('maint') || lower.includes('handyman')) setSelectedCategory('property-maintenance');
    }
  }, [initialService]);

  if (!isOpen) return null;

  const currentPillar = SERVICE_PILLARS.find((p) => p.id === selectedCategory) || SERVICE_PILLARS[0];

  const handleToggleSubService = (item: string) => {
    if (selectedSubServices.includes(item)) {
      setSelectedSubServices(selectedSubServices.filter((s) => s !== item));
    } else {
      setSelectedSubServices([...selectedSubServices, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSelectedSubServices([]);
    setFullName('');
    setPhone('');
    setEmail('');
    setSuburb('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 transform transition-all my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-monarch-blue to-blue-900 text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="inline-flex items-center space-x-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast, Free & Obligation-Free Quote</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Request an Upfront Quote
          </h3>
          <p className="text-blue-100 text-xs sm:text-sm mt-1">
            Tell us about your property and our team will get back to you with a transparent quote.
          </p>
        </div>

        {/* Modal Body */}
        {isSubmitted ? (
          <div className="p-8 sm:p-10 text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-monarch-green mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-slate-900">
                Thank You, {fullName || 'there'}!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                We have received your enquiry for <strong className="text-monarch-blue">{currentPillar.title}</strong>. A Monarch property specialist will review your details and call or text you within 30 minutes during business hours.
              </p>
            </div>

            {/* Quick direct call box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-sm mx-auto flex items-center justify-between">
              <div className="text-left text-xs">
                <span className="text-slate-500 block">Need immediate assistance?</span>
                <span className="font-bold text-slate-900 text-sm">Call {BUSINESS_INFO.phonePrimary}</span>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="bg-monarch-blue text-white px-3.5 py-1.5 rounded-lg text-xs font-bold hover:bg-monarch-blue-800 transition-colors"
              >
                Call Now
              </a>
            </div>

            <button
              onClick={handleReset}
              className="bg-monarch-blue hover:bg-monarch-blue-800 text-white px-8 py-3 rounded-full font-bold text-sm transition-all"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* 1. Category Tabs */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Select Primary Service
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SERVICE_PILLARS.map((p) => {
                  const active = selectedCategory === p.id;
                  return (
                    <button
                      type="button"
                      key={p.id}
                      onClick={() => {
                        setSelectedCategory(p.id);
                        setSelectedSubServices([]);
                      }}
                      className={`p-3 rounded-xl border text-xs font-bold text-center transition-all flex flex-col items-center justify-center space-y-1.5 ${
                        active
                          ? 'border-monarch-blue bg-blue-50/80 text-monarch-blue shadow-sm ring-2 ring-monarch-blue/20'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      {p.id === 'cleaning' && <Sparkles className="w-4 h-4 text-monarch-blue" />}
                      {p.id === 'lawn-mowing' && <Scissors className="w-4 h-4 text-monarch-green" />}
                      {p.id === 'landscaping' && <Trees className="w-4 h-4 text-emerald-600" />}
                      {p.id === 'property-maintenance' && <Wrench className="w-4 h-4 text-slate-700" />}
                      <span className="leading-tight">{p.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Specific Sub-Services Checklist */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Select Specific Inclusions (Optional)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentPillar.subServices.map((sub, i) => {
                  const checked = selectedSubServices.includes(sub);
                  return (
                    <button
                      type="button"
                      key={i}
                      onClick={() => handleToggleSubService(sub)}
                      className={`p-2.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-colors ${
                        checked
                          ? 'bg-blue-50 border-monarch-blue text-monarch-blue font-semibold'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{sub}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border ${
                          checked
                            ? 'bg-monarch-blue border-monarch-blue text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {checked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Property Type & Frequency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-monarch-blue text-slate-800"
                >
                  <option value="House">Residential House</option>
                  <option value="Townhouse">Townhouse / Unit</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Office">Commercial Office</option>
                  <option value="Hospitality">Restaurant / Cafe</option>
                  <option value="Rental">Rental Inspection / Vacate</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Service Schedule
                </label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-monarch-blue text-slate-800"
                >
                  <option value="One-off">One-Off Job</option>
                  <option value="Weekly">Weekly Service</option>
                  <option value="Fortnightly">Fortnightly Service</option>
                  <option value="Monthly">Monthly Service</option>
                  <option value="Flexible">Flexible / As Needed</option>
                </select>
              </div>
            </div>

            {/* 4. Contact Information */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                3. Your Contact Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-monarch-blue text-slate-800"
                />

                <input
                  type="tel"
                  required
                  placeholder="Phone Number (e.g. 0404...) *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-monarch-blue text-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-monarch-blue text-slate-800"
                />

                <input
                  type="text"
                  required
                  placeholder="Suburb & Postcode (VIC) *"
                  value={suburb}
                  onChange={(e) => setSuburb(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-monarch-blue text-slate-800"
                />
              </div>

              <textarea
                rows={2}
                placeholder="Job description or notes (e.g., number of rooms, urgent date)..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-monarch-blue text-slate-800 resize-none"
              ></textarea>
            </div>

            {/* Submit Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center space-x-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-monarch-green flex-shrink-0" />
                <span>Zero obligation. Fully confidential.</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-monarch-blue hover:bg-monarch-blue-800 text-white px-7 py-3 rounded-full font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quote Request</span>
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};
