export default function About() {
  return (
    <section className="px-5 py-10 md:px-12 md:py-14 max-w-3xl">
      <h1 className="font-display italic text-3xl text-forest mb-3">About TravelPartner</h1>
      <p className="text-sm text-neutral-600 leading-relaxed mb-5">
        TravelPartner plans trips through the Kumaon Himalaya — Almora, Nainital and the
        quieter hill towns around them. We put together the car, the stay and the itinerary
        so you can focus on the trip itself.
      </p>
      <img
        src="https://picsum.photos/seed/travelpartner-about/1000/560"
        alt="Himalayan hillside"
        className="rounded-xl w-full object-cover mb-6"
      />
      <ul className="space-y-2 text-sm text-neutral-700">
        <li>Local drivers who know the mountain roads</li>
        <li>Hand-picked stays in each town</li>
        <li>Itineraries built around your pace, not a fixed package</li>
      </ul>
    </section>
  );
}
