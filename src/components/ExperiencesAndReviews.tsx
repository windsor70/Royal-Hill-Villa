import React from 'react';
import { GUEST_TESTIMONIALS, VILLA_WHATSAPP_CLEAN, VILLA_WHATSAPP_DISPLAY } from '../data/villaData';
import { Star, Sparkles, MessageCircle, Heart, Quote, CheckCircle, Flame, Coffee, Film, Compass } from 'lucide-react';

export const ExperiencesAndReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#FDFBF7] border-b border-[#E6E2D3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAE5D9] border border-[#D4CEC1] text-[#5C584A] text-xs font-bold uppercase tracking-widest mb-3">
            <Star className="w-3.5 h-3.5 fill-[#5C584A] text-[#5C584A]" /> Guest Stories & Signature Moments
          </div>
          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3D3A35] mb-4">
            Loved by Families & Retreat Groups
          </h2>
          <p className="text-[#5C584A] text-base sm:text-lg leading-relaxed">
            Rated <span className="text-[#3D3A35] font-bold">4.98 out of 5</span> by over 120+ private stays across Jakarta, Bandung, and international travelers.
          </p>
        </div>

        {/* 4 Signature Villa Experiences Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="p-7 rounded-3xl bg-[#FDFBF7] border border-[#E6E2D3] hover:shadow-md transition-all space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#EAE5D9] border border-[#D4CEC1] flex items-center justify-center text-[#5C584A]">
              <Coffee className="w-5 h-5" />
            </div>
            <h4 className="font-serif italic font-bold text-[#3D3A35] text-lg">
              Poolside Breakfast & Coffee
            </h4>
            <p className="text-[#5C584A] text-xs leading-relaxed">
              Relax by our sparkling swimming pool while savoring fresh tropical fruits, bakery croissants, and mountain-brewed coffee.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#FDFBF7] border border-[#E6E2D3] hover:shadow-md transition-all space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#EAE5D9] border border-[#D4CEC1] flex items-center justify-center text-[#5C584A]">
              <Flame className="w-5 h-5" />
            </div>
            <h4 className="font-serif italic font-bold text-[#3D3A35] text-lg">
              Sunken Bonfire & S'mores
            </h4>
            <p className="text-[#5C584A] text-xs leading-relaxed">
              Gather around the warm stone fire pit under the crystal clear Puncak night sky with complimentary firewood and marshmallow skewers.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#FDFBF7] border border-[#E6E2D3] hover:shadow-md transition-all space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#EAE5D9] border border-[#D4CEC1] flex items-center justify-center text-[#5C584A]">
              <Film className="w-5 h-5" />
            </div>
            <h4 className="font-serif italic font-bold text-[#3D3A35] text-lg">
              Smart TV & Karaoke Lounge
            </h4>
            <p className="text-[#5C584A] text-xs leading-relaxed">
              Sing your heart out with your favorite tracks or stream movies and shows on the Smart TV with crisp audio.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#FDFBF7] border border-[#E6E2D3] hover:shadow-md transition-all space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#EAE5D9] border border-[#D4CEC1] flex items-center justify-center text-[#5C584A]">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-serif italic font-bold text-[#3D3A35] text-lg">
              Morning Tea Valley Walk
            </h4>
            <p className="text-[#5C584A] text-xs leading-relaxed">
              Wake up to crisp 18°C fresh mountain air and enjoy guided strolls along the lush green tea plantation trails behind the villa.
            </p>
          </div>

        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {GUEST_TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FDFBF7] border border-[#E6E2D3] rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-all"
            >
              <Quote className="w-10 h-10 text-[#D4CEC1] absolute top-6 right-6" />

              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#5C584A] text-[#5C584A]" />
                  ))}
                </div>

                <p className="text-[#3D3A35] text-xs sm:text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E6E2D3] flex items-center justify-between">
                <div>
                  <h4 className="text-[#3D3A35] font-bold text-sm flex items-center gap-1.5">
                    {review.guestName}
                    {review.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-[#2D5A43]" />
                    )}
                  </h4>
                  <p className="text-[11px] text-[#7D7768]">
                    {review.origin} • <span className="text-[#5C584A] font-bold">{review.stayType}</span>
                  </p>
                </div>
                <span className="text-[10px] text-[#7D7768] font-mono">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct WhatsApp Concierge Prompt */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#EAE5D9]/70 border border-[#D4CEC1] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#5C584A] font-bold">
              Personalized Hospitality
            </span>
            <h3 className="font-serif italic text-2xl font-bold text-[#3D3A35] mt-1">
              Need a Custom Setup for Your Gathering?
            </h3>
            <p className="text-[#5C584A] text-sm max-w-xl mt-1 leading-relaxed">
              Our reservation manager is ready on WhatsApp to assist with birthday cakes, in-villa acoustic musicians, custom Sundanese menus, or corporate gathering setups.
            </p>
          </div>

          <a
            href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent('Halo Royal Hill Villa, kami berencana mengadakan acara gathering keluarga / kantor dan ingin konsultasi setup acara.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-[#2D5A43] hover:bg-[#234735] text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2.5 whitespace-nowrap shadow-md transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consult via WhatsApp: {VILLA_WHATSAPP_DISPLAY}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
