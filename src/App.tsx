import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { FeatureBanner } from './components/FeatureBanner';
import { WhoWeService } from './components/WhoWeService';
import { ProcessAndReviews } from './components/ProcessAndReviews';
import { QuickActionBar } from './components/QuickActionBar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { Watermark } from './components/Watermark';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from './data/servicesData';

export function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [initialQuoteService, setInitialQuoteService] = useState<string>('');

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setInitialQuoteService(serviceName);
    }
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
    setInitialQuoteService('');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col text-slate-900 font-sans selection:bg-monarch-blue/15 selection:text-monarch-blue relative">
      {/* Site-wide Demo View Watermark */}
      <Watermark />

      {/* Top Header & Navigation */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Section 1: Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* Section 2: Our Services (4 Pillars: Cleaning, Mowing, Landscaping, Maintenance) */}
        <ServicesSection onOpenQuote={handleOpenQuote} />

        {/* Section 3: Feature Banner ("Well Maintained Properties. Happier Lives.") */}
        <FeatureBanner onOpenQuote={() => handleOpenQuote()} />

        {/* Section 4: Quick Action Bar (3-Column Blue Section with Minimal Bubble Pattern) */}
        <QuickActionBar onOpenQuote={() => handleOpenQuote()} />

        {/* Section 5: Who We Service (Residential, Commercial, Real Estate, Hospitality) */}
        <WhoWeService onOpenQuote={handleOpenQuote} />

        {/* Section 6: 4-Step Process & Customer Reviews */}
        <ProcessAndReviews />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Quote & Booking Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        initialService={initialQuoteService}
      />

      {/* Mobile Floating Bottom Bar for quick calls and quotes */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 sm:hidden flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
          className="flex-1 flex items-center justify-center space-x-2 bg-monarch-blue text-white py-2.5 rounded-full font-bold text-xs shadow"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Now</span>
        </a>
        <button
          onClick={() => handleOpenQuote()}
          className="flex-1 flex items-center justify-center space-x-2 bg-monarch-green text-white py-2.5 rounded-full font-bold text-xs shadow"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Free Quote</span>
        </button>
      </div>
    </div>
  );
}

export default App;
