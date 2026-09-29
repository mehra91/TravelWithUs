const images = [
  { src: 'https://picsum.photos/seed/himalaya-hero/700/900', alt: 'Himalaya sunrise' },
  { src: 'https://picsum.photos/seed/almora-hills/700/520', alt: 'Almora hills' },
  { src: 'https://picsum.photos/seed/nainital-lake/700/780', alt: 'Nainital lake' },
  { src: 'https://picsum.photos/seed/kausani/700/600', alt: 'Kausani' },
  { src: 'https://picsum.photos/seed/mukteshwar/700/920', alt: 'Mukteshwar' },
  { src: 'https://picsum.photos/seed/kasardevi/700/560', alt: 'Kasardevi' },
  { src: 'https://picsum.photos/seed/kainchi-dham/700/760', alt: 'Kainchi Dham' },
  { src: 'https://picsum.photos/seed/mountain-trail/700/540', alt: 'Mountain trail' },
  { src: 'https://picsum.photos/seed/forest-road/700/850', alt: 'Forest road' },
];

export default function Gallery() {
  return (
    <section className="px-5 py-10 md:px-12 md:py-14">
      <h1 className="font-display italic text-3xl text-forest mb-6">Gallery</h1>
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
        {images.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="mb-4 block w-full break-inside-avoid rounded-xl object-cover"
          />
        ))}
      </div>
    </section>
  );
}
