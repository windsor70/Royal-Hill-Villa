import React, { useState } from 'react';
import { VILLA_WHATSAPP_CLEAN, VILLA_WHATSAPP_DISPLAY, VILLA_WHATSAPP_RAW } from '../data/villaData';
import { MessageCircle, X, ChevronUp, Sparkles, Phone, Calendar } from 'lucide-react';

interface StickyWhatsAppCTAProps {
  onOpenBooking: () => void;
}

export const StickyWhatsAppCTA: React.FC<StickyWhatsAppCTAProps> = ({ onOpenBooking }) => {
  const [showPopup, setShowPopup] = useState(false);

  const quickMessages = [
    { label: 'Check Weekend / Holiday Rates', text: 'Halo Royal Hill Villa, boleh minta info pricelist weekend dan ketersediaan tanggal terdekat?' },
    { label: 'Family Gathering Inquiry (20+ Pax)', text: 'Halo Admin, kami berencana sewa seluruh villa untuk gathering keluarga 20 orang. Apakah fasilitas kolam air hangat & karaoke sudah termasuk?' },
    { label: 'Corporate Retreat / Offsite Package', text: 'Halo Royal Hill Villa, kami dari kantor ingin menanyakan paket retreat perusahaan termasuk opsi catering Sundanese / BBQ.' }
  ];

  return (
    <>
      {/* Desktop Floating Widget Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end">
        
        {/* Expanded Quick Chat Menu */}
        {showPopup && (
          <div className="mb-3 w-84 bg-[#FDFBF7] border border-[#D4CEC1] rounded-3xl p-5 shadow-2xl animate-in slide-in-from-bottom-5 duration-200">
            <div className="flex items-center justify-between border-b border-[#E6E2D3] pb-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2D5A43] animate-ping" />
                <div>
                  <h4 className="text-xs font-bold text-[#3D3A35]">Royal Hill Villa Host</h4>
                  <p className="text-[10px] text-[#2D5A43] font-bold">Online • Replies in &lt; 2 mins</p>
                </div>
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="text-[#7D7768] hover:text-[#3D3A35] p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#5C584A] mb-3 leading-relaxed">
              Direct booking hotline: <strong className="text-[#3D3A35] font-bold">{VILLA_WHATSAPP_DISPLAY}</strong>
            </p>

            <div className="space-y-1.5 mb-4">
              {quickMessages.map((msg, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent(msg.text)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2.5 rounded-2xl bg-[#EAE5D9]/60 hover:bg-[#EAE5D9] border border-[#D4CEC1] text-[11px] text-[#3D3A35] font-medium transition-all text-left"
                >
                  💬 {msg.label}
                </a>
              ))}
            </div>

            <a
              href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent('Halo Royal Hill Villa, saya ingin menanyakan reservasi villa.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-full bg-[#2D5A43] hover:bg-[#234735] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Start WhatsApp Chat</span>
            </a>
          </div>
        )}

        {/* Main Floating Trigger Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowPopup(!showPopup)}
            className="group flex items-center gap-3 px-6 py-4 rounded-full bg-[#2D5A43] hover:bg-[#234735] text-white font-bold text-xs uppercase tracking-widest shadow-2xl border border-[#D4CEC1]/30 transition-all transform hover:scale-105 active:scale-95"
            aria-label="Open WhatsApp direct chat"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Direct WhatsApp: {VILLA_WHATSAPP_DISPLAY}</span>
          </button>
        </div>
      </div>

      {/* Mobile Bottom Fixed Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#FDFBF7]/95 backdrop-blur-lg border-t border-[#E6E2D3] p-3 flex items-center gap-2 shadow-lg">
        <a
          href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent('Halo Royal Hill Villa (+6281212855640), saya ingin menanyakan booking villa.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 rounded-full bg-[#2D5A43] hover:bg-[#234735] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-98"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Book WhatsApp ({VILLA_WHATSAPP_RAW})</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="py-3 px-4 rounded-full bg-[#EAE5D9] border border-[#D4CEC1] text-[#3D3A35] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 whitespace-nowrap active:scale-98 shadow-sm"
        >
          <Calendar className="w-4 h-4 text-[#5C584A]" />
          <span>Inquire Dates</span>
        </button>
      </div>
    </>
  );
};
