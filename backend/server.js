import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import destinationsRouter from './routes/destinations.js';
import carsRouter from './routes/cars.js';
import bookingsRouter from './routes/bookings.js';
import packagesRouter from './routes/packages.js';
// import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// No database is connected yet. Routes below read from the in-memory
// data in ./data/mockData.js so the API works out of the box.
// To go live: set MONGO_URI in .env, then uncomment the import and the
// connectDB() call, and swap the route handlers to use the models in ./models.
// connectDB();

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'TravelPartner API is running (in-memory mode, no database connected)' });
});

app.use('/api/destinations', destinationsRouter);
app.use('/api/cars', carsRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/packages', packagesRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`TravelPartner API listening on port ${PORT}`);
});
