import { VillaPhoto, VillaSuite, AmenityCategory, AttractionItem, Testimonial, BookingInquiry } from '../types';

export const VILLA_WHATSAPP_RAW = '+6281212855640';
export const VILLA_WHATSAPP_CLEAN = '6281212855640';
export const VILLA_WHATSAPP_DISPLAY = '+62 812-1285-5640';
export const VILLA_LOCATION = 'Jl. Raya Puncak KM 84, Tugu Selatan, Cisarua, Bogor, Jawa Barat 16750, Indonesia';
export const VILLA_ALTITUDE = '1,120 MASL (Cool 18°C - 23°C)';

export interface VillaPhotoSheet {
  id: string;
  title: string;
  subtitle: string;
  fileName: string;
  url: string;
  category: 'rooms' | 'bathrooms' | 'bbq' | 'sports_kids' | 'outdoor';
  itemCount: number;
  labels: string[];
  description: string;
}

export const AUTHENTIC_SHEETS: VillaPhotoSheet[] = [
  {
    id: 'sheet-rooms',
    title: 'Rooms & Master Suites',
    subtitle: 'Kamar 1, Kamar 2, Kamar 3, Kamar 4, Meja Rias, Meja Kerja',
    fileName: 'rooms.png',
    url: '/rooms.png',
    category: 'rooms',
    itemCount: 6,
    labels: ['Kamar 1', 'Kamar 2', 'Kamar 3', 'Kamar 4', 'Meja Rias', 'Meja Kerja'],
    description: 'Complete breakdown of all 4 master bedrooms including king & queen setups, dressing tables, and TV workstations.'
  },
  {
    id: 'sheet-bathrooms',
    title: 'Bathrooms & Hygiene Care',
    subtitle: 'Kamar Mandi 1-4, Toilet Tamu, Kursi Lipat Mandi, Rak & Jet Shower',
    fileName: 'bathrooms.png',
    url: '/bathrooms.png',
    category: 'bathrooms',
    itemCount: 7,
    labels: ['Kamar Mandi Kamar 1', 'Kamar Mandi Kamar 2', 'Toilet Tamu', 'Kamar Mandi Kamar 3', 'Kamar Mandi Kamar 4', 'Kursi Lipat Mandi', 'Rak & Jet Shower'],
    description: 'En-suite bathrooms for all bedrooms, guest powder room, elderly accessible folding shower seat, and bidet jet showers.'
  },
  {
    id: 'sheet-ammenities-1',
    title: 'BBQ & Al-Fresco Dining Terrace',
    subtitle: 'Area Barbeque, Alat Pemanggang Arang, Alat Pemanggang Gas, Peralatan BBQ',
    fileName: 'ammenities.png',
    url: '/ammenities.png',
    category: 'bbq',
    itemCount: 4,
    labels: ['Area Barbeque', 'Alat Pemanggang Arang', 'Alat Pemanggang Gas', 'Peralatan BBQ'],
    description: '20-seat banquet dining table, charcoal smoker barrel, dual-burner stainless gas grill, and Korean BBQ & shabu-shabu kit.'
  },
  {
    id: 'sheet-ammenities-2',
    title: 'Kids Playground & Fun Zones',
    subtitle: 'Play Ground, Playhouse, Ayunan, Mini Basket',
    fileName: 'ammenities 2.png',
    url: '/ammenities 2.png',
    category: 'sports_kids',
    itemCount: 4,
    labels: ['Play Ground', 'Playhouse', 'Ayunan', 'Mini Basket'],
    description: 'Multi-color tire climbing tower, dual-slide playhouse with rubber safety mats, floral hoop swing, and toddler basketball.'
  },
  {
    id: 'sheet-ammenities-3',
    title: 'Sports & Recreational Games',
    subtitle: 'Meja Pingpong, Jaring Bola, Basketball, Volleyball, Badminton',
    fileName: 'ammenities 3.png',
    url: '/ammenities 3.png',
    category: 'sports_kids',
    itemCount: 5,
    labels: ['Meja Pingpong', 'Jaring Penangkap Bola Pingpong', 'Basketball', 'Volleyball', 'Badminton'],
    description: 'Nextsist 22 competition table tennis with return net, basketball court, lawn volleyball net, and badminton sets.'
  },
  {
    id: 'sheet-ammenities-4',
    title: 'Outdoor Leisure, Pool & Lounges',
    subtitle: 'Kolam Renang, Meja Billiard, Area Api Unggun, Pendopo, Gazebo',
    fileName: 'ammenities 4.png',
    url: '/ammenities 4.png',
    category: 'outdoor',
    itemCount: 5,
    labels: ['Kolam Renang', 'Meja Billiard', 'Area Api Unggun', 'Pendopo', 'Gazebo'],
    description: 'Private infinity swimming pool, royal blue terrace billiard table, sunken lawn fire pit, signature wooden pendopo, and gazebo.'
  }
];

/**
 * 28 Authentic Photo Points corresponding directly to the folder images:
 * Sheet 1: ammenities.png (Area Barbeque, Alat Pemanggang Arang, Alat Pemanggang Gas, Peralatan BBQ)
 * Sheet 2: ammenities 2.png (Play Ground, Playhouse, Ayunan, Mini Basket)
 * Sheet 3: ammenities 3.png (Meja Pingpong, Jaring Penangkap Bola Pingpong, Basketball, Volleyball, Badminton)
 * Sheet 4: ammenities 4.png (Kolam Renang, Meja Billiard, Area Api Unggun, Pendopo, Gazebo)
 * Sheet 5: bathrooms.png (Kamar Mandi Kamar 1, 2, 3, 4, Toilet Tamu, Kursi Lipat Mandi, Rak & Jet Shower)
 * Sheet 6: rooms.png (Kamar 1, Kamar 2, Kamar 3, Kamar 4, Meja Rias, Meja Kerja)
 */
export const HIGH_RES_PHOTOS: VillaPhoto[] = [
  // --- ROOMS & SUITES ---
  {
    id: 'room-kamar-1',
    captionId: 'Kamar 1',
    title: 'Master Family Suite 1 (Poolside Triple Bed)',
    subtitle: '1 King Bed + 2 Twin Beds with luxury gold & white marble wall, ambient cove lighting, and sliding glass doors opening directly to the private pool terrace.',
    category: 'rooms',
    tag: 'Kamar 1 • Ground Floor',
    badge: '3 Beds • Pool View',
    featured: true,
    aspectRatio: 'landscape',
    sheetSource: 'rooms',
    url: '/photos/kamar 1.png'
  },
  {
    id: 'room-kamar-2',
    captionId: 'Kamar 2',
    title: 'Deluxe Executive Bedroom 2',
    subtitle: 'King-size luxury bed + extra single bed, dramatic dark grey & liquid gold abstract mural, floor-to-ceiling sheer drapes, and dedicated workstation.',
    category: 'rooms',
    tag: 'Kamar 2 • Deluxe',
    badge: 'King Bed + Work Desk',
    featured: true,
    aspectRatio: 'landscape',
    sheetSource: 'rooms',
    url: '/photos/kamar 2.png'
  },
  {
    id: 'room-kamar-3',
    captionId: 'Kamar 3',
    title: 'Mountain Panorama Suite 3',
    subtitle: 'Queen bed with grey vertical padded headboard, elegant gold-veined marble wall, and private terrace balcony overlooking emerald Puncak hills.',
    category: 'rooms',
    tag: 'Kamar 3 • Balcony Vista',
    badge: 'Highland Mountain Vista',
    featured: true,
    aspectRatio: 'landscape',
    sheetSource: 'rooms',
    url: '/photos/kamar 3.png'
  },
  {
    id: 'room-kamar-4',
    captionId: 'Kamar 4',
    title: 'Grand Double Suite 4',
    subtitle: '2 Queen beds accommodating 4 guests, dark gold art wall mural, cozy loveseat armchair lounge, and expansive natural daylight.',
    category: 'rooms',
    tag: 'Kamar 4 • 2 Queen Beds',
    badge: '2 Queen Beds + Sofa',
    featured: true,
    aspectRatio: 'landscape',
    sheetSource: 'rooms',
    url: '/photos/kamar 4.png'
  },
  {
    id: 'room-meja-rias',
    captionId: 'Meja Rias',
    title: 'Integrated Vanity & Dressing Station',
    subtitle: 'Custom timber vanity table with LED backlit cosmetic mirrors, built-in wardrobes, and scenic mountain reflections.',
    category: 'rooms',
    tag: 'Meja Rias • Vanity Station',
    badge: 'LED Backlit Mirrors',
    featured: false,
    aspectRatio: 'portrait',
    sheetSource: 'rooms',
    url: '/photos/meja rias.png'
  },
  {
    id: 'room-meja-kerja',
    captionId: 'Meja Kerja',
    title: 'Executive Workstation & Media Panel',
    subtitle: 'Warm wood acoustic wall paneling with wall-mounted Flat Screen TV, long floating desk, and ergonomic executive swivel chair for workations.',
    category: 'rooms',
    tag: 'Meja Kerja • Workstation',
    badge: 'Ergonomic Desk + TV',
    featured: false,
    aspectRatio: 'landscape',
    sheetSource: 'rooms',
    url: '/photos/meja kerja.png'
  },

  // --- BATHROOMS & HYGIENE ---
  {
    id: 'bath-kamar-1',
    captionId: 'Kamar Mandi Kamar 1',
    title: 'En-suite Bathroom 1 (Suite 1)',
    subtitle: 'Wood-grain floating vanity with vessel sink, illuminated LED mirror, matte black rain shower, black-framed glass enclosure, and illuminated floral wall niche.',
    category: 'bathrooms',
    tag: 'En-suite Kamar 1',
    badge: 'Matte Black Rain Shower',
    featured: true,
    aspectRatio: 'portrait',
    sheetSource: 'bathrooms',
    url: '/photos/kamar mandi kamar 1.png'
  },
  {
    id: 'bath-kamar-2',
    captionId: 'Kamar Mandi Kamar 2',
    title: 'En-suite Bathroom 2 (Suite 2)',
    subtitle: 'Modern bathroom with black overhead rain shower, backlit mirror vanity, frosted glass partition, and natural highland ventilation window.',
    category: 'bathrooms',
    tag: 'En-suite Kamar 2',
    badge: 'Highland Ventilation',
    featured: false,
    aspectRatio: 'portrait',
    sheetSource: 'bathrooms',
    url: '/photos/kamar mandi kamar 2.png'
  },
  {
    id: 'bath-toilet-tamu',
    captionId: 'Toilet Tamu',
    title: 'Guest Powder Room (Toilet Tamu)',
    subtitle: 'Contemporary powder room with dark vertical fluted accent wall, illuminated recessed flower niche, modern commode, and framed botanical artwork.',
    category: 'bathrooms',
    tag: 'Toilet Tamu • Powder Room',
    badge: 'Fluted Accent Wall',
    featured: true,
    aspectRatio: 'portrait',
    sheetSource: 'bathrooms',
    url: '/photos/toilet tamu.png'
  },
  {
    id: 'bath-kamar-3',
    captionId: 'Kamar Mandi Kamar 3',
    title: 'En-suite Bathroom 3 (Suite 3)',
    subtitle: 'Large ensuite with warm grey porcelain tiles, floating wood cabinet, black-framed shower screen, and non-slip floor runner.',
    category: 'bathrooms',
    tag: 'En-suite Kamar 3',
    badge: 'Floating Wood Vanity',
    featured: false,
    aspectRatio: 'portrait',
    sheetSource: 'bathrooms',
    url: '/photos/kamar mandi kamar 3.png'
  },
  {
    id: 'bath-kamar-4',
    captionId: 'Kamar Mandi Kamar 4',
    title: 'Grand En-suite Bathroom 4 (Double Sinks)',
    subtitle: 'Spacious luxury master bath with dual vessel sinks on black quartz counter, wide horizontal LED backlit mirror, and clear glass walk-in shower.',
    category: 'bathrooms',
    tag: 'En-suite Kamar 4 • Double Sinks',
    badge: 'Double Vessel Sinks',
    featured: true,
    aspectRatio: 'portrait',
    sheetSource: 'bathrooms',
    url: '/photos/kamar mandi kamar 4.png'
  },
  {
    id: 'bath-kursi-lipat',
    captionId: 'Kursi Lipat Mandi',
    title: 'Accessible Foldable Shower Seat',
    subtitle: 'Wall-mounted heavy-duty foldable shower seat providing supreme safety and comfort for elderly family members and guests with mobility needs.',
    category: 'bathrooms',
    tag: 'Kursi Lipat Mandi • Safety',
    badge: 'Elderly Friendly & Safe',
    featured: false,
    aspectRatio: 'square',
    sheetSource: 'bathrooms',
    url: '/photos/kursi lipat mandi.png'
  },
  {
    id: 'bath-rak-jet-shower',
    captionId: 'Rak & Jet Shower',
    title: 'Modern Jet Shower & Matte Towel Rack',
    subtitle: 'High-pressure hygienic bidet jet spray, black stainless steel multi-bar towel rack, and recessed bathroom amenities ledge.',
    category: 'bathrooms',
    tag: 'Rak & Jet Shower • Details',
    badge: 'Stainless Towel Rack',
    featured: false,
    aspectRatio: 'square',
    sheetSource: 'bathrooms',
    url: '/photos/rak and jet shower.png'
  },

  // --- BBQ & CULINARY ---
  {
    id: 'bbq-area',
    captionId: 'Area Barbeque',
    title: 'Outdoor BBQ Dining Terrace & Sun Loungers',
    subtitle: 'Expansive covered al-fresco terrace with 20-person solid wood banquet dining table, white woven chairs, and poolside sun loungers framing the mountain view.',
    category: 'bbq',
    tag: 'Area Barbeque • Main Terrace',
    badge: '20-Seat Banquet Table',
    featured: true,
    aspectRatio: 'wide',
    sheetSource: 'ammenities',
    url: '/photos/area barbeque.png'
  },
  {
    id: 'bbq-pemanggang-arang',
    captionId: 'Alat Pemanggang Arang',
    title: 'Heavy-Duty Charcoal Barrel Grill',
    subtitle: 'Large standalone black steel charcoal BBQ smoker grill with adjustable height grates and lid for authentic smoky sate, ribs, and steaks.',
    category: 'bbq',
    tag: 'Alat Pemanggang Arang',
    badge: 'Charcoal Smoker Grill',
    featured: false,
    aspectRatio: 'square',
    sheetSource: 'ammenities',
    url: '/photos/alat pemanggang arang.png'
  },
  {
    id: 'bbq-pemanggang-gas',
    captionId: 'Alat Pemanggang Gas',
    title: 'Stainless Steel 2-Burner Gas Grill',
    subtitle: 'Modern wheeled outdoor gas grill with dual temperature control knobs, side stainless prep tables, and quick ignition for effortless grilling.',
    category: 'bbq',
    tag: 'Alat Pemanggang Gas',
    badge: 'Dual Burner Gas Grill',
    featured: false,
    aspectRatio: 'square',
    sheetSource: 'ammenities',
    url: '/photos/alat pemanggang gas.png'
  },
  {
    id: 'bbq-peralatan',
    captionId: 'Peralatan BBQ',
    title: 'Korean BBQ Griddle & Shabu-Shabu Hotpot Kit',
    subtitle: 'Portable gas stoves equipped with non-stick Korean BBQ grill plate, stainless hotpot soup pot with glass lid, tongs, spatulas, and skewer sets.',
    category: 'bbq',
    tag: 'Peralatan BBQ • Complete Set',
    badge: 'Korean BBQ + Shabu Pot',
    featured: true,
    aspectRatio: 'square',
    sheetSource: 'ammenities',
    url: '/photos/peralatan bbq.png'
  },

  // --- OUTDOOR LEISURE & SIGNATURE SPACES ---
  {
    id: 'outdoor-kolam-renang',
    captionId: 'Kolam Renang',
    title: 'Private Infinity Swimming Pool',
    subtitle: 'Crystal turquoise inground pool with stainless entry ladder, sun deck, and glass architecture overlooking lush Puncak mountain slopes.',
    category: 'outdoor',
    tag: 'Kolam Renang • Swimming Pool',
    badge: 'Crystal Blue Waters',
    featured: true,
    aspectRatio: 'portrait',
    sheetSource: 'ammenities 4',
    url: '/photos/kolam renang.png'
  },
  {
    id: 'outdoor-meja-billiard',
    captionId: 'Meja Billiard',
    title: 'Highland Outdoor Billiard Table',
    subtitle: 'Full-size slate pool table with vibrant royal blue felt, wooden cues, and balls on the paved open-air terrace with sweeping green tree and mountain views.',
    category: 'outdoor',
    tag: 'Meja Billiard • Terrace View',
    badge: 'Royal Blue 9ft Table',
    featured: true,
    aspectRatio: 'portrait',
    sheetSource: 'ammenities 4',
    url: '/photos/meja billard.png'
  },
  {
    id: 'outdoor-api-unggun',
    captionId: 'Area Api Unggun',
    title: 'Sunken Lawn Bonfire & Iron Garden Seating',
    subtitle: 'Central black metal fire pit surrounded by a circular arrangement of black iron garden benches and armchairs on the manicured lawn with the modern villa facade.',
    category: 'outdoor',
    tag: 'Area Api Unggun • Fire Pit',
    badge: 'Iron Garden Seating',
    featured: true,
    aspectRatio: 'portrait',
    sheetSource: 'ammenities 4',
    url: '/photos/area api unggun.png'
  },
  {
    id: 'outdoor-pendopo',
    captionId: 'Pendopo',
    title: 'Royal Hill Signature Pendopo Lounge',
    subtitle: 'Semi-outdoor wooden-clad hospitality lounge with "ROYAL HILL VILLA PUNCAK" carved wooden signature wall, two burgundy peacock rattan chairs, and plush sofa.',
    category: 'outdoor',
    tag: 'Pendopo • Signature Lounge',
    badge: 'Peacock Rattan Chairs',
    featured: true,
    aspectRatio: 'landscape',
    sheetSource: 'ammenities 4',
    url: '/photos/pendopo.png'
  },
  {
    id: 'outdoor-gazebo',
    captionId: 'Gazebo',
    title: 'Traditional Wooden Garden Gazebo (Saung)',
    subtitle: 'Serene wooden saung with bamboo roll-up blinds, bench seating, stone pathway steps, and vibrant garden flower beds against a natural stone retaining wall.',
    category: 'outdoor',
    tag: 'Gazebo • Garden Saung',
    badge: 'Bamboo Blinds + Stone Steps',
    featured: false,
    aspectRatio: 'landscape',
    sheetSource: 'ammenities 4',
    url: '/photos/gazebo.png'
  },

  // --- KIDS PLAYGROUND & SPORTS ---
  {
    id: 'kids-playground',
    captionId: 'Play Ground',
    title: 'Multi-Color Tire Climbing Tower',
    subtitle: 'Tall outdoor playground climbing structure crafted from red, yellow, blue, and green tires mounted on sturdy black steel pillars on the lawn.',
    category: 'sports_kids',
    tag: 'Play Ground • Climbing Tower',
    badge: 'Colorful Tire Tower',
    featured: true,
    aspectRatio: 'portrait',
    sheetSource: 'ammenities 2',
    url: '/photos/playground.png'
  },
  {
    id: 'kids-playhouse',
    captionId: 'Playhouse',
    title: 'Children Multi-Slide Activity Playhouse',
    subtitle: 'Vibrant kids play cottage with dual slides (blue wavy & green), lookout tower, red roof, crawl-through tunnel, and soft interlocking safety rubber floor mats.',
    category: 'sports_kids',
    tag: 'Playhouse • Kids Castle',
    badge: 'Dual Slide + Soft Mat',
    featured: true,
    aspectRatio: 'landscape',
    sheetSource: 'ammenities 2',
    url: '/photos/playhouse.png'
  },
  {
    id: 'kids-ayunan',
    captionId: 'Ayunan',
    title: 'Floral Decorated Circle Hoop Swing',
    subtitle: 'Romantic circular hoop swing adorned with colorful floral garlands, suspended on a heavy-duty black metal A-frame on the scenic green lawn.',
    category: 'sports_kids',
    tag: 'Ayunan • Flower Swing',
    badge: 'Floral Ring Swing',
    featured: false,
    aspectRatio: 'square',
    sheetSource: 'ammenities 2',
    url: '/photos/ayunan.png'
  },
  {
    id: 'kids-mini-basket',
    captionId: 'Mini Basket',
    title: 'Toddler Mini Basketball Hoop',
    subtitle: 'Freestanding blue metal toddler basketball hoop with white & red net on the lawn for fun family sports.',
    category: 'sports_kids',
    tag: 'Mini Basket • Kids Hoop',
    badge: 'Toddler Basketball',
    featured: false,
    aspectRatio: 'square',
    sheetSource: 'ammenities 2',
    url: '/photos/mini basket.png'
  },
  {
    id: 'sports-meja-pingpong',
    captionId: 'Meja Pingpong',
    title: 'Nextsist 22 Table Tennis (Ping Pong)',
    subtitle: 'High-grade blue competition Nextsist 22 table tennis with net, wooden paddles, and ping pong balls on the paved garden courtyard.',
    category: 'sports_kids',
    tag: 'Meja Pingpong • Table Tennis',
    badge: 'Nextsist 22 Tournament Table',
    featured: true,
    aspectRatio: 'landscape',
    sheetSource: 'ammenities 3',
    url: '/photos/meja pingpong.png'
  },
  {
    id: 'sports-jaring-pingpong',
    captionId: 'Jaring Penangkap Bola Pingpong',
    title: 'Table Tennis Ball Catch Net & Return Chute',
    subtitle: 'White PVC frame with blue catch netting and bottom ball feeder channel for continuous ping pong practice without chasing balls.',
    category: 'sports_kids',
    tag: 'Jaring Bola Pingpong',
    badge: 'Ball Return Netting',
    featured: false,
    aspectRatio: 'portrait',
    sheetSource: 'ammenities 3',
    url: '/photos/jaring penangkap bola pingpong.png'
  },
  {
    id: 'sports-basketball',
    captionId: 'Basketball',
    title: 'Outdoor Basketball Court & Hoop',
    subtitle: 'Full-size basketball backboard & hoop on paved driveway court with regulation basketball and mountain backdrop.',
    category: 'sports_kids',
    tag: 'Basketball • Court',
    badge: 'Paved Driveway Court',
    featured: false,
    aspectRatio: 'square',
    sheetSource: 'ammenities 3',
    url: '/photos/basketball.png'
  },
  {
    id: 'sports-volleyball',
    captionId: 'Volleyball',
    title: 'Lawn Volleyball Court & Mikasa Ball',
    subtitle: 'Outdoor grass volleyball net setup with official Mikasa competition ball on the expansive garden lawn surrounded by pine trees.',
    category: 'sports_kids',
    tag: 'Volleyball • Lawn Court',
    badge: 'Mikasa Competition Ball',
    featured: false,
    aspectRatio: 'square',
    sheetSource: 'ammenities 3',
    url: '/photos/volleyball.png'
  },
  {
    id: 'sports-badminton',
    captionId: 'Badminton',
    title: 'Badminton Rackets & Shuttlecocks',
    subtitle: 'Complete badminton sets with tournament rackets and shuttlecocks for friendly morning matches on the lawn in the crisp 18°C air.',
    category: 'sports_kids',
    tag: 'Badminton • Rackets Set',
    badge: 'Rackets & Shuttlecocks',
    featured: false,
    aspectRatio: 'square',
    sheetSource: 'ammenities 3',
    url: '/photos/badminton.png'
  }
];

/**
 * 4 Core Master Suites + Dedicated Amenities
 */
export const VILLA_SUITES: VillaSuite[] = [
  {
    id: 'suite-kamar-1',
    name: 'Master Family Suite 1 (Poolside Triple Bed)',
    captionId: 'Kamar 1 & Kamar Mandi 1',
    type: 'Master Suite 1 (Ground Floor)',
    capacity: '4 – 6 Guests',
    bed: '1 King Bed + 2 Twin Beds',
    size: '68 m²',
    view: 'Direct Pool Terrace & Garden Vista',
    description: 'Our premier ground-floor family suite featuring 3 luxury beds, gold-veined Italian marble accent wall with warm cove illumination, and direct sliding glass doors opening onto the swimming pool deck.',
    features: [
      '1 King Bed + 2 Twin Beds (Sleeps up to 6)',
      'Direct Sliding Door Access to Pool & BBQ Terrace',
      'En-suite Bathroom 1 with Matte Black Rain Shower',
      'Illuminated Floral Recessed Wall Niche',
      'Smart TV with Netflix & Streaming',
      'Silent Inverter Air Conditioning & Wardrobe'
    ],
    imageUrl: '/photos/kamar 1.png',
    bathroomImageUrl: '/photos/kamar mandi kamar 1.png',
    galleryUrls: ['/photos/kamar 1.png', '/photos/kamar mandi kamar 1.png', '/photos/kolam renang.png']
  },
  {
    id: 'suite-kamar-2',
    name: 'Deluxe Executive Bedroom 2',
    captionId: 'Kamar 2 & Kamar Mandi 2',
    type: 'Deluxe Suite 2 (Upper Floor)',
    capacity: '2 – 3 Guests',
    bed: '1 King Bed + 1 Extra Single Bed',
    size: '52 m²',
    view: 'Panoramic Highland Forest & Sunset View',
    description: 'Sophisticated executive suite adorned with an artistic liquid gold & charcoal grey mural, plush king bedding, dedicated workstation, and high-ceiling highland ventilation.',
    features: [
      '1 King Bed + 1 Single Bed',
      'Meja Kerja Workstation with Ergonomic Chair',
      'En-suite Bathroom 2 with Natural Mountain Air Ventilation',
      'Illuminated LED Backlit Vanity Mirror',
      'Floor-to-Ceiling Thermal Insulated Drapes',
      'High-Speed Dedicated Mesh Wi-Fi (50 Mbps)'
    ],
    imageUrl: '/photos/kamar 2.png',
    bathroomImageUrl: '/photos/kamar mandi kamar 2.png',
    galleryUrls: ['/photos/kamar 2.png', '/photos/kamar mandi kamar 2.png', '/photos/meja kerja.png']
  },
  {
    id: 'suite-kamar-3',
    name: 'Mountain Panorama Suite 3',
    captionId: 'Kamar 3 & Kamar Mandi 3',
    type: 'Panoramic Suite 3 (Upper Floor)',
    capacity: '2 Guests',
    bed: '1 Queen Bed',
    size: '48 m²',
    view: 'Private Balcony overlooking Mount Gede & Valley',
    description: 'Romantic highland retreat with custom vertical padded grey headboard, gold-veined marble wall, private balcony overlooking the mist-covered mountains, and en-suite bath.',
    features: [
      '1 Queen Bed with Cloud-Pillow Top Mattress',
      'Private Terrace Balcony with Teak Coffee Chairs',
      'En-suite Bathroom 3 with Floating Wood Cabinet',
      'Black Matte Glass Partition Shower',
      'Fresh Mountain Breeze Cross-Ventilation',
      'Reading Sconces & Bedside USB-C Fast Chargers'
    ],
    imageUrl: '/photos/kamar 3.png',
    bathroomImageUrl: '/photos/kamar mandi kamar 3.png',
    galleryUrls: ['/photos/kamar 3.png', '/photos/kamar mandi kamar 3.png', '/photos/gazebo.png']
  },
  {
    id: 'suite-kamar-4',
    name: 'Grand Double Suite 4',
    captionId: 'Kamar 4 & Kamar Mandi 4',
    type: 'Double Queen Suite 4',
    capacity: '4 Guests',
    bed: '2 Queen Beds',
    size: '58 m²',
    view: 'Courtyard Garden & Mountain Skyline',
    description: 'Expansive shared suite featuring two queen beds, gold abstract art wall, comfortable armchairs lounge corner, and the largest master bathroom with double sinks.',
    features: [
      '2 Queen Beds with Premium Hypoallergenic Linens',
      'Grand En-suite 4 with Double Vessel Sinks on Black Quartz',
      'Cozy Velvet Armchair Reading Lounge Corner',
      'Meja Rias Built-in Cosmetic Vanity Station',
      'Extra Wide Backlit LED Cosmetic Mirror',
      'Large Luggage Staging Rack & Built-in Closets'
    ],
    imageUrl: '/photos/kamar 4.png',
    bathroomImageUrl: '/photos/kamar mandi kamar 4.png',
    galleryUrls: ['/photos/kamar 4.png', '/photos/kamar mandi kamar 4.png', '/photos/meja rias.png']
  }
];

export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    category: 'BBQ & Al-Fresco Dining',
    captionId: 'Sheet ammenities.png',
    iconName: 'Flame',
    sheetSource: 'ammenities.png',
    items: [
      {
        name: 'Area Barbeque (Al-Fresco Terrace)',
        captionId: 'Area Barbeque',
        description: '20-seat solid timber dining table, poolside sun loungers, and mountain valley views.',
        highlight: true,
        equipment: '20-Seat Long Table + Sun Loungers'
      },
      {
        name: 'Alat Pemanggang Arang (Charcoal Grill)',
        captionId: 'Alat Pemanggang Arang',
        description: 'Heavy-duty black barrel charcoal smoker grill with adjustable height grate.',
        highlight: true,
        equipment: 'Stand-up Smoker Grill + Charcoal Grate'
      },
      {
        name: 'Alat Pemanggang Gas (Gas Grill)',
        captionId: 'Alat Pemanggang Gas',
        description: 'Dual-burner stainless steel gas grill with ignition knobs and side food prep tables.',
        highlight: true,
        equipment: '2-Burner Stainless Steel BBQ Grill'
      },
      {
        name: 'Peralatan BBQ & Korean Hotpot Kit',
        captionId: 'Peralatan BBQ',
        description: 'Portable gas stoves with Korean non-stick grill pans, stainless shabu-shabu soup pot with glass lid, tongs, and skewers.',
        highlight: true,
        equipment: 'Korean Grill + Shabu Pot + Tongs'
      }
    ]
  },
  {
    category: 'Outdoor Leisure, Pool & Lounges',
    captionId: 'Sheet ammenities 4.png',
    iconName: 'Waves',
    sheetSource: 'ammenities 4.png',
    items: [
      {
        name: 'Kolam Renang (Private Swimming Pool)',
        captionId: 'Kolam Renang',
        description: 'Crystal turquoise inground pool with stainless steel ladder and scenic deck.',
        highlight: true,
        equipment: 'Swimming Pool with Water Circulation'
      },
      {
        name: 'Meja Billiard (Terrace Pool Table)',
        captionId: 'Meja Billiard',
        description: 'Full-size outdoor billiard table with vibrant royal blue felt, wooden cues, and balls on the terrace.',
        highlight: true,
        equipment: '9ft Blue Felt Slate Billiard Table'
      },
      {
        name: 'Area Api Unggun (Lawn Bonfire Pit)',
        captionId: 'Area Api Unggun',
        description: 'Metal central fire pit surrounded by wrought iron garden benches on the manicured lawn for evening gatherings.',
        highlight: true,
        equipment: 'Fire Pit + Wrought Iron Garden Chairs'
      },
      {
        name: 'Pendopo (Signature Heritage Lounge)',
        captionId: 'Pendopo',
        description: 'Semi-outdoor wooden lounge with "ROYAL HILL VILLA PUNCAK" carved wooden wall and 2 peacock rattan chairs.',
        highlight: true,
        equipment: 'Peacock Rattan Armchairs + Plush Sofa'
      },
      {
        name: 'Gazebo (Garden Saung)',
        captionId: 'Gazebo',
        description: 'Traditional wooden saung with roll-up bamboo blinds, stone garden steps, and flower beds.',
        highlight: false,
        equipment: 'Wooden Saung + Bamboo Blinds'
      }
    ]
  },
  {
    category: 'Sports & Active Entertainment',
    captionId: 'Sheet ammenities 3.png',
    iconName: 'Trophy',
    sheetSource: 'ammenities 3.png',
    items: [
      {
        name: 'Meja Pingpong (Nextsist 22 Table Tennis)',
        captionId: 'Meja Pingpong',
        description: 'High-grade blue competition table tennis with tournament net, paddles, and balls on the paved court.',
        highlight: true,
        equipment: 'Nextsist 22 Table + Paddles & Balls'
      },
      {
        name: 'Jaring Penangkap Bola Pingpong',
        captionId: 'Jaring Penangkap Bola Pingpong',
        description: 'Catch net frame with return chute for non-stop table tennis practice without ball chasing.',
        highlight: false,
        equipment: 'PVC Return Chute & Ball Collector Net'
      },
      {
        name: 'Basketball Court & Hoop',
        captionId: 'Basketball',
        description: 'Paved basketball area with standard backboard & hoop with mountain views.',
        highlight: false,
        equipment: 'Driveway Hoop + Regulation Basketball'
      },
      {
        name: 'Volleyball Lawn Court',
        captionId: 'Volleyball',
        description: 'Grass court with regulation volleyball net and Mikasa competition ball.',
        highlight: false,
        equipment: 'Volleyball Net + Mikasa Competition Ball'
      },
      {
        name: 'Badminton Sets',
        captionId: 'Badminton',
        description: 'Multiple tournament badminton rackets and shuttlecocks for cool mountain morning games.',
        highlight: false,
        equipment: 'Badminton Rackets + Tube Shuttlecocks'
      }
    ]
  },
  {
    category: 'Kids Playground & Playhouses',
    captionId: 'Sheet ammenities 2.png',
    iconName: 'Smile',
    sheetSource: 'ammenities 2.png',
    items: [
      {
        name: 'Play Ground (Tire Climbing Tower)',
        captionId: 'Play Ground',
        description: 'Vibrant red, yellow, blue, and green tire climbing structure on sturdy black steel pillars.',
        highlight: true,
        equipment: 'Multi-Color Tire Climbing Rig'
      },
      {
        name: 'Playhouse (Kids Castle & Dual Slide)',
        captionId: 'Playhouse',
        description: 'Kids activity cottage with wavy blue & green slides, tower, tunnel, and soft interlocking rubber safety mats.',
        highlight: true,
        equipment: 'Dual Slide Castle + EVA Rubber Mats'
      },
      {
        name: 'Ayunan (Floral Hoop Swing)',
        captionId: 'Ayunan',
        description: 'Circular ring swing adorned with colorful floral garlands on the scenic grass lawn.',
        highlight: false,
        equipment: 'Heavy-Duty Metal Frame + Floral Hoop'
      },
      {
        name: 'Mini Basket (Toddler Basketball)',
        captionId: 'Mini Basket',
        description: 'Freestanding blue toddler basketball hoop on the grass for fun family play.',
        highlight: false,
        equipment: 'Junior Basketball Stand & Ball'
      }
    ]
  },
  {
    category: 'Bathrooms & Hygiene Care',
    captionId: 'Sheet bathrooms.png',
    iconName: 'Bath',
    sheetSource: 'bathrooms.png',
    items: [
      {
        name: 'Kamar Mandi 1, 2, 3 & 4 (4 En-suite Bathrooms)',
        captionId: 'Kamar Mandi Kamar 1-4',
        description: 'Private en-suite bathroom in every bedroom featuring black rain showers, glass partitions, and LED mirrors.',
        highlight: true,
        equipment: 'Matte Black Rain Showers + LED Mirrors'
      },
      {
        name: 'Toilet Tamu (Guest Powder Room)',
        captionId: 'Toilet Tamu',
        description: 'Stylish guest powder room with dark vertical fluted wall and illuminated recessed flower niche.',
        highlight: true,
        equipment: 'Fluted Accent Wall + Recessed Niche'
      },
      {
        name: 'Kursi Lipat Mandi (Elderly Accessible Seat)',
        captionId: 'Kursi Lipat Mandi',
        description: 'Wall-mounted heavy-duty foldable shower seat providing supreme safety for elderly guests.',
        highlight: true,
        equipment: 'Wall-Mounted Foldable Safety Seat'
      },
      {
        name: 'Rak & Jet Shower (Hygienic Bidets)',
        captionId: 'Rak & Jet Shower',
        description: 'High-pressure bidet jet sprays, matte black towel rails, and hotel-grade toiletries.',
        highlight: false,
        equipment: 'Hygienic Jet Spray + Multi-Tier Towel Rack'
      }
    ]
  }
];

export const NEARBY_ATTRACTIONS: AttractionItem[] = [
  {
    name: 'Taman Safari Indonesia',
    distance: '6.2 km',
    travelTime: '15 mins',
    category: 'Wildlife & Safari',
    description: 'Famous drive-through wildlife park featuring exotic animals, night safaris, and panda sanctuary.',
    imageUrl: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Gunung Mas Tea Plantation & Agro Tourism',
    distance: '3.8 km',
    travelTime: '8 mins',
    category: 'Tea Walks & Horseback',
    description: 'Vast emerald tea fields offering serene tea walks, horseback riding, and tea tasting.',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Kebun Raya Cibodas & Sakura Garden',
    distance: '14.5 km',
    travelTime: '25 mins',
    category: 'Botanical Gardens',
    description: 'Expansive highland botanical reserve at the foot of Mount Gede with lush subtropical flora.',
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Telaga Saat Puncak (Zero Point Ciliwung)',
    distance: '7.1 km',
    travelTime: '18 mins',
    category: 'Scenic Mountain Lake',
    description: 'Enchanting natural lake nestled high in tea hills, surrounded by mist and reflection viewpoints.',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  }
];

export const GUEST_TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    guestName: 'Bapak Hendra & Keluarga Besar',
    origin: 'Jakarta Selatan',
    stayType: 'Family Gathering (22 Orang)',
    rating: 5,
    date: 'Agustus 2026',
    comment: 'Villa sangat bersih dan persis dengan foto-fotonya! Semua 4 kamar tidur sangat luas, kamar mandi ada di setiap kamar + ada kursi lipat lansia yang sangat membantu orang tua kami. Fasilitas BBQ dan meja billiard luar biasa.',
    verified: true
  },
  {
    id: 'rev-2',
    guestName: 'Ibu Ratna & Rekan Kantor',
    origin: 'BSD City, Tangerang',
    stayType: 'Company Executive Retreat (18 Orang)',
    rating: 5,
    date: 'Juli 2026',
    comment: 'Pemesanan lewat WhatsApp sangat responsif dan ramah (+6281212855640). Meja kerja dan Wi-Fi cepat untuk sesi workation kami. Anak-anak sangat betah di playground dan lapangan basket & pingpong.',
    verified: true
  },
  {
    id: 'rev-3',
    guestName: 'Kevin Wijaya',
    origin: 'Bandung',
    stayType: 'Weekend Getaway',
    rating: 5,
    date: 'Agustus 2026',
    comment: 'Suasana sejuk 19°C di Puncak dengan pemandangan gunung langsung dari pendopo dan kolam renang. Alat BBQ gas dan arangnya sangat lengkap, tinggal bawa daging saja. Pasti akan kembali lagi!',
    verified: true
  }
];

export const VILLA_FAQS = [
  {
    q: 'Berapa jam check-in dan check-out di Royal Hill Villa?',
    a: 'Waktu standard Check-in adalah pukul 15:00 WIB dan Check-out adalah pukul 12:00 WIB. Penyesuaian waktu lebih awal atau lebih lambat (early check-in / late check-out) dapat dikoordinasikan terlebih dahulu melalui WhatsApp tergantung ketersediaan jadwal.'
  },
  {
    q: 'Bagaimana cara booking langsung ke Royal Hill Villa?',
    a: 'Anda dapat langsung memesan via WhatsApp resmi di +62 812-1285-5640 tanpa biaya perantara OTA. Tim reservasi kami siap melayani cek tanggal ketersediaan, perhitungan harga grup, dan detail fasilitas 24/7.'
  },
  {
    q: 'Apakah semua 4 Kamar Tidur memiliki Kamar Mandi Dalam (En-suite)?',
    a: 'Ya, seluruh 4 Kamar Tidur (Kamar 1, Kamar 2, Kamar 3, dan Kamar 4) dilengkapi dengan kamar mandi privat di dalam kamar (shower air panas, rain shower, dan wastafel). Terdapat juga 1 Toilet Tamu tambahan serta Kursi Lipat Mandi untuk lansia.'
  },
  {
    q: 'Peralatan BBQ apa saja yang disediakan di villa?',
    a: 'Kami menyediakan Alat Pemanggang Arang (charcoal barrel smoker), Alat Pemanggang Gas 2 tungku, serta set kompor portable dengan wajan Korean BBQ & panci kuah Shabu-Shabu hotpot beserta capitan dan tusukan sate lengkap.'
  },
  {
    q: 'Fasilitas olahraga dan anak apa saja yang tersedia?',
    a: 'Fasilitas mencakup Meja Billiard karpet biru, Meja Pingpong Nextsist 22 dengan jaring penangkap bola otomatis, Ring Basket & Court, Jaring Bola Voli & Bola Mikasa, Raket Badminton, serta Playground anak bertingkat ban warna-warni, Playhouse perosotan, Ayunan bunga, dan Mini Basket balita.'
  },
  {
    q: 'Berapa kapasitas tamu maksimal di Royal Hill Villa?',
    a: 'Kapasitas standar sangat nyaman untuk 16 hingga 25 tamu keluarga atau rombongan gathering dengan konfigurasi bed yang luas (King beds, Queen beds, dan Twin beds) plus ruang tamu yang lapang.'
  }
];

export function buildWhatsAppLink(inquiry: Partial<BookingInquiry>): string {
  const checkIn = inquiry.checkIn || 'Tanggal Fleksibel';
  const checkOut = inquiry.checkOut || 'Tanggal Fleksibel';
  const guests = inquiry.guests || 18;
  const event = inquiry.eventType || 'Family Gathering';
  const name = inquiry.guestName ? inquiry.guestName : 'Calon Tamu';

  const message = `Halo Royal Hill Villa (+6281212855640), saya ${name}.

Saya ingin menanyakan ketersediaan villa & reservasi:
• Check-in: ${checkIn}
• Check-out: ${checkOut}
• Jumlah Tamu: ${guests} Orang (Entire Villa 4 Master Suites)
• Tipe Acara: ${event}
${inquiry.notes ? `• Permintaan Khusus / Catatan: ${inquiry.notes}\n` : ''}
Mohon informasi ketersediaan tanggal dan total penawaran harga terbaik. Terima kasih!`;

  return `https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent(message)}`;
}
