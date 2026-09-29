import { Link } from 'react-router-dom';

const highlights = ['Boating on Naini lake', 'Mall Road in the evening', 'Cable car to Snow View'];

export default function Nainital() {
  return (
    <section className="px-5 py-10 md:px-12 md:py-14 max-w-5xl  ">
      <img
        src="https://images.pexels.com/photos/27970045/pexels-photo-27970045.jpeg"
        alt="Nainital lake"
        className="rounded-xl w-full h-96  object-cover mb-6"
      />
      <h1 className="font-display italic text-3xl text-forest mb-2">Nainital</h1>
      <p className="text-sm text-neutral-600 leading-relaxed mb-4">
        A lake town built into a forested bowl of hills, popular for boating, the busy
        Mall Road and easy viewpoints above town.
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
        Plan a trip to Nainital
      </Link>
    </section>
  );
}
