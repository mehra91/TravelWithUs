import { useEffect, useState } from 'react';
import { TbHeadset, TbMessageCircle, TbCheck } from 'react-icons/tb';
import { getDestinations, getCars } from '../api.js';
import { destinations as fallbackDestinations, cars as fallbackCars } from '../data/siteData.js';

const tabs = [
  { id: 'destination', label: 'Destination' },
  { id: 'car', label: 'Car' },
  { id: 'discuss', label: 'Discuss with us' },
];

export default function CustomPackages() {
  const [activeTab, setActiveTab] = useState('destination');
  const [destinations, setDestinations] = useState(fallbackDestinations);
  const [cars, setCars] = useState(fallbackCars);
  const [selectedDestination, setSelectedDestination] = useState(fallbackDestinations[0]?._id);
  const [selectedCar, setSelectedCar] = useState(fallbackCars[0]?._id);

  useEffect(() => {
    getDestinations().then(setDestinations).catch(() => {});
    getCars().then(setCars).catch(() => {});
  }, []);

  return (
    <section className="px-5 py-10 md:px-12 md:py-14 max-w-2xl">
      <h1 className="font-display italic text-3xl text-forest mb-1">Customize your trip</h1>
      <p className="text-sm text-neutral-600 mb-6">
        Pick a destination, choose your car, or talk to us directly.
      </p>

      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm px-4 py-2 rounded-lg border transition-colors ${
              activeTab === tab.id
                ? 'bg-gold border-gold text-forest font-medium'
                : 'border-gold-soft text-forest hover:bg-gold-soft/40'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'destination' && (
        <div className="grid grid-cols-2 gap-3.5">
          {destinations.map((d) => (
            <button
              key={d._id}
              onClick={() => setSelectedDestination(d._id)}
              className={`text-left rounded-xl overflow-hidden border-2 transition-colors bg-white ${
                selectedDestination === d._id ? 'border-gold' : 'border-neutral-200'
              }`}
            >
              <img src={d.image} alt={d.name} className="h-24 w-full object-cover" />
              <div className="flex items-center justify-between px-3 py-2.5">
                <span className="text-sm text-forest">{d.name}</span>
                {selectedDestination === d._id && <TbCheck className="text-gold" />}
              </div>
            </button>
          ))}
        </div>
      )}

      {activeTab === 'car' && (
        <div className="grid grid-cols-2 gap-3.5">
          {cars.map((c) => (
            <button
              key={c._id}
              onClick={() => setSelectedCar(c._id)}
              className={`text-left rounded-xl overflow-hidden border-2 transition-colors bg-white ${
                selectedCar === c._id ? 'border-gold' : 'border-neutral-200'
              }`}
            >
              <img src={c.image} alt={c.name} className="h-24 w-full object-cover" />
              <div className="flex items-center justify-between px-3 py-2.5">
                <span className="text-sm text-forest">{c.name}</span>
                {selectedCar === c._id && <TbCheck className="text-gold" />}
              </div>
            </button>
          ))}
        </div>
      )}

      {activeTab === 'discuss' && (
        <div className="bg-white border border-neutral-200 rounded-xl p-8 max-w-sm text-center">
          <div className="w-11 h-11 rounded-full bg-gold-soft flex items-center justify-center mx-auto mb-3.5">
            <TbHeadset className="text-forest text-xl" />
          </div>
          <h2 className="text-base font-medium text-forest mb-1.5">Talk to a travel expert</h2>
          <p className="text-sm text-neutral-600 mb-4">
            Tell us what you have in mind and we will plan the rest with you.
          </p>
          <a
            href="mailto:hello@travelpartner.example"
            className="inline-flex items-center gap-2 bg-gold text-forest text-sm font-medium px-5 py-2.5 rounded-lg hover:brightness-95 transition"
          >
            <TbMessageCircle /> Start a conversation
          </a>
        </div>
      )}
    </section>
  );
}
