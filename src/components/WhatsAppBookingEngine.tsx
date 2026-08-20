import React, { useState } from 'react';
import { VILLA_WHATSAPP_CLEAN, VILLA_WHATSAPP_DISPLAY, VILLA_WHATSAPP_RAW, buildWhatsAppLink } from '../data/villaData';
import { BookingInquiry } from '../types';
import { MessageCircle, Phone, Calendar, Users, Sparkles, Copy, Check, ShieldCheck, Flame, Coffee, Utensils, HeartHandshake, QrCode, ArrowRight, Clock, HelpCircle, Trophy, Waves } from 'lucide-react';
import { RoyalHillLogo } from './RoyalHillLogo';

const ADD_ON_OPTIONS = [
  { id: 'bbq-meat-package', name: 'Premium BBQ Meat & Seafood Set (Wagyu, Chicken, Sausages, Corn)', price: 'Rp 165.000 / pax', icon: Flame },
  { id: 'korean-shabu-set', name: 'Korean BBQ & Shabu-Shabu Hotpot Ingredient Set', price: 'Rp 135.000 / pax', icon: Utensils },
  { id: 'floating-breakfast', name: 'Signature Floating Breakfast in Infinity Pool', price: 'Rp 350.000 / tray', icon: Waves },
  { id: 'liwetan-feast', name: 'Traditional Sundanese Liwetan Feast (Complete with Tampah)', price: 'Rp 95.000 / pax', icon: Utensils },
  { id: 'bonfire-marshmallow', name: 'Stargazing Bonfire Firewood & Marshmallow Kit', price: 'Free / Included', icon: Flame },
  { id: 'tea-walk-guide', name: 'Sunrise Tea Walk Guide at Gunung Mas Estate', price: 'Rp 200.000 / group', icon: Sparkles }
];

export const WhatsAppBookingEngine: React.FC = () => {
  const [inquiry, setInquiry] = useState<BookingInquiry>({
    checkIn: '',
    checkOut: '',
    guests: 18,
    eventType: 'Family Holiday Gathering',
    addOns: ['Stargazing Bonfire Firewood & Marshmallow Kit'],
    guestName: '',
    guestPhone: '',
    notes: ''
  });

  const [copiedNumber, setCopiedNumber] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);

  const toggleAddOn = (addonName: string) => {
    setInquiry((prev) => {
      const exists = prev.addOns.includes(addonName);
      return {
        ...prev,
        addOns: exists
          ? prev.addOns.filter((a) => a !== addonName)
          : [...prev.addOns, addonName]
      };
    });
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(VILLA_WHATSAPP_RAW);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2500);
  };

  const whatsappUrl = buildWhatsAppLink(inquiry);

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(whatsappUrl)}&color=2D5A43`;

  return (
    <section id="booking-inquiry" className="py-24 bg-[#FDFBF7] border-b border-[#E6E2D3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-2xl bg-[#FDFBF7] border border-[#E6E2D3] shadow-sm inline-block">
              <RoyalHillLogo variant="full" size="md" />
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAE5D9] border border-[#D4CEC1] text-[#5C584A] text-xs font-bold uppercase tracking-widest mb-4">
            <MessageCircle className="w-3.5 h-3.5" /> Direct WhatsApp Booking & Inquiry
          </div>
          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3D3A35] mb-4">
            Reserve Your Highland Getaway
          </h2>
          <p className="text-[#5C584A] text-base sm:text-lg leading-relaxed">
            Direct reservations receive our lowest rates, zero platform commissions, customized room configurations (Kamar 1–4), and direct assistance at <strong className="text-[#3D3A35] font-bold">{VILLA_WHATSAPP_DISPLAY}</strong>.
          </p>
        </div>

        {/* Two-Column Booking Engine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inquiry Builder */}
          <div className="lg:col-span-7 bg-[#FDFBF7] border border-[#E6E2D3] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            
            <div className="flex items-center justify-between border-b border-[#E6E2D3] pb-4">
              <div>
                <h3 className="font-serif italic text-xl font-bold text-[#3D3A35]">
                  Step 1: Custom Stay Details
                </h3>
                <p className="text-[#5C584A] text-xs mt-0.5">
                  Select your dates and preferences to auto-generate a WhatsApp message
                </p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-[#EAE5D9] border border-[#D4CEC1] text-[#5C584A] font-bold uppercase tracking-wider">
                Entire Villa (4 Master Suites)
              </span>
            </div>

            {/* Dates Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#5C584A] uppercase tracking-widest mb-2">
                  Check-in Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={inquiry.checkIn}
                    onChange={(e) => setInquiry({ ...inquiry, checkIn: e.target.value })}
                    className="w-full bg-[#EAE5D9]/50 border border-[#D4CEC1] rounded-2xl px-4 py-3 text-sm text-[#3D3A35] focus:outline-none focus:border-[#5C584A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#5C584A] uppercase tracking-widest mb-2">
                  Check-out Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={inquiry.checkOut}
                    onChange={(e) => setInquiry({ ...inquiry, checkOut: e.target.value })}
                    className="w-full bg-[#EAE5D9]/50 border border-[#D4CEC1] rounded-2xl px-4 py-3 text-sm text-[#3D3A35] focus:outline-none focus:border-[#5C584A]"
                  />
                </div>
              </div>
            </div>

            {/* Guest Count Slider & Event Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-[#5C584A] uppercase tracking-widest">
                    Total Guests
                  </label>
                  <span className="text-xs font-bold text-[#3D3A35]">
                    {inquiry.guests} Guests
                  </span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={30}
                  step={1}
                  value={inquiry.guests}
                  onChange={(e) => setInquiry({ ...inquiry, guests: Number(e.target.value) })}
                  className="w-full h-2 bg-[#D4CEC1] rounded-lg appearance-none cursor-pointer accent-[#5C584A]"
                />
                <div className="flex justify-between text-[10px] text-[#7D7768] mt-1 font-bold">
                  <span>6 guests</span>
                  <span>18 guests</span>
                  <span>30 max capacity</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#5C584A] uppercase tracking-widest mb-2">
                  Stay Purpose
                </label>
                <select
                  value={inquiry.eventType}
                  onChange={(e) => setInquiry({ ...inquiry, eventType: e.target.value })}
                  className="w-full bg-[#EAE5D9]/50 border border-[#D4CEC1] rounded-2xl px-4 py-3 text-sm text-[#3D3A35] focus:outline-none focus:border-[#5C584A]"
                >
                  <option value="Family Holiday Gathering">Family Holiday & Gathering</option>
                  <option value="Corporate Offsite & Retreat">Corporate Offsite / Leadership</option>
                  <option value="Birthday & Anniversary">Birthday / Anniversary Celebration</option>
                  <option value="Weekend Friends Reunion">Friends Reunion / Weekend</option>
                  <option value="Intimate Gathering / Photoshoot">Intimate Gathering / Prewedding</option>
                </select>
              </div>
            </div>

            {/* Optional Add-ons */}
            <div>
              <label className="block text-xs font-bold text-[#5C584A] uppercase tracking-widest mb-2.5">
                Optional Experiences & Add-ons:
              </label>
              <div className="space-y-2">
                {ADD_ON_OPTIONS.map((addon) => {
                  const isChecked = inquiry.addOns.includes(addon.name);
                  const Icon = addon.icon;
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.name)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#5C584A] border-[#5C584A] text-white shadow-sm'
                          : 'bg-[#EAE5D9]/50 border-[#D4CEC1] text-[#3D3A35] hover:bg-[#EAE5D9]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-lg flex items-center justify-center border ${
                          isChecked ? 'bg-white border-white text-[#5C584A]' : 'border-[#D4CEC1] bg-[#FDFBF7]'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon className={`w-4 h-4 shrink-0 ${isChecked ? 'text-white' : 'text-[#5C584A]'}`} />
                          <span className="text-xs sm:text-sm font-medium">{addon.name}</span>
                        </div>
                      </div>
                      <span className={`text-xs font-mono shrink-0 ml-2 font-semibold ${isChecked ? 'text-white' : 'text-[#5C584A]'}`}>
                        {addon.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Person Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-[#5C584A] uppercase tracking-widest mb-2">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Bpk. Hendra / Ibu Sarah"
                  value={inquiry.guestName}
                  onChange={(e) => setInquiry({ ...inquiry, guestName: e.target.value })}
                  className="w-full bg-[#EAE5D9]/50 border border-[#D4CEC1] rounded-2xl px-4 py-2.5 text-sm text-[#3D3A35] placeholder:text-[#7D7768] focus:outline-none focus:border-[#5C584A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#5C584A] uppercase tracking-widest mb-2">
                  Special Request or Notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. Extra BBQ charcoal, early check-in"
                  value={inquiry.notes}
                  onChange={(e) => setInquiry({ ...inquiry, notes: e.target.value })}
                  className="w-full bg-[#EAE5D9]/50 border border-[#D4CEC1] rounded-2xl px-4 py-2.5 text-sm text-[#3D3A35] placeholder:text-[#7D7768] focus:outline-none focus:border-[#5C584A]"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Live Message Preview & Direct WhatsApp Launch */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live WhatsApp Preview Box */}
            <div className="bg-[#FDFBF7] border border-[#E6E2D3] rounded-3xl p-6 sm:p-7 shadow-sm relative overflow-hidden">
              
              {/* WhatsApp App Mock Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E6E2D3]">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-[#2D5A43] flex items-center justify-center text-white font-bold shadow-sm">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#2D5A43] ring-2 ring-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#3D3A35]">Royal Hill Villa Host</h4>
                    <p className="text-[11px] text-[#2D5A43] font-bold">
                      Official WhatsApp • Online
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => setShowQrCode(!showQrCode)}
                  className="p-2.5 rounded-full bg-[#EAE5D9] hover:bg-[#D4CEC1] text-[#3D3A35] transition-colors"
                  title="Show QR Code"
                >
                  <QrCode className="w-4 h-4" />
                </button>
              </div>

              {/* Message Bubble Preview */}
              <div className="bg-[#EAE5D9]/60 rounded-2xl p-4 border border-[#D4CEC1] mb-6 font-sans text-xs sm:text-sm text-[#3D3A35] space-y-2 leading-relaxed">
                <p className="text-[#5C584A] font-bold uppercase tracking-wider text-xs">
                  *ROYAL HILL VILLA PUNCAK - DIRECT BOOKING INQUIRY*
                </p>
                <p className="text-[#3D3A35]">
                  Halo Admin Royal Hill Villa (+6281212855640), saya ingin menanyakan reservasi villa:
                </p>
                {inquiry.guestName && (
                  <p>👤 <strong>Nama:</strong> {inquiry.guestName}</p>
                )}
                <p>
                  📅 <strong>Tanggal:</strong> {inquiry.checkIn ? `${inquiry.checkIn} ${inquiry.checkOut ? `sampai ${inquiry.checkOut}` : ''}` : '(Tanggal rencana akan dikonfirmasi)'}
                </p>
                <p>
                  👥 <strong>Jumlah Tamu:</strong> {inquiry.guests} Orang (Entire Villa 4 Master Suites)
                </p>
                <p>
                  🎉 <strong>Tujuan Acara:</strong> {inquiry.eventType}
                </p>
                {inquiry.addOns.length > 0 && (
                  <p>
                    ✨ <strong>Add-ons:</strong> {inquiry.addOns.join(', ')}
                  </p>
                )}
                {inquiry.notes && (
                  <p>
                    📝 <strong>Catatan:</strong> {inquiry.notes}
                  </p>
                )}
                <p className="text-[#5C584A] italic text-[11px] pt-1">
                  Mohon info ketersediaan tanggal, promo spesial, dan total biayanya. Terima kasih!
                </p>
              </div>

              {/* QR Code Modal / Drawer if toggled */}
              {showQrCode && (
                <div className="mb-6 p-5 rounded-2xl bg-[#FDFBF7] border border-[#D4CEC1] text-center animate-in zoom-in-95 duration-200 shadow-md">
                  <p className="text-xs font-bold text-[#2D5A43] mb-2 uppercase tracking-wider">
                    Scan with your phone to open WhatsApp directly:
                  </p>
                  <img
                    src={qrImageUrl}
                    alt="WhatsApp QR Code"
                    className="w-44 h-44 mx-auto rounded-xl bg-white p-2 border border-[#E6E2D3]"
                  />
                  <p className="text-[11px] text-[#5C584A] mt-2 font-mono font-bold">
                    {VILLA_WHATSAPP_DISPLAY}
                  </p>
                </div>
              )}

              {/* Main Submit Button */}
              <a
                id="booking-send-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-full bg-[#2D5A43] hover:bg-[#234735] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Open in WhatsApp ({VILLA_WHATSAPP_DISPLAY})</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Alternative Quick Contact Options */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <button
                  onClick={handleCopyNumber}
                  className="py-3 px-3 rounded-full bg-[#EAE5D9] hover:bg-[#D4CEC1] border border-[#D4CEC1] text-[#3D3A35] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                >
                  {copiedNumber ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2D5A43]" />
                      <span className="text-[#2D5A43]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>

                <a
                  href={`tel:${VILLA_WHATSAPP_RAW}`}
                  className="py-3 px-3 rounded-full bg-[#EAE5D9] hover:bg-[#D4CEC1] border border-[#D4CEC1] text-[#3D3A35] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Direct Host</span>
                </a>
              </div>

            </div>

            {/* Direct Booking Guarantee Card */}
            <div className="bg-[#EAE5D9]/60 border border-[#D4CEC1] rounded-3xl p-5 sm:p-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#5C584A] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2D5A43]" /> Why Book Direct via WhatsApp?
              </h4>
              <ul className="space-y-2 text-xs text-[#3D3A35]">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2D5A43] mt-0.5 shrink-0" />
                  <span><strong>Zero OTA Commissions:</strong> Save up to 20% compared to third-party agency platforms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2D5A43] mt-0.5 shrink-0" />
                  <span><strong>Full Amenities Access:</strong> Free use of all BBQ grills, billiard table, pingpong, and kids play equipment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2D5A43] mt-0.5 shrink-0" />
                  <span><strong>Direct Butler Coordination:</strong> Custom arrival requests, meal prep, and room configurations arranged immediately.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
