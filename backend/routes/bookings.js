import express from 'express';

const router = express.Router();

// In-memory store standing in for the Booking collection until a database
// is connected (see /models/Booking.js for the intended schema). Resets
// whenever the server restarts.
const bookings = [];

// GET /api/bookings
router.get('/', (req, res) => {
  res.json(bookings);
});

// POST /api/bookings
router.post('/', (req, res) => {
  const { customerName, email, startDate, endDate, destination, car } = req.body;

  if (!customerName || !email || !startDate || !endDate) {
    return res.status(400).json({
      message: 'customerName, email, startDate and endDate are required',
    });
  }

  const booking = {
    _id: `booking-${bookings.length + 1}`,
    customerName,
    email,
    phone: req.body.phone || '',
    startDate,
    endDate,
    destination: destination || null,
    car: car || null,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  bookings.push(booking);
  res.status(201).json({ message: 'Booking received', booking });
});

export default router;
