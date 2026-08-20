import React, { useState } from 'react';
import { HIGH_RES_PHOTOS, VILLA_WHATSAPP_CLEAN, VILLA_WHATSAPP_DISPLAY } from '../data/villaData';
import { VillaPhoto } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, MessageCircle, Sparkles, Eye, Layers, CheckCircle2, ShieldCheck, Flame, Waves, Trophy, BedDouble, Bath } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'rooms' | 'bathrooms' | 'bbq' | 'outdoor' | 'sports_kids'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<VillaPhoto | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const categories = [
    { id: 'all', label: 'All Photos', count: HIGH_RES_PHOTOS.length, icon: Sparkles },
    { id: 'rooms', label: 'Suites & Rooms (Kamar 1–4, Meja Kerja & Rias)', count: HIGH_RES_PHOTOS.filter(p => p.category === 'rooms').length, icon: BedDouble },
    { id: 'bathrooms', label: 'Bathrooms & Safety (Kamar Mandi 1–4, Toilet Tamu)', count: HIGH_RES_PHOTOS.filter(p => p.category === 'bathrooms').length, icon: Bath },
    { id: 'bbq', label: 'BBQ & Al-Fresco Dining', count: HIGH_RES_PHOTOS.filter(p => p.category === 'bbq').length, icon: Flame },
    { id: 'outdoor', label: 'Pool, Billiard & Fire Pit (Pendopo, Gazebo)', count: HIGH_RES_PHOTOS.filter(p => p.category === 'outdoor').length, icon: Waves },
    { id: 'sports_kids', label: 'Kids Playground & Sports Courts', count: HIGH_RES_PHOTOS.filter(p => p.category === 'sports_kids').length, icon: Trophy },
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAE5D9] border border-[#D4CEC1] text-[#5C584A] text-xs font-bold uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5" /> Authentic Villa Photo Gallery & Captions
          </div>
          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3D3A35] mb-4">
            Visual Guide to Every Corner
          </h2>
          <p className="text-[#5C584A] text-base sm:text-lg leading-relaxed">
            Explore 28 curated photographic points showcasing our 4 Master Suites, private en-suite bathrooms, BBQ stations, outdoor pool & billiard table, kids playground, and sports facilities.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
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
              {/* Photo Canvas */}
              <div className="aspect-[16/10] overflow-hidden relative bg-[#EAE5D9]">
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading={index < 6 ? 'eager' : 'lazy'}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D3A35]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Photo Authentic Caption Badge */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-[#FDFBF7]/95 backdrop-blur-md border border-[#E6E2D3] text-[#3D3A35] text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#2D5A43]" />
                  <span>{photo.captionId}</span>
                </div>

                {/* Key Spec Badge */}
                {photo.badge && (
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-[#2E2B27]/80 backdrop-blur-sm text-[#FDFBF7] text-[11px] font-medium">
                    {photo.badge}
                  </div>
                )}

                <div className="absolute top-3 right-3 p-2 rounded-full bg-[#FDFBF7]/90 backdrop-blur-md text-[#3D3A35] group-hover:bg-[#5C584A] group-hover:text-white transition-colors shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 bg-[#FDFBF7] border-t border-[#E6E2D3] flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7D7768]">
                      {photo.tag}
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
                    Included in Villa Rental
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#EAE5D9] group-hover:bg-[#5C584A] flex items-center justify-center text-[#5C584A] group-hover:text-white transition-colors shrink-0">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Bottom WhatsApp CTA Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#EAE5D9]/70 border border-[#D4CEC1] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2D5A43] flex items-center justify-center text-white shrink-0 shadow-md">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[#3D3A35] font-bold text-base sm:text-lg">
                Have questions about specific room setups or BBQ facilities?
              </h4>
              <p className="text-[#5C584A] text-xs sm:text-sm mt-0.5">
                Contact our villa manager via WhatsApp at <strong className="text-[#3D3A35] font-bold">{VILLA_WHATSAPP_DISPLAY}</strong> for live video tours and instant confirmation.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent('Halo Royal Hill Villa (+6281212855640), saya tertarik dengan fasilitas kamar, BBQ, dan olahraga di villa. Mohon info ketersediaan tanggal.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-[#5C584A] hover:bg-[#4A473C] text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 whitespace-nowrap shadow-md transition-all hover:scale-105 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat Host on WhatsApp</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-[#2E2B27]/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200">
          
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between border-b border-[#E6E2D3]/30 pb-4 max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#FDFBF7] text-[#3D3A35] text-xs font-bold tracking-wide shadow-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#2D5A43]" />
                {selectedPhoto.captionId}
              </span>
              <span className="text-[#EAE5D9] text-xs sm:text-sm font-mono">
                {lightboxIndex + 1} of {filteredPhotos.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent(`Halo Royal Hill Villa (+6281212855640), saya ingin tanya detail fasilitas untuk foto: *${selectedPhoto.captionId} - ${selectedPhoto.title}*.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-[#2D5A43] hover:bg-[#234735] text-white text-xs font-bold uppercase tracking-wider shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                Inquire This Area
              </a>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-2 rounded-full bg-[#FDFBF7]/90 hover:bg-[#FDFBF7] text-[#3D3A35] transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Image & Arrows */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden max-w-7xl mx-auto w-full">
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-[#FDFBF7]/90 hover:bg-[#FDFBF7] text-[#3D3A35] shadow-lg transition-all"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-h-[72vh] max-w-full flex items-center justify-center">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[72vh] max-w-full object-contain rounded-2xl shadow-2xl border border-[#E6E2D3]/40"
              />
            </div>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-[#FDFBF7]/90 hover:bg-[#FDFBF7] text-[#3D3A35] shadow-lg transition-all"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Caption & Direct Inquire Action */}
          <div className="max-w-4xl mx-auto w-full bg-[#FDFBF7] border border-[#E6E2D3] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded bg-[#EAE5D9] text-[#3D3A35] font-bold text-xs">
                  {selectedPhoto.captionId}
                </span>
                <span className="text-xs text-[#7D7768] font-medium">
                  {selectedPhoto.tag}
                </span>
              </div>
              <h3 className="text-[#3D3A35] font-serif italic font-bold text-base sm:text-lg">
                {selectedPhoto.title}
              </h3>
              <p className="text-[#5C584A] text-xs sm:text-sm mt-0.5">
                {selectedPhoto.subtitle}
              </p>
            </div>
            
            <a
              href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent(`Halo Admin Royal Hill Villa (+6281212855640), saya ingin tanya ketersediaan villa (Foto: ${selectedPhoto.captionId} - ${selectedPhoto.title}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#5C584A] hover:bg-[#4A473C] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 whitespace-nowrap shadow-md shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>

        </div>
      )}
    </section>
  );
};
