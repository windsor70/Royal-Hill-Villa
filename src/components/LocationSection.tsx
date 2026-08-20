import React from 'react';
import { SURROUNDING_ATTRACTIONS, VILLA_LOCATION, VILLA_ALTITUDE, VILLA_WHATSAPP_CLEAN, VILLA_WHATSAPP_DISPLAY } from '../data/villaData';
import { MapPin, Navigation, Sparkles, CloudSun, Clock, Compass, Car, MessageCircle, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#FDFBF7] border-b border-[#E6E2D3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAE5D9] border border-[#D4CEC1] text-[#5C584A] text-xs font-bold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" /> Prime Puncak Highland Location
          </div>
          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3D3A35] mb-4">
            Highland Tranquility, Easy Access
          </h2>
          <p className="text-[#5C584A] text-base sm:text-lg leading-relaxed">
            Nestled at an invigorating altitude of 1,120 meters above sea level in Tugu Selatan, Cisarua, Royal Hill Villa provides crisp mountain breezes (18°C – 23°C) and quick access to top Puncak attractions.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left: Interactive Info Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#FDFBF7] border border-[#E6E2D3] rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#5C584A] font-bold">
                  Estate Address
                </span>
                <h3 className="text-lg sm:text-xl font-serif italic font-bold text-[#3D3A35] leading-snug">
                  {VILLA_LOCATION}
                </h3>
                <p className="text-[#5C584A] text-xs sm:text-sm">
                  Cisarua Highland Ridge, overlooking Mount Gede-Pangrango National Park valley.
                </p>
              </div>

              {/* Climate & Altitude Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#EAE5D9]/50 border border-[#D4CEC1]">
                  <div className="flex items-center gap-2 text-[#5C584A] text-xs font-bold uppercase tracking-wider mb-1">
                    <CloudSun className="w-4 h-4" /> Climate
                  </div>
                  <p className="text-[#3D3A35] font-bold text-base sm:text-lg">18°C - 23°C</p>
                  <p className="text-[#7D7768] text-xs mt-0.5">Crisp, fresh mountain air</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#EAE5D9]/50 border border-[#D4CEC1]">
                  <div className="flex items-center gap-2 text-[#5C584A] text-xs font-bold uppercase tracking-wider mb-1">
                    <Compass className="w-4 h-4" /> Elevation
                  </div>
                  <p className="text-[#3D3A35] font-bold text-base sm:text-lg">1,120 MASL</p>
                  <p className="text-[#7D7768] text-xs mt-0.5">High altitude serenity</p>
                </div>
              </div>

              {/* Driving distance from Jakarta */}
              <div className="p-4 rounded-2xl bg-[#EAE5D9]/60 border border-[#D4CEC1] flex items-start gap-3">
                <Car className="w-5 h-5 text-[#5C584A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#3D3A35] font-bold text-sm">
                    Approx. 90 mins from Jakarta
                  </h4>
                  <p className="text-[#5C584A] text-xs mt-0.5 leading-relaxed">
                    Via Jagorawi Toll Road & Exit Ciawi/Gadog. Our villa concierge provides real-time traffic updates and odd-even schedule advice via WhatsApp.
                  </p>
                </div>
              </div>

              {/* Map & WhatsApp Navigation Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=Puncak+Cisarua+Bogor+Indonesia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-4 rounded-full bg-[#EAE5D9] hover:bg-[#D4CEC1] border border-[#D4CEC1] text-[#3D3A35] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#5C584A]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#5C584A]" />
                </a>

                <a
                  href={`https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent('Halo Royal Hill Villa, boleh minta share location / rute terbaik menuju villa?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-4 rounded-full bg-[#2D5A43] hover:bg-[#234735] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Request Live ShareLoc</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right: Map Graphic / Scenic Visual */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-[#E6E2D3] bg-[#EAE5D9] shadow-sm group">
            <div className="aspect-[4/3] relative">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                alt="Puncak Highland Landscape"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D3A35]/80 via-transparent to-transparent opacity-60" />

              {/* Pin Marker on Map View */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl bg-[#FDFBF7]/90 backdrop-blur-md border border-[#E6E2D3] shadow-lg text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#5C584A] flex items-center justify-center text-white font-bold mb-2 shadow-md animate-bounce">
                  <MapPin className="w-5 h-5 fill-current" />
                </div>
                <p className="font-serif italic font-bold text-[#3D3A35] text-sm">ROYAL HILL VILLA</p>
                <p className="text-[11px] text-[#5C584A] font-bold uppercase tracking-wider">Tugu Selatan • Puncak</p>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-[#FDFBF7]/90 backdrop-blur-md border border-[#E6E2D3] rounded-2xl p-3 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2D5A43] animate-pulse" />
                  <span className="text-xs text-[#3D3A35] font-bold">Safe Private Highland Access Road</span>
                </div>
                <span className="text-xs text-[#5C584A] font-bold">8-Car Gated Parking</span>
              </div>
            </div>
          </div>

        </div>

        {/* Nearby Attractions Carousel/Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-serif italic text-2xl font-bold text-[#3D3A35]">
                Nearby Puncak Destinations
              </h3>
              <p className="text-[#5C584A] text-xs sm:text-sm mt-1">
                Explore famous tea estates, wildlife safari, and highland cafes all within 8 to 20 minutes from the villa.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SURROUNDING_ATTRACTIONS.map((attraction, index) => (
              <div
                key={index}
                className="bg-[#FDFBF7] rounded-3xl overflow-hidden border border-[#E6E2D3] hover:shadow-md transition-all duration-300 group shadow-sm"
              >
                <div className="aspect-[16/10] overflow-hidden relative bg-[#EAE5D9]">
                  <img
                    src={attraction.imageUrl}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 px-3 py-1 rounded-full bg-[#FDFBF7]/90 backdrop-blur-md border border-[#E6E2D3] text-[#5C584A] text-[11px] font-bold flex items-center gap-1 shadow-sm">
                    <Clock className="w-3 h-3 text-[#5C584A]" />
                    {attraction.travelTime}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#5C584A] block">
                    {attraction.category} • {attraction.distance}
                  </span>
                  <h4 className="text-[#3D3A35] font-bold text-sm line-clamp-1 group-hover:text-[#5C584A] transition-colors">
                    {attraction.name}
                  </h4>
                  <p className="text-[#7D7768] text-xs line-clamp-2 leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
