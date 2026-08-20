/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhotoGallery } from './components/PhotoGallery';
import { VillaSuites } from './components/VillaSuites';
import { AmenitiesSection } from './components/AmenitiesSection';
import { WhatsAppBookingEngine } from './components/WhatsAppBookingEngine';
import { LocationSection } from './components/LocationSection';
import { ExperiencesAndReviews } from './components/ExperiencesAndReviews';
import { FAQAndPolicies } from './components/FAQAndPolicies';
import { Footer } from './components/Footer';
import { StickyWhatsAppCTA } from './components/StickyWhatsAppCTA';
import { VILLA_WHATSAPP_CLEAN, VILLA_WHATSAPP_DISPLAY } from './data/villaData';
import { MessageCircle, Sparkles, Waves, ShieldCheck, HeartHandshake, Trees, Flame, Coffee, Star } from 'lucide-react';

export default function App() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-inquiry');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3D3A35] font-sans selection:bg-[#5C584A] selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenBooking={scrollToBooking} />

      {/* Main Content Sections */}
      <main>
        {/* Fullscreen Hero */}
        <Hero onOpenGallery={scrollToGallery} onOpenBooking={scrollToBooking} />

        {/* Overview Section */}
        <section id="overview" className="py-24 bg-[#FDFBF7] relative overflow-hidden border-b border-[#E6E2D3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAE5D9] border border-[#D4CEC1] text-[#5C584A] text-xs font-bold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" /> An Unrivaled Mountain Sanctuary
                </div>
                
                <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3D3A35] leading-tight">
                  Where Highland Serenity Meets Modern Grandeur
                </h2>
                
                <div className="flex items-start gap-4">
                  <div className="w-1 h-14 bg-[#5C584A] mt-1 shrink-0"></div>
                  <p className="text-lg leading-relaxed text-[#5C584A] italic">
                    "Perched atop the lush pine-clad ridges of Puncak at 1,120 meters above sea level, Royal Hill offers an exclusive 2,500 m² private gated sanctuary."
                  </p>
                </div>

                <p className="text-[#3D3A35]/80 text-sm sm:text-base leading-relaxed">
                  Breathe in crisp 18°C mountain air, immerse in our private swimming pool overlooking the valley of Mount Gede-Pangrango, and enjoy the effortless hospitality of our 2 on-site staff.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#EAE5D9]/60 border border-[#D4CEC1]">
                    <Waves className="w-5 h-5 text-[#5C584A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[#3D3A35] font-bold text-sm">Private Swimming Pool</h4>
                      <p className="text-[#5C584A] text-xs mt-0.5">Crystal mountain water & sun deck</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#EAE5D9]/60 border border-[#D4CEC1]">
                    <ShieldCheck className="w-5 h-5 text-[#2D5A43] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[#3D3A35] font-bold text-sm">2 On-Site Staff</h4>
                      <p className="text-[#5C584A] text-xs mt-0.5">Dedicated on-site resident staff assistance</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent('Halo Royal Hill Villa, saya ingin menanyakan booking seluruh villa untuk keluarga.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#5C584A] hover:bg-[#4A473C] text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#5C584A]/20 transition-all hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Inquire via WhatsApp ({VILLA_WHATSAPP_DISPLAY})</span>
                  </a>
                </div>
              </div>

              {/* Right: Architectural Collage */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden border border-[#E6E2D3] shadow-md aspect-[4/5] group bg-[#EAE5D9]">
                    <img
                      src="/photos/kolam renang.png"
                      alt="Swimming Pool at Royal Hill Villa"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden border border-[#E6E2D3] shadow-md aspect-square group bg-[#EAE5D9]">
                    <img
                      src="/photos/pendopo.png"
                      alt="Pendopo & Hospitality Pavilion"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <div className="rounded-3xl overflow-hidden border border-[#E6E2D3] shadow-md aspect-square group bg-[#EAE5D9]">
                    <img
                      src="/photos/kamar 1.png"
                      alt="Grand Master Bedroom"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden border border-[#E6E2D3] shadow-md aspect-[4/5] group bg-[#EAE5D9]">
                    <img
                      src="/photos/area barbeque.png"
                      alt="Al-Fresco Dining Terrace"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* High-Resolution Photo Gallery */}
        <PhotoGallery />

        {/* 6 Luxury Suites & Bedrooms Breakdown */}
        <VillaSuites />

        {/* Full Estate Amenities */}
        <AmenitiesSection />

        {/* Core Direct WhatsApp Booking & Inquiry Engine */}
        <WhatsAppBookingEngine />

        {/* Location & Puncak Attractions */}
        <LocationSection />

        {/* Guest Reviews & Signature Experiences */}
        <ExperiencesAndReviews />

        {/* FAQs & Policies */}
        <FAQAndPolicies />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent WhatsApp Floating Widget */}
      <StickyWhatsAppCTA onOpenBooking={scrollToBooking} />
    </div>
  );
}

