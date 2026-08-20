export interface VillaPhoto {
  id: string;
  url: string;
  title: string;
  captionId: string; // Indonesian caption as seen on the actual photo
  subtitle: string;
  category: 'all' | 'rooms' | 'bathrooms' | 'bbq' | 'outdoor' | 'sports_kids';
  tag?: string;
  badge?: string;
  featured?: boolean;
  aspectRatio?: 'landscape' | 'portrait' | 'wide' | 'square';
  sheetSource?: 'rooms' | 'bathrooms' | 'ammenities' | 'ammenities 2' | 'ammenities 3' | 'ammenities 4';
}

export interface VillaSuite {
  id: string;
  name: string;
  captionId: string;
  type: string;
  capacity: string;
  bed: string;
  size: string;
  view: string;
  description: string;
  features: string[];
  imageUrl: string;
  bathroomImageUrl?: string;
  galleryUrls: string[];
}

export interface AmenityCategory {
  category: string;
  captionId?: string;
  iconName: string;
  sheetSource?: string;
  items: {
    name: string;
    captionId?: string;
    description: string;
    highlight?: boolean;
    equipment?: string;
  }[];
}

export interface BookingInquiry {
  checkIn: string;
  checkOut: string;
  guests: number;
  eventType: string;
  addOns: string[];
  guestName: string;
  guestPhone: string;
  notes: string;
}

export interface AttractionItem {
  name: string;
  distance: string;
  travelTime: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  guestName: string;
  origin: string;
  stayType: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

