import express from 'express';
import { destinations } from '../data/mockData.js';

const router = express.Router();

// GET /api/destinations
router.get('/', (req, res) => {
  res.json(destinations);
});

// GET /api/destinations/:slug
router.get('/:slug', (req, res) => {
  const destination = destinations.find((d) => d.slug === req.params.slug);
  if (!destination) return res.status(404).json({ message: 'Destination not found' });
  res.json(destination);
});

export default router;
