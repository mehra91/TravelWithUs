import express from 'express';

const router = express.Router();

// In-memory store standing in for the CustomPackage collection until a
// database is connected (see /models/CustomPackage.js for the intended schema).
const packageRequests = [];

// GET /api/packages
router.get('/', (req, res) => {
  res.json(packageRequests);
});

// POST /api/packages
router.post('/', (req, res) => {
  const { destination, car, travelers, wantsDiscussion, message, contactEmail } = req.body;

  const request = {
    _id: `package-${packageRequests.length + 1}`,
    destination: destination || null,
    car: car || null,
    travelers: travelers || 1,
    wantsDiscussion: Boolean(wantsDiscussion),
    message: message || '',
    contactEmail: contactEmail || '',
    createdAt: new Date().toISOString(),
  };

  packageRequests.push(request);
  res.status(201).json({ message: 'Request received', request });
});

export default router;
