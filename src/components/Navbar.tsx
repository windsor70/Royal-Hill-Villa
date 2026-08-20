import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Menu, X, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { VILLA_WHATSAPP_CLEAN, VILLA_WHATSAPP_DISPLAY } from '../data/villaData';
import { RoyalHillLogo } from './RoyalHillLogo';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Villa Photos (28)', href: '#gallery' },
    { label: 'Suites & Bedrooms', href: '#suites' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Location', href: '#location' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E6E2D3] shadow-sm py-2.5'
          : 'bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-[#E6E2D3]/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Official Attached Royal Hill Villa Artwork */}
        <a href="#" className="flex items-center gap-3 group">
          <RoyalHillLogo variant="horizontal" size="sm" className="group-hover:opacity-90 transition-opacity" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-[0.2em] font-medium text-[#3D3A35]/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#5C584A] hover:font-bold transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5C584A] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* WhatsApp Direct Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="nav-whatsapp-direct-btn"
            href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent('Halo Admin Royal Hill Villa Puncak, saya ingin menanyakan ketersediaan & paket booking villa.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2D5A43] hover:bg-[#234735] text-white text-xs font-bold uppercase tracking-widest shadow-md shadow-[#2D5A43]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-200"></span>
            </span>
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp Booking</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-full bg-[#EAE5D9] hover:bg-[#D4CEC1] text-[#3D3A35] border border-[#D4CEC1] text-xs font-bold uppercase tracking-widest transition-all"
          >
            Plan Inquiry
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#2D5A43] text-white text-xs"
            aria-label="Direct WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#EAE5D9] border border-[#D4CEC1] text-[#3D3A35] hover:bg-[#D4CEC1]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#3D3A35]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-b border-[#E6E2D3] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#3D3A35] hover:text-[#5C584A] py-2 border-b border-[#E6E2D3]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-3">
            <a
              href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent('Halo Royal Hill Villa, saya ingin menanyakan reservasi.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#2D5A43] hover:bg-[#234735] text-white font-bold text-xs uppercase tracking-widest shadow-md shadow-[#2D5A43]/20"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Chat WhatsApp: {VILLA_WHATSAPP_DISPLAY}
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-[#EAE5D9] hover:bg-[#D4CEC1] border border-[#D4CEC1] text-[#3D3A35] font-bold text-xs uppercase tracking-widest text-center"
            >
              Calculate Dates & Custom Message
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
