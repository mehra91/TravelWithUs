// Stand-in for the database until MongoDB is connected (see /config/db.js
// and the schemas in /models). Shaped to match those schemas so swapping
// this out for real Mongoose queries later is a small change.

export const destinations = [
  {
    _id: 'kasardevi',
    name: 'Kasardevi',
    slug: 'kasardevi',
    tagline: 'Hilltop calm above Almora',
    description:
      'A quiet hamlet perched above Almora, known for wide Himalaya views, pine forest walks and a slow, laid-back pace.',
    image: 'https://picsum.photos/seed/kasardevi/900/600',
    gallery: [
      'https://picsum.photos/seed/kasardevi-1/700/500',
      'https://picsum.photos/seed/kasardevi-2/700/500',
    ],
    highlights: ['Panoramic Himalaya views', 'Pine and oak forest walks', 'Slow-travel cafes'],
    bestTimeToVisit: 'March to June, September to November',
  },
  {
    _id: 'mukteshwar',
    name: 'Mukteshwar',
    slug: 'mukteshwar',
    tagline: 'Orchards and cliffside views',
    description:
      'A former British cantonment town with apple and apricot orchards, cliffside viewpoints and a historic temple.',
    image: 'https://picsum.photos/seed/mukteshwar/900/600',
    gallery: [
      'https://picsum.photos/seed/mukteshwar-1/700/500',
      'https://picsum.photos/seed/mukteshwar-2/700/500',
    ],
    highlights: ['Chauli Ki Jali cliff viewpoint', 'Fruit orchards', 'Quiet colonial-era lanes'],
    bestTimeToVisit: 'October to June',
  },
  {
    _id: 'kausani',
    name: 'Kausani',
    slug: 'kausani',
    tagline: 'A 300 km sweep of snow peaks',
    description:
      'A ridge-top town facing an unbroken stretch of the Himalaya, from Nanda Devi to Trishul, best seen at sunrise.',
    image: 'https://picsum.photos/seed/kausani/900/600',
    gallery: [
      'https://picsum.photos/seed/kausani-1/700/500',
      'https://picsum.photos/seed/kausani-2/700/500',
    ],
    highlights: ['Sunrise over Nanda Devi', 'Tea estate walks', 'Anasakti Ashram'],
    bestTimeToVisit: 'March to June, September to December',
  },
  {
    _id: 'kainchi-dham',
    name: 'Kainchi Dham',
    slug: 'kainchi-dham',
    tagline: 'A riverside temple in the pines',
    description:
      'A well-known ashram and temple set beside a river in a narrow, forested valley between Bhowali and Nainital.',
    image: 'https://picsum.photos/seed/kainchi-dham/900/600',
    gallery: [
      'https://picsum.photos/seed/kainchi-dham-1/700/500',
      'https://picsum.photos/seed/kainchi-dham-2/700/500',
    ],
    highlights: ['Riverside temple grounds', 'Forest drive from Bhowali', 'Quiet early mornings'],
    bestTimeToVisit: 'Year-round, quietest on weekday mornings',
  },
];

export const cars = [
  {
    _id: 'car-4-seater',
    name: '4 seater car',
    type: 'sedan',
    seats: 4,
    pricePerDay: 2800,
    image: 'https://picsum.photos/seed/sedan-car/900/600',
    features: ['Air conditioned', 'Experienced mountain driver', 'Fits 4 with luggage'],
  },
  {
    _id: 'car-6-seater',
    name: '6 seater car',
    type: 'suv',
    seats: 6,
    pricePerDay: 4200,
    image: 'https://picsum.photos/seed/suv-car/900/600',
    features: ['Air conditioned', 'Experienced mountain driver', 'Extra luggage space'],
  },
];
