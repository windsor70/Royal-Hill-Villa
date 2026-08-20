import React, { useState } from 'react';
import { HIGH_RES_PHOTOS, AUTHENTIC_SHEETS, VillaPhotoSheet, VILLA_WHATSAPP_CLEAN, VILLA_WHATSAPP_DISPLAY } from '../data/villaData';
import { VillaPhoto } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, MessageCircle, Sparkles, Eye, Layers, CheckCircle2, ShieldCheck, Flame, Waves, Trophy, BedDouble, Bath, FileImage, Download } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [viewMode, setViewMode] = useState<'sheets' | 'photos'>('sheets');
  const [selectedSheet, setSelectedSheet] = useState<VillaPhotoSheet>(AUTHENTIC_SHEETS[0]);
  const [activeCategory, setActiveCategory] = useState<'all' | 'rooms' | 'bathrooms' | 'bbq' | 'outdoor' | 'sports_kids'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<VillaPhoto | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [isSheetModalOpen, setIsSheetModalOpen] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Photos (28)', count: HIGH_RES_PHOTOS.length, icon: Sparkles },
    { id: 'rooms', label: 'Master Suites (Kamar 1–4, Meja Kerja & Rias)', count: HIGH_RES_PHOTOS.filter(p => p.category === 'rooms').length, icon: BedDouble },
    { id: 'bathrooms', label: 'En-suites & Hygiene (Kamar Mandi 1–4, Toilet Tamu)', count: HIGH_RES_PHOTOS.filter(p => p.category === 'bathrooms').length, icon: Bath },
    { id: 'bbq', label: 'BBQ Stations & Korean Hotpot', count: HIGH_RES_PHOTOS.filter(p => p.category === 'bbq').length, icon: Flame },
    { id: 'outdoor', label: 'Pool, Billiard, Fire Pit, Pendopo & Gazebo', count: HIGH_RES_PHOTOS.filter(p => p.category === 'outdoor').length, icon: Waves },
    { id: 'sports_kids', label: 'Playground & Sports Courts', count: HIGH_RES_PHOTOS.filter(p => p.category === 'sports_kids').length, icon: Trophy },
  ];

  const filteredPhotos = activeCategory === 'all'
    ? HIGH_RES_PHOTOS
    : HIGH_RES_PHOTOS.filter((photo) => photo.category === activeCategory);

  const openLightbox = (photo: VillaPhoto) => {
    const index = filteredPhotos.findIndex((p) => p.id === photo.id);
    setLightboxIndex(index >= 0 ? index : 0);
    setSelectedPhoto(photo);
  };

  const handleNext = () => {
    const nextIdx = (lightboxIndex + 1) % filteredPhotos.length;
    setLightboxIndex(nextIdx);
    setSelectedPhoto(filteredPhotos[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setLightboxIndex(prevIdx);
    setSelectedPhoto(filteredPhotos[prevIdx]);
  };

  return (
    <section id="gallery" className="py-24 bg-[#FDFBF7] border-b border-[#E6E2D3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAE5D9] border border-[#D4CEC1] text-[#5C584A] text-xs font-bold uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5" /> Authentic Villa Photo Gallery & Sheets
          </div>
          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3D3A35] mb-4">
            Visual Guide to Every Corner
          </h2>
          <p className="text-[#5C584A] text-base sm:text-lg leading-relaxed">
            Direct high-resolution visual sheets of our 4 Master Suites, private en-suite bathrooms, BBQ stations, outdoor pool & billiard table, kids playground, and sports facilities.
          </p>

          {/* Primary View Mode Switcher: Authentic Photo Sheets vs 28 Photo Grid */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-[#EAE5D9] border border-[#D4CEC1] shadow-inner">
            <button
              onClick={() => setViewMode('sheets')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                viewMode === 'sheets'
                  ? 'bg-[#5C584A] text-white shadow-md'
                  : 'text-[#5C584A] hover:text-[#3D3A35]'
              }`}
            >
              <FileImage className="w-4 h-4" />
              <span>Authentic Facility Sheets (6 Sheets)</span>
            </button>
            <button
              onClick={() => setViewMode('photos')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                viewMode === 'photos'
                  ? 'bg-[#5C584A] text-white shadow-md'
                  : 'text-[#5C584A] hover:text-[#3D3A35]'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>28 Item Breakdown</span>
            </button>
          </div>
        </div>

        {/* --- VIEW 1: AUTHENTIC FACILITY SHEETS (Matching user screenshot sheets) --- */}
        {viewMode === 'sheets' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            
            {/* Sheet Selector Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {AUTHENTIC_SHEETS.map((sheet) => {
                const isSelected = selectedSheet.id === sheet.id;
                return (
                  <button
                    key={sheet.id}
                    onClick={() => setSelectedSheet(sheet)}
                    className={`p-3.5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#5C584A] border-[#5C584A] text-white shadow-lg scale-[1.02]'
                        : 'bg-[#EAE5D9]/70 border-[#D4CEC1] text-[#3D3A35] hover:bg-[#EAE5D9]'
                    }`}
                  >
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider block truncate ${isSelected ? 'text-[#EAE5D9]' : 'text-[#7D7768]'}`}>
                        {sheet.fileName}
                      </span>
                      <span className="font-bold text-xs sm:text-sm block mt-0.5 leading-snug">
                        {sheet.title}
                      </span>
                    </div>
                    <span className={`text-[10px] mt-2 inline-block font-semibold ${isSelected ? 'text-[#EAE5D9]' : 'text-[#5C584A]'}`}>
                      {sheet.itemCount} Authentic Photos
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Sheet High-Resolution Canvas Showcase */}
            <div className="bg-[#FDFBF7] border border-[#E6E2D3] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#E6E2D3]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#2D5A43] text-white font-bold text-xs uppercase tracking-wider">
                      Verified Villa Sheet
                    </span>
                    <span className="text-[#5C584A] text-xs font-mono font-bold">
                      {selectedSheet.fileName}
                    </span>
                  </div>
                  <h3 className="font-serif italic text-2xl sm:text-3xl font-bold text-[#3D3A35]">
                    {selectedSheet.title}
                  </h3>
                  <p className="text-[#5C584A] text-sm mt-1 max-w-3xl">
                    {selectedSheet.description}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsSheetModalOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#5C584A] hover:bg-[#4A473C] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>Fullscreen Zoom</span>
                  </button>
                  <a
                    href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent(`Halo Royal Hill Villa (+6281212855640), saya melihat foto ${selectedSheet.title} (${selectedSheet.fileName}) dan ingin menanyakan fasilitas ini.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2D5A43] hover:bg-[#234735] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Inquire Sheet on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Sheet Photo Display Canvas */}
              <div 
                onClick={() => setIsSheetModalOpen(true)}
                className="relative rounded-2xl overflow-hidden border border-[#D4CEC1] group cursor-pointer shadow-inner bg-[#1A1A1A]"
              >
                <img
                  src={selectedSheet.url}
                  alt={selectedSheet.title}
                  className="w-full h-auto object-contain max-h-[700px] mx-auto group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-[#FDFBF7]/90 backdrop-blur-md text-[#3D3A35] font-bold text-xs shadow-lg flex items-center gap-1.5">
                    <Maximize2 className="w-4 h-4" /> Click to Expand Full Sheet
                  </span>
                </div>
              </div>

              {/* Sheet Included Items Chips */}
              <div className="mt-6 pt-6 border-t border-[#E6E2D3]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7D7768] block mb-3">
                  Included Photo Captions on this Sheet:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedSheet.labels.map((lbl, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-[#EAE5D9] text-[#3D3A35] text-xs font-bold border border-[#D4CEC1] shadow-xs flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A43]" />
                      {lbl}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW 2: 28 ITEM BREAKDOWN GRID --- */}
        {viewMode === 'photos' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Category Filter Tabs */}
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id as any)}
                    className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#5C584A] text-white shadow-md'
                        : 'bg-[#EAE5D9] border border-[#D4CEC1] text-[#3D3A35] hover:bg-[#D4CEC1]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span>{cat.label}</span>
                    <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#D4CEC1] text-[#5C584A]'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => openLightbox(photo)}
                  className="group relative rounded-3xl overflow-hidden bg-[#FDFBF7] border border-[#E6E2D3] hover:border-[#5C584A] shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden relative bg-[#EAE5D9]">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      loading={index < 6 ? 'eager' : 'lazy'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3D3A35]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Authentic Caption Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-[#FDFBF7]/95 backdrop-blur-md border border-[#E6E2D3] text-[#3D3A35] text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#2D5A43]" />
                      <span>{photo.captionId}</span>
                    </div>

                    {photo.badge && (
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-[#2E2B27]/80 backdrop-blur-sm text-[#FDFBF7] text-[11px] font-medium">
                        {photo.badge}
                      </div>
                    )}

                    <div className="absolute top-3 right-3 p-2 rounded-full bg-[#FDFBF7]/90 backdrop-blur-md text-[#3D3A35] group-hover:bg-[#5C584A] group-hover:text-white transition-colors shadow-sm">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5 bg-[#FDFBF7] border-t border-[#E6E2D3] flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#7D7768]">
                          {photo.tag}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-[#5C584A]">
                          Sheet: {photo.sheetSource}.png
                        </span>
                      </div>
                      <h3 className="text-[#3D3A35] font-bold text-base group-hover:text-[#5C584A] transition-colors leading-snug">
                        {photo.title}
                      </h3>
                      <p className="text-[#5C584A] text-xs leading-relaxed mt-1 line-clamp-2">
                        {photo.subtitle}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E6E2D3]/60 flex items-center justify-between text-xs text-[#5C584A]">
                      <span className="flex items-center gap-1 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A43]" />
                        Included in Rental
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[#EAE5D9] group-hover:bg-[#5C584A] flex items-center justify-center text-[#5C584A] group-hover:text-white transition-colors shrink-0">
                        <Eye className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Bottom Direct WhatsApp Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#EAE5D9]/70 border border-[#D4CEC1] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2D5A43] flex items-center justify-center text-white shrink-0 shadow-md">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[#3D3A35] font-bold text-base sm:text-lg">
                Need specific photos or live video walkthrough?
              </h4>
              <p className="text-[#5C584A] text-xs sm:text-sm mt-0.5">
                Chat with our on-site villa host directly on WhatsApp for real-time videos of any room or amenity.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent('Halo Royal Hill Villa (+6281212855640), boleh minta video walkthrough atau foto detail villa terbaru?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#2D5A43] hover:bg-[#234735] text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all text-center shrink-0 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat via WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Sheet Fullscreen Modal */}
      {isSheetModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-md flex flex-col p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 max-w-7xl w-full mx-auto">
            <div>
              <span className="text-white/60 text-xs font-mono block">Sheet File: {selectedSheet.fileName}</span>
              <h3 className="text-white font-serif italic text-xl font-bold">{selectedSheet.title}</h3>
            </div>
            <button
              onClick={() => setIsSheetModalOpen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center p-2 sm:p-4 overflow-auto">
            <img
              src={selectedSheet.url}
              alt={selectedSheet.title}
              className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Lightbox Modal for Photo Cards */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl w-full max-h-[90vh] bg-[#FDFBF7] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[#E6E2D3]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-3/5 bg-black relative flex items-center justify-center">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-h-[55vh] md:max-h-[80vh] w-full object-contain"
              />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#FDFBF7]/95 backdrop-blur-md border border-[#E6E2D3] text-[#3D3A35] text-xs font-bold shadow-md">
                {selectedPhoto.captionId}
              </div>
            </div>

            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#FDFBF7] overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#EAE5D9] text-[#3D3A35] font-bold text-xs">
                    {selectedPhoto.tag}
                  </span>
                  <span className="text-[#5C584A] text-xs font-mono font-bold">
                    Sheet: {selectedPhoto.sheetSource}.png
                  </span>
                </div>
                <h3 className="font-serif italic text-2xl font-bold text-[#3D3A35] mt-1">
                  {selectedPhoto.title}
                </h3>
                <p className="text-[#5C584A] text-sm leading-relaxed mt-3">
                  {selectedPhoto.subtitle}
                </p>

                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-[#3D3A35] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#2D5A43]" />
                    <span>Included for all reserved private guests</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#3D3A35] font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#2D5A43]" />
                    <span>Cleaned, sanitized, and prepared before check-in</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E6E2D3]">
                <a
                  href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent(`Halo Royal Hill Villa (+6281212855640), saya tertarik dengan foto ${selectedPhoto.captionId} (${selectedPhoto.title}) dan ingin menanyakan info booking.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#2D5A43] hover:bg-[#234735] text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Inquire about this on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
