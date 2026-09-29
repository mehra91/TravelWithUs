import express from 'express';
import { cars } from '../data/mockData.js';

const router = express.Router();

// GET /api/cars
router.get('/', (req, res) => {
  res.json(cars);
});

// GET /api/cars/:id
router.get('/:id', (req, res) => {
  const car = cars.find((c) => c._id === req.params.id);
  if (!car) return res.status(404).json({ message: 'Car not found' });
  res.json(car);
});

export default router;
