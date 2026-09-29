import { Link } from 'react-router-dom';
import { TbArrowRight } from 'react-icons/tb';

export default function Home() {
  return (
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden md:h-screen md:min-h-0">
      <img
        src="https://picsum.photos/seed/himalaya-hero/1600/1000"
        alt="Himalaya mountains at sunrise"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-forest/35" />

      <div className="relative z-10 flex min-h-[calc(100svh-5rem)] max-w-md flex-col justify-center px-5 md:h-full md:min-h-0 md:px-12">
        <h1 className="font-cursive text-4xl md:text-5xl text-gold-soft leading-tight">
          Start your journey with us
        </h1>
        <p className="mt-4 text-cream/90 text-sm max-w-xs">
          Explore Almora, Nainital and beyond with TravelPartner.
        </p>
        <Link
          to="/booking"
          className="mt-6 inline-flex items-center gap-2 w-fit bg-gold text-forest text-sm font-medium px-5 py-2.5 rounded-lg hover:brightness-95 transition"
        >
          Book now <TbArrowRight />
        </Link>
      </div>
    </section>
  );
}
