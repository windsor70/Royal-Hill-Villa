import React, { useState } from 'react';
import { VILLA_SUITES, VILLA_WHATSAPP_CLEAN, VILLA_WHATSAPP_DISPLAY } from '../data/villaData';
import { VillaSuite } from '../types';
import { Bed, Users, Maximize, Eye, Check, Sparkles, MessageCircle, ArrowUpRight, Bath, Image as ImageIcon } from 'lucide-react';

export const VillaSuites: React.FC = () => {
  const [selectedSuite, setSelectedSuite] = useState<VillaSuite>(VILLA_SUITES[0]);
  const [viewMode, setViewMode] = useState<'room' | 'bathroom'>('room');

  return (
    <section id="suites" className="py-24 bg-[#FDFBF7] border-b border-[#E6E2D3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAE5D9] border border-[#D4CEC1] text-[#5C584A] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" /> 4 Grand Master Suites + Dedicated En-suites
            </div>
            <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3D3A35]">
              Master Suites & En-suite Bathrooms
            </h2>
            <p className="text-[#5C584A] text-base sm:text-lg max-w-2xl mt-2 leading-relaxed">
              Every bedroom at Royal Hill Villa is photographed with authentic layouts (Kamar 1 to Kamar 4), featuring gold marble accents, dedicated workstations, dressing tables, and private rain shower en-suites.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent('Halo Royal Hill Villa (+6281212855640), saya ingin menanyakan pembagian 4 Kamar Tidur & Kamar Mandi untuk rombongan kami.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2D5A43] hover:bg-[#234735] text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask Host via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Suites Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-10">
          {VILLA_SUITES.map((suite) => {
            const isSelected = selectedSuite.id === suite.id;
            return (
              <button
                key={suite.id}
                onClick={() => {
                  setSelectedSuite(suite);
                  setViewMode('room');
                }}
                className={`p-5 rounded-2xl text-left border transition-all ${
                  isSelected
                    ? 'bg-[#5C584A] border-[#5C584A] text-white shadow-lg'
                    : 'bg-[#EAE5D9]/60 border-[#D4CEC1] text-[#3D3A35] hover:bg-[#EAE5D9]'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className={`text-[11px] font-bold uppercase tracking-wider block ${isSelected ? 'text-[#EAE5D9]' : 'text-[#5C584A]'}`}>
                    {suite.captionId}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${isSelected ? 'bg-white/20 text-white' : 'bg-[#D4CEC1] text-[#3D3A35]'}`}>
                    {suite.capacity}
                  </span>
                </div>
                <span className="font-bold text-sm sm:text-base block truncate mt-0.5">
                  {suite.name.split(' (')[0]}
                </span>
                <span className={`text-xs block mt-1 line-clamp-1 ${isSelected ? 'text-[#EAE5D9]' : 'text-[#7D7768]'}`}>
                  {suite.bed}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Suite Detailed Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#FDFBF7] border border-[#E6E2D3] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg items-center">
          
          {/* Left: Suite Photo with Tab Toggle between Bedroom & En-suite Bathroom */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden group shadow-md border border-[#E6E2D3] bg-[#EAE5D9] flex flex-col">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={viewMode === 'room' ? selectedSuite.imageUrl : (selectedSuite.bathroomImageUrl || selectedSuite.imageUrl)}
                alt={selectedSuite.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D3A35]/80 via-transparent to-transparent opacity-60" />

              {/* Photo View Mode Switcher (Bedroom vs Bathroom) */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 p-1 rounded-full bg-[#FDFBF7]/95 backdrop-blur-md border border-[#E6E2D3] shadow-md z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewMode('room');
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                    viewMode === 'room'
                      ? 'bg-[#5C584A] text-white shadow-sm'
                      : 'text-[#5C584A] hover:bg-[#EAE5D9]'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Bedroom View</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewMode('bathroom');
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                    viewMode === 'bathroom'
                      ? 'bg-[#5C584A] text-white shadow-sm'
                      : 'text-[#5C584A] hover:bg-[#EAE5D9]'
                  }`}
                >
                  <Bath className="w-3.5 h-3.5" />
                  <span>En-suite Bathroom</span>
                </button>
              </div>

              {/* Float tags */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="px-3.5 py-1.5 rounded-full bg-[#FDFBF7]/90 backdrop-blur-md border border-[#E6E2D3] text-[#3D3A35] text-xs font-medium flex items-center gap-2 shadow-sm">
                  <Eye className="w-3.5 h-3.5 text-[#5C584A]" />
                  <span>{selectedSuite.view}</span>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-[#5C584A] text-white font-bold text-xs uppercase tracking-wider shadow-sm">
                  {selectedSuite.captionId}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Suite Specs & Direct WhatsApp Action */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-md bg-[#EAE5D9] text-[#3D3A35] font-bold text-xs">
                  {selectedSuite.captionId}
                </span>
                <span className="text-[#5C584A] font-bold text-xs uppercase tracking-widest">
                  {selectedSuite.type}
                </span>
              </div>
              <h3 className="font-serif italic text-2xl sm:text-3xl font-bold text-[#3D3A35] mt-1">
                {selectedSuite.name}
              </h3>
              <p className="text-[#5C584A] text-sm leading-relaxed mt-2">
                {selectedSuite.description}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#EAE5D9]/50 border border-[#D4CEC1] text-center">
              <div>
                <span className="text-[#5C584A] text-[11px] font-bold uppercase tracking-wider block flex items-center justify-center gap-1">
                  <Users className="w-3.5 h-3.5" /> Capacity
                </span>
                <span className="text-[#3D3A35] font-bold text-xs sm:text-sm mt-1 block">
                  {selectedSuite.capacity}
                </span>
              </div>
              <div className="border-x border-[#D4CEC1]">
                <span className="text-[#5C584A] text-[11px] font-bold uppercase tracking-wider block flex items-center justify-center gap-1">
                  <Bed className="w-3.5 h-3.5" /> Bed Setup
                </span>
                <span className="text-[#3D3A35] font-bold text-xs sm:text-sm mt-1 block">
                  {selectedSuite.bed}
                </span>
              </div>
              <div>
                <span className="text-[#5C584A] text-[11px] font-bold uppercase tracking-wider block flex items-center justify-center gap-1">
                  <Maximize className="w-3.5 h-3.5" /> Room Size
                </span>
                <span className="text-[#3D3A35] font-bold text-xs sm:text-sm mt-1 block">
                  {selectedSuite.size}
                </span>
              </div>
            </div>

            {/* Features Checklist */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#5C584A] font-bold block">
                Included with this bedroom:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedSuite.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#3D3A35]">
                    <Check className="w-3.5 h-3.5 text-[#2D5A43] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent(`Halo Royal Hill Villa Puncak (+6281212855640), saya ingin menanyakan ketersediaan tanggal booking villa (khususnya konfigurasi ${selectedSuite.captionId} - ${selectedSuite.name}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#5C584A] hover:bg-[#4A473C] text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Inquire {selectedSuite.captionId} on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[11px] text-[#7D7768] mt-2.5">
                *Booking guarantees private exclusive access to all 4 Master Suites & entire estate grounds.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
