import React from 'react';
import { VILLA_WHATSAPP_CLEAN, VILLA_WHATSAPP_DISPLAY, VILLA_WHATSAPP_RAW, VILLA_LOCATION, VILLA_ALTITUDE } from '../data/villaData';
import { MessageCircle, Phone, MapPin, Mail, Sparkles, Heart, ShieldCheck, Instagram, ArrowUp } from 'lucide-react';
import { RoyalHillLogo } from './RoyalHillLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EAE5D9] border-t border-[#D4CEC1] pt-16 pb-28 sm:pb-16 text-[#5C584A] text-xs sm:text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#D4CEC1]">
          
          {/* Col 1 & 2: Brand Info with Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-4 rounded-3xl bg-[#FDFBF7] border border-[#D4CEC1] inline-flex flex-col items-center sm:items-start shadow-sm">
              <RoyalHillLogo variant="full" size="md" />
            </div>

            <p className="text-[#5C584A] text-xs leading-relaxed max-w-sm mt-3">
              An exclusive 2,500 m² private luxury mountain estate in Puncak, West Java. Featuring 4 grand master suites, private swimming pool, terrace billiards, complete BBQ & Korean hotpot station, bonfire pit, playground, and 2 on-site staff available for your assistance.
            </p>

            {/* Direct WhatsApp Pill */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FDFBF7] border border-[#D4CEC1] text-[#2D5A43] text-xs font-bold uppercase tracking-wider hover:bg-white shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: {VILLA_WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-serif italic font-bold text-[#3D3A35] text-base mb-4">
              Explore Villa
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#gallery" className="hover:text-[#3D3A35] transition-colors">High-Res Photo Gallery</a></li>
              <li><a href="#suites" className="hover:text-[#3D3A35] transition-colors">4 Master Suites</a></li>
              <li><a href="#amenities" className="hover:text-[#3D3A35] transition-colors">Pool & Amenities</a></li>
              <li><a href="#booking-inquiry" className="hover:text-[#3D3A35] transition-colors">WhatsApp Direct Booking</a></li>
              <li><a href="#location" className="hover:text-[#3D3A35] transition-colors">Location & Weather</a></li>
              <li><a href="#reviews" className="hover:text-[#3D3A35] transition-colors">Guest Reviews</a></li>
            </ul>
          </div>

          {/* Col 4: Villa Highlights */}
          <div>
            <h4 className="font-serif italic font-bold text-[#3D3A35] text-base mb-4">
              Key Specifications
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5C584A]">
              <li>• Land Area: 2,500 m²</li>
              <li>• Building Size: 950 m²</li>
              <li>• Capacity: 20 – 30 Guests</li>
              <li>• Altitude: 1,120 MASL</li>
              <li>• Pool: Private Swimming Pool</li>
              <li>• Parking: 8+ Large SUVs</li>
            </ul>
          </div>

          {/* Col 5: Direct Contact Details */}
          <div>
            <h4 className="font-serif italic font-bold text-[#3D3A35] text-base mb-4">
              Direct Reservation Desk
            </h4>
            <div className="space-y-3 text-xs text-[#5C584A]">
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#2D5A43] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#3D3A35]">WhatsApp Official:</p>
                  <a href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}`} className="text-[#2D5A43] font-bold hover:underline">
                    {VILLA_WHATSAPP_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#5C584A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#3D3A35]">Direct Line:</p>
                  <a href={`tel:${VILLA_WHATSAPP_RAW}`} className="text-[#5C584A] hover:text-[#3D3A35]">
                    {VILLA_WHATSAPP_RAW}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#5C584A] shrink-0 mt-0.5" />
                <p className="text-[#7D7768] leading-snug">
                  Tugu Selatan, Cisarua, Puncak, Bogor, Jawa Barat, Indonesia
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7D7768]">
          <p>© {new Date().getFullYear()} Royal Hill Villa Puncak. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#5C584A] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2D5A43]" /> Direct Booking Verification Protected
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#FDFBF7] hover:bg-white border border-[#D4CEC1] text-[#3D3A35] flex items-center gap-1.5 transition-colors shadow-sm"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-xs font-bold">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
