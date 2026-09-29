// Client-side fallback data. Pages fetch from the API on mount and fall
// back to this if the backend isn't running, so the frontend still renders
// on its own. Shapes match backend/data/mockData.js.

export const destinations = [
  { _id: 'kasardevi', name: 'Kasardevi', image: 'https://picsum.photos/seed/kasardevi/900/600' },
  { _id: 'mukteshwar', name: 'Mukteshwar', image: 'https://picsum.photos/seed/mukteshwar/900/600' },
  { _id: 'kausani', name: 'Kausani', image: 'https://picsum.photos/seed/kausani/900/600' },
  { _id: 'kainchi-dham', name: 'Kainchi Dham', image: 'https://picsum.photos/seed/kainchi-dham/900/600' },
];

export const cars = [
  { _id: 'car-4-seater', name: '4 seater car', seats: 4, image: 'https://picsum.photos/seed/sedan-car/900/600' },
  { _id: 'car-6-seater', name: '6 seater car', seats: 6, image: 'https://picsum.photos/seed/suv-car/900/600' },
];
