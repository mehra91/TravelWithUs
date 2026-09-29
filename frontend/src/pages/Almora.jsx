import { Link } from 'react-router-dom';

const highlights = ['Bright Uttarakhand markets', 'Views over the Kosi valley', 'Base for visiting Kasardevi'];

export default function Almora() {
  return (
    <section className="px-5 py-10 md:px-12 md:py-14 max-w-5xl">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZE6m26ZTSo8TLupB8L5nWKFhse4yuFtsyWb32A0heG30JxaHxQ6AHNgs&s=10"
        alt="Almora hills"
        className="rounded-xl w-full h-96 object-cover mb-6"
      />
      <h1 className="font-display italic text-3xl text-forest mb-2">Almora</h1>
      <p className="text-sm text-neutral-600 leading-relaxed mb-4">
        A ridge-top market town wrapped in oak and pine forest, with Kasardevi's viewpoints
        a short drive above it.
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {highlights.map((h) => (
          <span key={h} className="text-xs px-3 py-1.5 rounded-full bg-gold-soft text-forest">
            {h}
          </span>
        ))}
      </div>
      <Link
        to="/booking"
        className="inline-flex items-center gap-2 bg-forest text-cream text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-forest-light transition"
      >
        Plan a trip to Almora
      </Link>
    </section>
  );
}
