import React, { useState } from 'react';
import { VILLA_FAQS, VILLA_WHATSAPP_CLEAN, VILLA_WHATSAPP_DISPLAY } from '../data/villaData';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, ShieldCheck, Clock, Check } from 'lucide-react';

export const FAQAndPolicies: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#FDFBF7] border-b border-[#E6E2D3] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAE5D9] border border-[#D4CEC1] text-[#5C584A] text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3D3A35] mb-3">
            Essential Villa Information
          </h2>
          <p className="text-[#5C584A] text-sm sm:text-base leading-relaxed">
            Everything you need to know about booking terms, pool temperature, capacity, and check-in procedures.
          </p>
        </div>

        {/* Quick Rules Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-3xl bg-[#EAE5D9]/50 border border-[#D4CEC1] text-center shadow-sm">
            <Clock className="w-5 h-5 text-[#5C584A] mx-auto mb-2" />
            <h4 className="text-[#3D3A35] font-bold text-sm">Check-in / Check-out</h4>
            <p className="text-[#7D7768] text-xs mt-0.5 font-medium">In: 15:00 • Out: 12:00 (Flexible on request)</p>
          </div>

          <div className="p-5 rounded-3xl bg-[#EAE5D9]/50 border border-[#D4CEC1] text-center shadow-sm">
            <ShieldCheck className="w-5 h-5 text-[#2D5A43] mx-auto mb-2" />
            <h4 className="text-[#3D3A35] font-bold text-sm">Direct WhatsApp DP</h4>
            <p className="text-[#7D7768] text-xs mt-0.5 font-medium">50% deposit locks in dates safely</p>
          </div>

          <div className="p-5 rounded-3xl bg-[#EAE5D9]/50 border border-[#D4CEC1] text-center shadow-sm">
            <Check className="w-5 h-5 text-[#5C584A] mx-auto mb-2" />
            <h4 className="text-[#3D3A35] font-bold text-sm">No Corkage Fee</h4>
            <p className="text-[#7D7768] text-xs mt-0.5 font-medium">Bring your own groceries & beverages freely</p>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {VILLA_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-3xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#FDFBF7] border-[#5C584A] shadow-md'
                    : 'bg-[#FDFBF7] border-[#E6E2D3] hover:border-[#D4CEC1]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-bold text-sm sm:text-base text-[#3D3A35]">
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-full shrink-0 transition-colors ${
                    isOpen ? 'bg-[#5C584A] text-white' : 'bg-[#EAE5D9] text-[#5C584A]'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-[#E6E2D3] text-[#5C584A] text-xs sm:text-sm leading-relaxed animate-in fade-in-50 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-14 text-center p-8 sm:p-10 rounded-3xl bg-[#EAE5D9]/60 border border-[#D4CEC1] shadow-sm">
          <p className="text-[#3D3A35] font-serif italic text-xl font-bold mb-1">
            Have a question not listed here?
          </p>
          <p className="text-[#5C584A] text-xs sm:text-sm mb-6 max-w-md mx-auto">
            Our friendly reservation team is active on WhatsApp to assist you immediately.
          </p>
          <a
            href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent('Halo Royal Hill Villa, saya memiliki pertanyaan mengenai villa.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2D5A43] hover:bg-[#234735] text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat via WhatsApp: {VILLA_WHATSAPP_DISPLAY}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
