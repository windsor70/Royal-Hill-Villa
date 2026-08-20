import React from 'react';
import { AMENITY_CATEGORIES, VILLA_WHATSAPP_CLEAN, VILLA_WHATSAPP_DISPLAY } from '../data/villaData';
import { Waves, Flame, Trophy, Smile, ShieldCheck, Sparkles, CheckCircle2, MessageCircle, Utensils, Check } from 'lucide-react';

export const AmenitiesSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#5C584A]" />;
      case 'Waves':
        return <Waves className="w-5 h-5 text-[#5C584A]" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-[#5C584A]" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-[#5C584A]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#2D5A43]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#5C584A]" />;
    }
  };

  return (
    <section id="amenities" className="py-24 bg-[#FDFBF7] border-b border-[#E6E2D3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAE5D9] border border-[#D4CEC1] text-[#5C584A] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Full Equipment & Facility Breakdown
          </div>
          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3D3A35] mb-4">
            Complete In-Villa Amenities
          </h2>
          <p className="text-[#5C584A] text-base sm:text-lg leading-relaxed">
            Every item labeled in our villa inventory is provided complimentary during your stay — from charcoal & gas BBQ grills to outdoor billiards, table tennis, kids climbing tower, and accessible bathroom facilities.
          </p>
        </div>

        {/* 3 Top Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Highlight 1: Complete BBQ & Shabu */}
          <div className="relative rounded-3xl overflow-hidden bg-[#EAE5D9]/70 border border-[#D4CEC1] p-7 flex flex-col justify-between group hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#FDFBF7] border border-[#E6E2D3] flex items-center justify-center shadow-sm">
                <Flame className="w-6 h-6 text-[#5C584A]" />
              </div>
              <span className="px-3 py-1 rounded-full bg-[#FDFBF7] text-[#5C584A] border border-[#E6E2D3] text-xs font-bold uppercase tracking-wider shadow-sm">
                Charcoal + Gas + Korean BBQ
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7D7768] block mb-1">
                Area Barbeque & Peralatan
              </span>
              <h3 className="font-serif italic text-xl font-bold text-[#3D3A35] mb-2">
                All-in-One Grilling Station
              </h3>
              <p className="text-[#5C584A] text-xs sm:text-sm leading-relaxed">
                20-seat solid wood banquet terrace table, standalone charcoal drum smoker, 2-burner gas grill, and portable Korean BBQ / Shabu-Shabu hotpot cookers.
              </p>
            </div>
          </div>

          {/* Highlight 2: Outdoor Billiard & Pool */}
          <div className="relative rounded-3xl overflow-hidden bg-[#EAE5D9]/70 border border-[#D4CEC1] p-7 flex flex-col justify-between group hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#FDFBF7] border border-[#E6E2D3] flex items-center justify-center shadow-sm">
                <Waves className="w-6 h-6 text-[#5C584A]" />
              </div>
              <span className="px-3 py-1 rounded-full bg-[#FDFBF7] text-[#5C584A] border border-[#E6E2D3] text-xs font-bold uppercase tracking-wider shadow-sm">
                Royal Blue Felt Table
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7D7768] block mb-1">
                Kolam Renang & Meja Billiard
              </span>
              <h3 className="font-serif italic text-xl font-bold text-[#3D3A35] mb-2">
                Highland Outdoor Lounge
              </h3>
              <p className="text-[#5C584A] text-xs sm:text-sm leading-relaxed">
                Enjoy pool matches on the open-air terrace overlooking mountain ridges, take a dip in the private pool, and relax around the evening garden bonfire.
              </p>
            </div>
          </div>

          {/* Highlight 3: Kids Playground & Multi-Sports */}
          <div className="relative rounded-3xl overflow-hidden bg-[#EAE5D9]/70 border border-[#D4CEC1] p-7 flex flex-col justify-between group hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#FDFBF7] border border-[#E6E2D3] flex items-center justify-center shadow-sm">
                <Trophy className="w-6 h-6 text-[#2D5A43]" />
              </div>
              <span className="px-3 py-1 rounded-full bg-[#2D5A43] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                Active Fun for All Ages
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7D7768] block mb-1">
                Playground, Pingpong, Basket & Voli
              </span>
              <h3 className="font-serif italic text-xl font-bold text-[#3D3A35] mb-2">
                Sports & Family Play
              </h3>
              <p className="text-[#5C584A] text-xs sm:text-sm leading-relaxed">
                Nextsist 22 ping pong with ball net chute, tire climbing tower, multi-slide children playhouse, circular flower swing, basketball court, and lawn volleyball.
              </p>
            </div>
          </div>

        </div>

        {/* Detailed Amenity Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {AMENITY_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className={`bg-[#FDFBF7] border border-[#E6E2D3] rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-5 pb-3.5 border-b border-[#E6E2D3]">
                  <div className="p-2 rounded-xl bg-[#EAE5D9] border border-[#D4CEC1]">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="font-serif italic text-lg font-bold text-[#3D3A35]">
                      {cat.category}
                    </h3>
                    <span className="text-[10px] text-[#7D7768] font-mono block">
                      {cat.sheetSource}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#2D5A43]" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-1.5 flex-wrap">
                          <h4 className="text-xs sm:text-sm font-bold text-[#3D3A35]">
                            {item.name}
                          </h4>
                          {item.captionId && (
                            <span className="px-2 py-0.5 rounded text-[10px] bg-[#EAE5D9] text-[#5C584A] font-medium">
                              {item.captionId}
                            </span>
                          )}
                        </div>
                        <p className="text-[#5C584A] text-xs leading-relaxed mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E6E2D3]/60 flex items-center justify-between text-xs text-[#5C584A]">
                <span className="flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#2D5A43]" />
                  100% Free to Use
                </span>
                <a
                  href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent(`Halo Royal Hill Villa (+6281212855640), saya ingin tanya fasilitas: ${cat.category}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2D5A43] hover:underline font-bold text-[11px] uppercase tracking-wider"
                >
                  Ask Details
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Quick Question on Amenities via WhatsApp */}
        <div className="mt-14 text-center">
          <p className="text-[#5C584A] text-sm mb-3">
            Have a special setup request like sound system rental, catering, or event decor?
          </p>
          <a
            href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent('Halo Royal Hill Villa (+6281212855640), saya ingin menanyakan request fasilitas khusus untuk acara kami.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#2D5A43] hover:text-[#1e3d2d] font-bold text-xs uppercase tracking-widest underline underline-offset-4"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire custom arrangements on WhatsApp: {VILLA_WHATSAPP_DISPLAY}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
