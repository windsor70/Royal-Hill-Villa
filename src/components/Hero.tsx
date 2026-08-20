import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles, MapPin, Calendar, Users, ArrowRight, ShieldCheck, Waves, Star, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { HIGH_RES_PHOTOS, VILLA_WHATSAPP_CLEAN, VILLA_WHATSAPP_DISPLAY, VILLA_ALTITUDE, buildWhatsAppLink } from '../data/villaData';
import { RoyalHillLogo } from './RoyalHillLogo';

interface HeroProps {
  onOpenGallery: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGallery, onOpenBooking }) => {
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);
  const heroPhotos = HIGH_RES_PHOTOS.filter(p => p.featured).slice(0, 6);

  // Quick inquiry state
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(15);
  const [stayReason, setStayReason] = useState('Family Gathering');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhotoIdx((prev) => (prev + 1) % heroPhotos.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroPhotos.length]);

  const handleQuickWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = buildWhatsAppLink({
      checkIn: checkIn || 'Segera / Rencana Tanggal Terdekat',
      checkOut: checkOut || undefined,
      guests: guests,
      eventType: stayReason,
    });
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#FDFBF7]">
      {/* Background Slideshow with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        {heroPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentPhotoIdx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ transition: 'opacity 1.2s ease-in-out, transform 8s ease-out' }}
          >
            <img
              src={photo.url}
              alt={photo.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            {/* Natural Tones Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-[#3D3A35]/50 to-[#3D3A35]/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3D3A35]/60 via-transparent to-[#3D3A35]/40" />
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12 pb-8">
        
        {/* Official Royal Hill Villa Logo Insignia Badge */}
        <div className="mb-6 inline-flex items-center gap-3 p-2.5 pr-5 rounded-2xl bg-[#FDFBF7]/95 backdrop-blur-md border border-[#E6E2D3] shadow-md animate-in fade-in slide-in-from-bottom-2 duration-500">
          <RoyalHillLogo variant="horizontal" size="sm" />
        </div>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FDFBF7]/90 border border-[#E6E2D3] text-[#5C584A] text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#5C584A]" />
            Highland Mountain Sanctuary
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FDFBF7]/90 border border-[#E6E2D3] text-[#3D3A35] text-xs font-medium uppercase tracking-wider backdrop-blur-md shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#5C584A]" />
            Tugu Selatan, Cisarua • {VILLA_ALTITUDE}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FDFBF7]/90 border border-[#E6E2D3] text-[#3D3A35] text-xs font-medium backdrop-blur-md shadow-sm">
            <Star className="w-3.5 h-3.5 fill-[#5C584A] text-[#5C584A]" />
            4.98 / 5.0 Rating (40+ Reviews)
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-4xl mb-8 sm:mb-12">
          <h1 className="font-serif italic text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.08] mb-5 drop-shadow-md">
            Ethereal Comfort in the Clouds
          </h1>
          <p className="text-[#FDFBF7] text-base sm:text-lg lg:text-xl font-light max-w-2xl leading-relaxed text-balance drop-shadow">
            An exclusive 2,500 m² private mountain estate in Puncak. Featuring 4 Grand Master Suites with en-suites, swimming pool, terrace billiards, complete BBQ & Korean hotpot station, fire pit, playground, and 2 on-site staff available for your assistance.
          </p>
        </div>

        {/* Main Direct WhatsApp CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
          <a
            id="hero-whatsapp-main-cta"
            href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent('Halo Royal Hill Villa Puncak (+6281212855640), saya tertarik untuk reservasi villa. Boleh info ketersediaan tanggal dan paket lengkap?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#5C584A] hover:bg-[#4A473C] text-[#FDFBF7] font-bold text-xs sm:text-sm uppercase tracking-widest shadow-xl shadow-[#5C584A]/30 transition-all transform hover:-translate-y-0.5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EAE5D9] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Direct WhatsApp Booking</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenGallery}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#FDFBF7]/90 hover:bg-[#FDFBF7] border border-[#E6E2D3] text-[#3D3A35] hover:text-[#5C584A] font-bold text-xs sm:text-sm uppercase tracking-widest backdrop-blur-md shadow-md transition-all"
          >
            <span>Explore 28 Authentic Villa Photos</span>
          </button>
        </div>

        {/* Interactive Quick Date & WhatsApp Inquiry Box */}
        <div className="w-full max-w-5xl bg-[#FDFBF7] border border-[#E6E2D3] rounded-3xl p-5 sm:p-7 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#E6E2D3]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2D5A43] animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-[#3D3A35] tracking-wide">
                Direct Host WhatsApp Desk: <span className="text-[#5C584A] font-bold">{VILLA_WHATSAPP_DISPLAY}</span>
              </span>
            </div>
            <span className="text-xs text-[#5C584A] font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2D5A43]" /> Best Direct Rate Guaranteed • No Extra Fees
            </span>
          </div>

          <form onSubmit={handleQuickWhatsAppSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-end">
            {/* Check-In Date */}
            <div>
              <label className="block text-[11px] font-bold text-[#5C584A] mb-1.5 uppercase tracking-widest">
                Check-in Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#EAE5D9]/50 border border-[#D4CEC1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#3D3A35] focus:outline-none focus:border-[#5C584A]"
                />
              </div>
            </div>

            {/* Check-Out Date */}
            <div>
              <label className="block text-[11px] font-bold text-[#5C584A] mb-1.5 uppercase tracking-widest">
                Check-out Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#EAE5D9]/50 border border-[#D4CEC1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#3D3A35] focus:outline-none focus:border-[#5C584A]"
                />
              </div>
            </div>

            {/* Number of Guests */}
            <div>
              <label className="block text-[11px] font-bold text-[#5C584A] mb-1.5 uppercase tracking-widest">
                Guests (Up to 30)
              </label>
              <div className="relative">
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-[#EAE5D9]/50 border border-[#D4CEC1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#3D3A35] focus:outline-none focus:border-[#5C584A]"
                >
                  <option value={10}>10 - 14 Guests (Entire Villa)</option>
                  <option value={15}>15 - 19 Guests (Entire Villa)</option>
                  <option value={20}>20 - 24 Guests (Entire Villa)</option>
                  <option value={25}>25 - 28 Guests (Entire Villa)</option>
                  <option value={30}>29 - 30+ Guests (Max Capacity)</option>
                </select>
              </div>
            </div>

            {/* Stay Type */}
            <div>
              <label className="block text-[11px] font-bold text-[#5C584A] mb-1.5 uppercase tracking-widest">
                Occasion / Gathering
              </label>
              <select
                value={stayReason}
                onChange={(e) => setStayReason(e.target.value)}
                className="w-full bg-[#EAE5D9]/50 border border-[#D4CEC1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#3D3A35] focus:outline-none focus:border-[#5C584A]"
              >
                <option value="Family Gathering">Family Holiday Gathering</option>
                <option value="Corporate Offsite">Corporate / Office Retreat</option>
                <option value="Birthday Celebration">Birthday / Anniversary</option>
                <option value="Weekend Getaway">Weekend Mountain Escape</option>
                <option value="Intimate Wedding Event">Intimate Event / Gathering</option>
              </select>
            </div>

            {/* Submit to WhatsApp Button */}
            <div>
              <button
                type="submit"
                id="hero-check-whatsapp-btn"
                className="w-full h-[42px] flex items-center justify-center gap-2 bg-[#5C584A] hover:bg-[#4A473C] text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Key Highlights Bar */}
      <div className="relative z-10 border-t border-[#E6E2D3] bg-[#FDFBF7]/95 backdrop-blur-md mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="border-r border-[#E6E2D3] last:border-none pr-2">
              <p className="text-[#3D3A35] font-serif italic font-bold text-lg sm:text-xl">4 Suites</p>
              <p className="text-[#7D7768] text-xs uppercase tracking-widest">En-suite Bathrooms</p>
            </div>
            <div className="border-r border-[#E6E2D3] last:border-none pr-2">
              <p className="text-[#3D3A35] font-serif italic font-bold text-lg sm:text-xl">Pool & Billiards</p>
              <p className="text-[#7D7768] text-xs uppercase tracking-widest">Outdoor Mountain Terrace</p>
            </div>
            <div className="border-r border-[#E6E2D3] last:border-none pr-2">
              <p className="text-[#3D3A35] font-serif italic font-bold text-lg sm:text-xl">BBQ & Shabu</p>
              <p className="text-[#7D7768] text-xs uppercase tracking-widest">Charcoal, Gas & Korean Kit</p>
            </div>
            <div className="border-r border-[#E6E2D3] last:border-none pr-2">
              <p className="text-[#3D3A35] font-serif italic font-bold text-lg sm:text-xl">2,500 m²</p>
              <p className="text-[#7D7768] text-xs uppercase tracking-widest">Private Gated Estate</p>
            </div>
            <div className="border-r border-[#E6E2D3] last:border-none pr-2">
              <p className="text-[#3D3A35] font-serif italic font-bold text-lg sm:text-xl">Playground & Sports</p>
              <p className="text-[#7D7768] text-xs uppercase tracking-widest">Pingpong, Basket, Voli, Swing</p>
            </div>
            <div>
              <p className="text-[#3D3A35] font-serif italic font-bold text-lg sm:text-xl">2 On-Site Staff</p>
              <p className="text-[#7D7768] text-xs uppercase tracking-widest">Resident Assistance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Navigation Indicators */}
      <div className="absolute right-6 bottom-24 z-20 hidden md:flex items-center gap-2 bg-[#FDFBF7]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E6E2D3] shadow-sm">
        <button
          onClick={() => setCurrentPhotoIdx((prev) => (prev - 1 + heroPhotos.length) % heroPhotos.length)}
          className="p-1 text-[#5C584A] hover:text-[#3D3A35]"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-xs font-mono text-[#5C584A]">
          0{currentPhotoIdx + 1} / 0{heroPhotos.length}
        </span>
        <button
          onClick={() => setCurrentPhotoIdx((prev) => (prev + 1) % heroPhotos.length)}
          className="p-1 text-[#5C584A] hover:text-[#3D3A35]"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
