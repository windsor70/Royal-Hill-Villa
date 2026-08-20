import { VillaPhoto, VillaSuite, AmenityCategory, AttractionItem, Testimonial, BookingInquiry } from '../types';

export const VILLA_WHATSAPP_RAW = '+6281212855640';
export const VILLA_WHATSAPP_CLEAN = '6281212855640';
export const VILLA_WHATSAPP_DISPLAY = '+62 812-1285-5640';
export const VILLA_LOCATION = 'Jl. Raya Puncak KM 84, Tugu Selatan, Cisarua, Bogor, Jawa Barat 16750, Indonesia';
export const VILLA_ALTITUDE = '1,120 MASL (Cool 18°C - 23°C)';

/**
 * 28 Authentic Photo Points corresponding directly to the 6 uploaded photo sheets:
 * Sheet 1: ammenities.png (Area Barbeque, Alat Pemanggang Arang, Alat Pemanggang Gas, Peralatan BBQ)
 * Sheet 2: ammenities 2.png (Play Ground, Playhouse, Ayunan, Mini Basket)
 * Sheet 3: ammenities 3.png (Meja Pingpong, Jaring Penangkap Bola Pingpong, Basketball, Volleyball, Badminton)
 * Sheet 4: ammenities 4.png (Kolam Renang, Meja Billiard, Area Api Unggun, Pendopo, Gazebo)
 * Sheet 5: bathrooms.png (Kamar Mandi Kamar 1, 2, 3, 4, Toilet Tamu, Kursi Lipat Mandi, Rak & Jet Shower)
 * Sheet 6: rooms.png (Kamar 1, Kamar 2, Kamar 3, Kamar 4, Meja Rias, Meja Kerja)
 */
export const HIGH_RES_PHOTOS: VillaPhoto[] = [
  // --- ROOMS & SUITES (from rooms.png) ---
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
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2000&q=85'
  },

  // --- BATHROOMS & HYGIENE (from bathrooms.png) ---
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
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=2000&q=85'
  },

  // --- BBQ & CULINARY (from ammenities.png) ---
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
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=85'
  },

  // --- OUTDOOR LEISURE & SIGNATURE SPACES (from ammenities 4.png) ---
  {
    id: 'outdoor-kolam-renang',
    captionId: 'Kolam Renang',
    title: 'Private Infinity Swimming Pool',
    subtitle: 'Crystal turquoise inground pool with stainless entry ladder, sun deck, and glass architecture overlooking lush Puncak mountain slopes.',
    category: 'outdoor',
    tag: 'Kolam Renang • Heated Pool',
    badge: 'Crystal Blue Waters',
    featured: true,
    aspectRatio: 'portrait',
    sheetSource: 'ammenities 4',
    url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=2000&q=85'
  },

  // --- KIDS PLAYGROUND & SPORTS (from ammenities 2.png & ammenities 3.png) ---
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
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=2000&q=85'
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
    url: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=2000&q=85'
  }
];

/**
 * 4 Core Master Suites + Dedicated Amenities (Matching rooms.png & bathrooms.png)
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
    view: 'Direct Heated Pool Terrace & Garden Vista',
    description: 'Our premier ground-floor family suite featuring 3 luxury beds, gold-veined Italian marble accent wall with warm cove illumination, and direct sliding glass doors opening onto the swimming pool deck.',
    features: [
      '1 King Bed + 2 Twin Beds (Sleeps up to 6)',
      'Direct Sliding Door Access to Pool & BBQ Terrace',
      'En-suite Bathroom 1 with Matte Black Rain Shower',
      'Illuminated LED Cosmetic Vanity Mirror',
      'Gold-veined Marble Accent Wall & Ambient Lighting',
      'Smart TV & Silent Air Conditioning'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85',
    bathroomImageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
    galleryUrls: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85'
    ]
  },
  {
    id: 'suite-kamar-2',
    name: 'Deluxe Executive Bedroom 2',
    captionId: 'Kamar 2 & Kamar Mandi 2',
    type: 'Executive Suite 2',
    capacity: '2 – 3 Guests',
    bed: '1 King Bed + 1 Single Bed',
    size: '54 m²',
    view: 'Highland Forest & Garden Courtyard',
    description: 'A sophisticated sanctuary featuring a breathtaking dark grey & liquid gold abstract mural wall, floor-to-ceiling sheer white drapes, dedicated wooden workstation with ergonomic swivel chair, and modern en-suite.',
    features: [
      '1 King Bed + 1 Single Bed',
      'Executive Workstation (Meja Kerja) with Ergonomic Chair',
      'En-suite Bathroom 2 with Black Rain Shower',
      'Wall-mounted Flat Screen TV on Timber Panel',
      'Floor-to-ceiling Drapes & Panoramic Daylight',
      'High-Speed Wi-Fi (150 Mbps)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=85',
    bathroomImageUrl: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=85',
    galleryUrls: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=85'
    ]
  },
  {
    id: 'suite-kamar-3',
    name: 'Mountain Panorama Terrace Suite 3',
    captionId: 'Kamar 3 & Kamar Mandi 3',
    type: 'Scenic View Suite 3',
    capacity: '2 – 3 Guests',
    bed: '1 Queen Bed',
    size: '48 m²',
    view: 'Unobstructed Mount Gede & Valley Panorama',
    description: 'Designed for panoramic romance and tranquil mornings. Features a grey vertical upholstered headboard, marble feature wall, and private sliding glass walk-out balcony overlooking misty Puncak tea valleys.',
    features: [
      '1 Queen Bed with Designer Headboard',
      'Private Walk-out Balcony with Artificial Grass Deck',
      'En-suite Bathroom 3 with Black Framed Glass Shower',
      'Floor-to-ceiling Valley Glass Sliding Doors',
      'Morning Mist Sunrise View',
      'Silent Air Conditioning & Reading Lamps'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=85',
    bathroomImageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
    galleryUrls: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85'
    ]
  },
  {
    id: 'suite-kamar-4',
    name: 'Grand Double Queen Suite 4',
    captionId: 'Kamar 4 & Kamar Mandi 4',
    type: 'Grand Family Suite 4',
    capacity: '4 – 5 Guests',
    bed: '2 Queen Beds + Sofa',
    size: '62 m²',
    view: 'Highland Garden & Pine Tree Canopy',
    description: 'A spacious multi-bed grand room with 2 Queen beds, black & gold abstract wall art, comfortable beige lounge sofa, integrated makeup vanity (Meja Rias), and access to the double-sink luxury master bath.',
    features: [
      '2 Queen Beds (160x200) + Loveseat Lounge Sofa',
      'En-suite Bathroom 4 with Double Vessel Sinks',
      'Integrated Dressing Vanity (Meja Rias) with Backlit Mirror',
      'Floor-to-ceiling Curtained Windows',
      'Spacious Wardrobes & Luggage Bench',
      'Smart TV 4K & Premium Linens'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85',
    bathroomImageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85',
    galleryUrls: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85'
    ]
  }
];

/**
 * Categorized Amenities & Equipment corresponding to the user's photo sheets
 */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    category: 'BBQ & Al-Fresco Dining',
    captionId: 'Area Barbeque & Peralatan BBQ (ammenities.png)',
    iconName: 'Flame',
    sheetSource: 'ammenities.png',
    items: [
      { 
        name: 'Area Barbeque Terrace', 
        captionId: 'Area Barbeque',
        description: 'Large covered al-fresco terrace with 20-person solid wood dining table, woven chairs, and poolside loungers', 
        highlight: true,
        equipment: 'Solid Wood Banquet Table (20 Pax)'
      },
      { 
        name: 'Alat Pemanggang Arang', 
        captionId: 'Alat Pemanggang Arang',
        description: 'Free-standing black charcoal barbecue smoker barrel grill on lawn for smoky satay and steaks', 
        highlight: true,
        equipment: 'Heavy-Duty Charcoal Grill + Lid'
      },
      { 
        name: 'Alat Pemanggang Gas', 
        captionId: 'Alat Pemanggang Gas',
        description: 'Stainless steel 2-burner gas grill with dual rotary dials and prep side tables', 
        highlight: true,
        equipment: '2-Burner Stainless Gas BBQ'
      },
      { 
        name: 'Peralatan BBQ & Shabu Set', 
        captionId: 'Peralatan BBQ',
        description: 'Portable gas stoves with non-stick Korean BBQ griddle pan, stainless shabu-shabu pot, tongs, spatulas, and skewers', 
        highlight: true,
        equipment: 'Korean Grill Plate + Shabu Hotpot + Portable Stoves'
      }
    ]
  },
  {
    category: 'Outdoor Leisure, Pool & Lounge',
    captionId: 'Kolam Renang, Billiard & Pendopo (ammenities 4.png)',
    iconName: 'Waves',
    sheetSource: 'ammenities 4.png',
    items: [
      { 
        name: 'Kolam Renang (Swimming Pool)', 
        captionId: 'Kolam Renang',
        description: 'Private crystal turquoise pool with stainless ladder, sun deck loungers, and mountain vistas', 
        highlight: true,
        equipment: 'Private Inground Pool & Sun Deck'
      },
      { 
        name: 'Meja Billiard (Terrace View)', 
        captionId: 'Meja Billiard',
        description: 'Full-size slate billiard table with vibrant royal blue cloth, wooden cues, and balls on the open-air terrace', 
        highlight: true,
        equipment: '9ft Slate Billiards with Blue Felt'
      },
      { 
        name: 'Area Api Unggun (Bonfire Pit)', 
        captionId: 'Area Api Unggun',
        description: 'Central black metal fire bowl surrounded by circular black iron benches and armchairs on the green lawn', 
        highlight: true,
        equipment: 'Garden Fire Pit + Iron Benches'
      },
      { 
        name: 'Pendopo Royal Hill Lounge', 
        captionId: 'Pendopo',
        description: 'Signature semi-outdoor lounge with carved Royal Hill wooden wall, two burgundy peacock rattan armchairs, and sectional sofa', 
        highlight: true,
        equipment: 'Branded Wood Wall + Rattan Peacock Chairs'
      },
      { 
        name: 'Gazebo Saung Taman', 
        captionId: 'Gazebo',
        description: 'Traditional wooden garden pavilion with bamboo shades, bench seating, and stone steps among floral landscaping', 
        highlight: false,
        equipment: 'Wooden Saung + Bamboo Blinds'
      }
    ]
  },
  {
    category: 'Sports & Active Games',
    captionId: 'Meja Pingpong, Basketball, Voli, Badminton (ammenities 3.png)',
    iconName: 'Trophy',
    sheetSource: 'ammenities 3.png',
    items: [
      { 
        name: 'Meja Pingpong (Table Tennis)', 
        captionId: 'Meja Pingpong',
        description: 'Blue Nextsist 22 tournament table tennis table with net, wooden rackets, and balls in courtyard', 
        highlight: true,
        equipment: 'Nextsist 22 Ping Pong Table'
      },
      { 
        name: 'Jaring Penangkap Bola Pingpong', 
        captionId: 'Jaring Penangkap Bola Pingpong',
        description: 'PVC framed blue netting chute for table tennis practice and automatic ball collection', 
        highlight: false,
        equipment: 'Ball Return Netting System'
      },
      { 
        name: 'Basketball Court & Hoop', 
        captionId: 'Basketball',
        description: 'Outdoor basketball backboard and hoop on paved driveway court with regulation orange basketball', 
        highlight: true,
        equipment: 'Driveway Basketball Court'
      },
      { 
        name: 'Lawn Volleyball Net', 
        captionId: 'Volleyball',
        description: 'Competition outdoor grass volleyball net setup with official Mikasa competition volleyball', 
        highlight: true,
        equipment: 'Grass Volleyball Net + Mikasa Ball'
      },
      { 
        name: 'Badminton Sets', 
        captionId: 'Badminton',
        description: 'Tournament badminton racquets and feathered shuttlecocks for friendly morning garden games', 
        highlight: false,
        equipment: 'Badminton Racquets & Shuttles'
      }
    ]
  },
  {
    category: 'Kids Playground & Adventure',
    captionId: 'Playground, Playhouse, Ayunan, Mini Basket (ammenities 2.png)',
    iconName: 'Smile',
    sheetSource: 'ammenities 2.png',
    items: [
      { 
        name: 'Play Ground (Tire Climbing Tower)', 
        captionId: 'Play Ground',
        description: 'Multi-level tire obstacle climbing tower featuring colorful red, yellow, blue, and green tires on steel pillars', 
        highlight: true,
        equipment: '4-Color Tire Climbing Tower'
      },
      { 
        name: 'Playhouse (Kids Adventure Castle)', 
        captionId: 'Playhouse',
        description: 'Colorful play cottage with dual slides (blue wavy & green), crawl tunnel, lookout tower, and soft safety rubber floor tiles', 
        highlight: true,
        equipment: 'Multi-Slide Playhouse + Soft Mat'
      },
      { 
        name: 'Ayunan (Floral Circle Swing)', 
        captionId: 'Ayunan',
        description: 'Romantic circular hoop swing wrapped with bright flower garlands on heavy-duty steel frame over lawn', 
        highlight: true,
        equipment: 'Decorated Floral Ring Swing'
      },
      { 
        name: 'Mini Basket (Toddler Hoop)', 
        captionId: 'Mini Basket',
        description: 'Freestanding blue metal toddler basketball hoop with net on grass for little ones', 
        highlight: false,
        equipment: 'Kids Toddler Basketball Hoop'
      }
    ]
  },
  {
    category: 'Bathrooms & Accessibility Safety',
    captionId: 'Kamar Mandi 1-4, Toilet Tamu, Kursi Lipat (bathrooms.png)',
    iconName: 'ShieldCheck',
    sheetSource: 'bathrooms.png',
    items: [
      { 
        name: '4 Luxury En-suite Bathrooms', 
        captionId: 'Kamar Mandi Kamar 1, 2, 3, 4',
        description: 'Each bedroom features private en-suite with floating wood vanities, backlit LED mirrors, matte black rain showers, and hot water', 
        highlight: true,
        equipment: '4 Private En-suite Bathrooms'
      },
      { 
        name: 'Toilet Tamu (Guest Powder Room)', 
        captionId: 'Toilet Tamu',
        description: 'Convenient guest bathroom with dark fluted wall paneling and illuminated floral wall niche', 
        highlight: true,
        equipment: 'Fluted Wall Half-Bath'
      },
      { 
        name: 'Kursi Lipat Mandi (Elderly Safety Seat)', 
        captionId: 'Kursi Lipat Mandi',
        description: 'Wall-mounted heavy-duty folding shower seat ensuring maximum comfort and safety for seniors and toddlers', 
        highlight: true,
        equipment: 'Accessible Folding Shower Bench'
      },
      { 
        name: 'Rak & Jet Shower Bidets', 
        captionId: 'Rak & Jet Shower',
        description: 'Matte black stainless towel drying racks, high-pressure bidet jet sprays, and complimentary toiletries in all bathrooms', 
        highlight: false,
        equipment: 'Bidet Sprayers & Towel Racks'
      }
    ]
  }
];

export const SURROUNDING_ATTRACTIONS: AttractionItem[] = [
  {
    name: 'Agrowisata Gunung Mas Tea Estate',
    distance: '3.2 km',
    travelTime: '8 mins',
    category: 'Nature & Tea Walk',
    description: 'Endless rolling emerald tea plantations, horseback riding, tea factory tour, and tea bridge walk.',
    imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Taman Safari Indonesia Cisarua',
    distance: '5.8 km',
    travelTime: '15 mins',
    category: 'Wildlife & Safari',
    description: 'World-famous drive-thru animal safari park, panda palace, night safari, and amusement park.',
    imageUrl: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Telaga Saat Puncak',
    distance: '4.5 km',
    travelTime: '12 mins',
    category: 'Scenic Lake & Hills',
    description: 'Hidden zero-kilometer Ciliwung highland lake surrounded by morning mist and tea hills.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Cimory Dairyland & Riverside Puncak',
    distance: '7.1 km',
    travelTime: '18 mins',
    category: 'Family Dining & Fun',
    description: 'Interactive petting farm, scenic riverside restaurant, fresh milk, and chocolate factory.',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
  }
];

export const GUEST_TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    guestName: 'Hendrawan Kusuma & Family',
    origin: 'Jakarta Selatan',
    stayType: 'Family Gathering (22 Guests)',
    rating: 5,
    date: 'August 2026',
    comment: 'The most extraordinary villa experience we have ever had in Puncak! The long wooden BBQ table comfortably fit all 20 of us, the kids went crazy for the playhouse and tire climbing tower, and the outdoor billiard table by the pool with the mountain breeze was unbeatable.',
    verified: true
  },
  {
    id: 'rev-2',
    guestName: 'PT Nusantara Digital Retreat',
    origin: 'BSD City, Tangerang',
    stayType: 'Corporate Leadership Offsite (18 Pax)',
    rating: 5,
    date: 'July 2026',
    comment: 'Flawless venue for our team retreat. The table tennis with ball net, volleyball on the lawn, and evening bonfire with iron benches were highlights. The dedicated workstation in Kamar 2 with high-speed fiber Wi-Fi made workations effortless.',
    verified: true
  },
  {
    id: 'rev-3',
    guestName: 'Clarissa & Jonathan',
    origin: 'Kelapa Gading, Jakarta',
    stayType: 'Extended Family Weekend Getaway',
    rating: 5,
    date: 'July 2026',
    comment: 'We were so impressed with the attention to detail! The accessible folding shower seat (Kursi Lipat Mandi) made the stay safe and easy for my elderly grandmother. Both the charcoal grill and Korean BBQ hotpot gear were super clean and complete!',
    verified: true
  }
];

export const VILLA_FAQS = [
  {
    question: 'How do I check availability and make a reservation?',
    answer: 'Direct reservations are managed seamlessly via our official WhatsApp hotline (+62 812-1285-5640). Simply select your desired dates on our inquiry widget or message us directly. Our host will confirm availability, rate calculation, and lock in your reservation with a 50% deposit via bank transfer.'
  },
  {
    question: 'What is the bedroom & bed setup in Royal Hill Villa?',
    answer: 'The villa features 4 Grand Master Suites with en-suite bathrooms: Kamar 1 (1 King + 2 Twin Beds, pool access), Kamar 2 (1 King + 1 Single Bed, executive desk), Kamar 3 (1 Queen Bed, mountain balcony), and Kamar 4 (2 Queen Beds, lounge sofa). In total, the villa accommodates 20 to 25+ guests comfortably with extra beds.'
  },
  {
    question: 'What BBQ and cooking equipment are provided?',
    answer: 'We provide complete grilling and cooking facilities at no extra charge: 1 Large Charcoal Smoker Barrel Grill (Alat Pemanggang Arang), 1 2-Burner Stainless Gas BBQ (Alat Pemanggang Gas), and portable gas cookers with Korean non-stick grill pans & Shabu-Shabu hotpot pots with tongs, skewers, and spatulas.'
  },
  {
    question: 'What outdoor sports & children facilities are available on-site?',
    answer: 'The villa includes a full-size outdoor slate Billiard table, Nextsist 22 Table Tennis with practice ball catch net, Driveway Basketball hoop, Lawn Volleyball court with Mikasa ball, Badminton sets, 4-tier Tire Climbing Tower, Multi-slide Children Playhouse with safety rubber mats, Flower Ring Swing, and Toddler Mini Basketball.'
  },
  {
    question: 'Are the bathrooms accessible for elderly or disabled guests?',
    answer: 'Yes! All 4 en-suite bathrooms feature step-free walk-in showers, and we have installed heavy-duty wall-mounted foldable shower seats (Kursi Lipat Mandi) to ensure safe and comfortable bathing for seniors and children.'
  },
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Standard check-in is at 14:00 (2:00 PM) and check-out is at 12:00 (12:00 PM). Early check-in or late check-out can be arranged complimentary via WhatsApp, subject to villa schedule on that day.'
  },
  {
    question: 'Are there staff on-site to help us during our stay?',
    answer: 'Yes, 2 dedicated professional resident butlers are on-site 24/7 to assist with luggage, lighting the bonfire and BBQ charcoal, dishwashing, and maintaining clean common areas.'
  }
];

export function buildWhatsAppLink(inquiry: Partial<BookingInquiry>): string {
  const parts: string[] = [];
  parts.push(`*ROYAL HILL VILLA PUNCAK - DIRECT BOOKING INQUIRY* 🏔️✨`);
  parts.push(`Halo Admin Royal Hill Villa (+6281212855640), saya ingin menanyakan reservasi villa:\n`);
  
  if (inquiry.guestName) {
    parts.push(`👤 *Nama Tamu:* ${inquiry.guestName}`);
  }
  if (inquiry.guestPhone) {
    parts.push(`📱 *Kontak:* ${inquiry.guestPhone}`);
  }
  if (inquiry.checkIn && inquiry.checkOut) {
    parts.push(`📅 *Tanggal Check-in:* ${inquiry.checkIn}`);
    parts.push(`📅 *Tanggal Check-out:* ${inquiry.checkOut}`);
  } else if (inquiry.checkIn) {
    parts.push(`📅 *Tanggal Rencana:* ${inquiry.checkIn}`);
  }
  
  if (inquiry.guests) {
    parts.push(`👥 *Jumlah Tamu:* ${inquiry.guests} Orang (Entire Villa 4 Grand Suites + Living)`);
  }
  
  if (inquiry.eventType) {
    parts.push(`🎉 *Tipe Acara/Kunjungan:* ${inquiry.eventType}`);
  }
  
  if (inquiry.addOns && inquiry.addOns.length > 0) {
    parts.push(`✨ *Pilihan Fasilitas/Add-on:* ${inquiry.addOns.join(', ')}`);
  }
  
  if (inquiry.notes) {
    parts.push(`📝 *Catatan / Request:* ${inquiry.notes}`);
  }
  
  parts.push(`\nMohon info ketersediaan tanggal, promo direct booking, dan invoice rincian. Terima kasih! 🙏`);
  
  const message = parts.join('\n');
  return `https://wa.me/${VILLA_WHATSAPP_CLEAN}?text=${encodeURIComponent(message)}`;
}
