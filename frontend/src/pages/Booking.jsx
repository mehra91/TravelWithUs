import { useEffect, useMemo, useState } from 'react';
import { TbChevronLeft, TbChevronRight, TbCar, TbCheck } from 'react-icons/tb';
import { getDestinations, getCars, createBooking } from '../api.js';
import { destinations as fallbackDestinations, cars as fallbackCars } from '../data/siteData.js';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function fmt(d) {
  return `${d.getDate()} ${MONTHS[d.getMonth()].slice(0, 3)} ${d.getFullYear()}`;
}

function StepLabel({ n, label }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-5 h-5 rounded-full bg-gold text-forest text-[11px] font-medium flex items-center justify-center">
        {n}
      </span>
      <span className="text-sm font-medium text-forest">{label}</span>
    </div>
  );
}

export default function Booking() {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selStart, setSelStart] = useState(today);
  const [selEnd, setSelEnd] = useState(() => {
    const d = new Date(today);
    d.setDate(d.getDate() + 4);
    return d;
  });

  const [destinations, setDestinations] = useState(fallbackDestinations);
  const [cars, setCars] = useState(fallbackCars);
  const [selectedDestination, setSelectedDestination] = useState(fallbackDestinations[0]?._id);
  const [selectedCar, setSelectedCar] = useState(fallbackCars[0]?._id);

  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  useEffect(() => {
    getDestinations().then(setDestinations).catch(() => {});
    getCars().then(setCars).catch(() => {});
  }, []);

  const days = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1);
    const startOffset = firstDay.getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const cells = Array(startOffset).fill(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(viewYear, viewMonth, d));
    return cells;
  }, [viewYear, viewMonth]);

  function pickDate(date) {
    if (!selStart || selEnd) {
      setSelStart(date);
      setSelEnd(null);
      return;
    }
    if (date.getTime() < selStart.getTime()) {
      setSelStart(date);
      setSelEnd(null);
      return;
    }
    if (date.getTime() === selStart.getTime()) {
      setSelEnd(null);
      return;
    }
    setSelEnd(date);
  }

  function goPrevMonth() {
    let m = viewMonth - 1;
    let y = viewYear;
    if (m < 0) {
      m = 11;
      y -= 1;
    }
    if (y < today.getFullYear() || (y === today.getFullYear() && m < today.getMonth())) return;
    setViewMonth(m);
    setViewYear(y);
  }

  function goNextMonth() {
    let m = viewMonth + 1;
    let y = viewYear;
    if (m > 11) {
      m = 0;
      y += 1;
    }
    setViewMonth(m);
    setViewYear(y);
  }

  const nights = selStart && selEnd ? Math.round((selEnd.getTime() - selStart.getTime()) / 86400000) : null;
  const destinationName = destinations.find((d) => d._id === selectedDestination)?.name || 'Select a destination';
  const carName = cars.find((c) => c._id === selectedCar)?.name || 'Select a car';

  async function handleConfirm() {
    if (!selStart || !selEnd) {
      setFormError('Select your check-in and check-out dates.');
      return;
    }
    if (!customerName.trim() || !email.trim()) {
      setFormError('Enter your name and email.');
      return;
    }
    setFormError('');
    setStatus('submitting');
    try {
      await createBooking({
        customerName,
        email,
        startDate: selStart.toISOString(),
        endDate: selEnd.toISOString(),
        destination: selectedDestination,
        car: selectedCar,
      });
      setStatus('success');
    } catch (e) {
      setStatus('error');
    }
  }

  return (
    <section className="px-5 py-10 md:px-12 md:py-14 max-w-2xl">
      <h1 className="font-display italic text-3xl text-forest mb-1">Book your journey</h1>
      <p className="text-sm text-neutral-600 mb-7">Reserve your dates, car and destination in one place.</p>

      <StepLabel n={1} label="Choose your dates" />
      <div className="bg-white border border-neutral-200 rounded-xl p-4 w-64 mb-7">
        <div className="flex items-center justify-between mb-2.5">
          <button onClick={goPrevMonth} aria-label="Previous month" className="p-1 text-forest">
            <TbChevronLeft size={16} />
          </button>
          <span className="text-sm font-medium text-forest">
            {MONTHS[viewMonth]} {viewYear}
          </span>
          <button onClick={goNextMonth} aria-label="Next month" className="p-1 text-forest">
            <TbChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-1">
          {WEEKDAYS.map((w) => (
            <span key={w} className="text-center text-[11px] text-neutral-500">
              {w}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((date, i) => {
            if (!date) return <div key={`b-${i}`} />;
            const isPast = date.getTime() < today.getTime();
            const isStart = selStart && date.getTime() === selStart.getTime();
            const isEnd = selEnd && date.getTime() === selEnd.getTime();
            const inRange =
              selStart && selEnd && date.getTime() > selStart.getTime() && date.getTime() < selEnd.getTime();
            return (
              <button
                key={date.toISOString()}
                disabled={isPast}
                onClick={() => pickDate(date)}
                className={`text-xs py-1.5 rounded-full ${
                  isPast
                    ? 'text-neutral-300 cursor-default'
                    : isStart || isEnd
                    ? 'bg-gold text-forest font-medium'
                    : inRange
                    ? 'bg-gold-soft text-forest rounded-md'
                    : 'text-forest hover:bg-gold-soft/50 rounded-md'
                }`}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>

        <p className="text-xs text-neutral-500 text-center mt-2.5">
          {selStart && selEnd
            ? `${fmt(selStart)}  to  ${fmt(selEnd)}`
            : selStart
            ? `${fmt(selStart)} · pick an end date`
            : 'Select your dates'}
        </p>
      </div>

      <StepLabel n={2} label="Choose your car" />
      <div className="flex gap-2.5 mb-7">
        {cars.map((c) => (
          <button
            key={c._id}
            onClick={() => setSelectedCar(c._id)}
            className={`flex-1 flex items-center justify-between gap-3 p-3 rounded-xl border-2 text-left bg-white ${
              selectedCar === c._id ? 'border-gold' : 'border-neutral-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-forest-light flex items-center justify-center">
                <TbCar className="text-cream" />
              </div>
              <div>
                <p className="text-sm font-medium text-forest">{c.name}</p>
                <p className="text-xs text-neutral-500">Up to {c.seats} guests</p>
              </div>
            </div>
            <span
              className={`w-4 h-4 rounded-full border ${
                selectedCar === c._id ? 'bg-gold border-gold' : 'border-neutral-300'
              }`}
            />
          </button>
        ))}
      </div>

      <StepLabel n={3} label="Choose your destination" />
      <div className="flex flex-wrap gap-2 mb-7">
        {destinations.map((d) => (
          <button
            key={d._id}
            onClick={() => setSelectedDestination(d._id)}
            className={`text-sm px-4 py-2 rounded-full border ${
              selectedDestination === d._id
                ? 'bg-gold border-gold text-forest font-medium'
                : 'border-neutral-300 text-forest'
            }`}
          >
            {d.name}
          </button>
        ))}
      </div>

      <StepLabel n={4} label="Your details" />
      <div className="grid grid-cols-2 gap-3 mb-2">
        <div>
          <label className="text-xs text-neutral-500 block mb-1">Full name</label>
          <input
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Your name"
            className="w-full text-sm border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="text-xs text-neutral-500 block mb-1">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@example.com"
            className="w-full text-sm border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:border-gold"
          />
        </div>
      </div>
      {formError && <p className="text-sm text-red-600 mb-3">{formError}</p>}

      <div className="flex flex-wrap items-center justify-between gap-3 pt-5 mt-3 border-t border-neutral-200">
        <p className="text-sm font-medium text-forest">
          {nights ? `${nights} night${nights > 1 ? 's' : ''}` : 'Select dates'} · {carName} · {destinationName}
        </p>
        <button
          onClick={handleConfirm}
          disabled={status === 'submitting'}
          className="inline-flex items-center gap-2 bg-forest text-cream text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-forest-light transition disabled:opacity-60"
        >
          <TbCheck /> {status === 'submitting' ? 'Booking…' : 'Confirm booking'}
        </button>
      </div>

      {status === 'success' && (
        <p className="text-sm text-forest-light mt-3">Booking received — we will be in touch to confirm.</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600 mt-3">Something went wrong. Start the backend server and try again.</p>
      )}
    </section>
  );
}
