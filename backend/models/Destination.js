import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    tagline: { type: String, trim: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    gallery: [{ type: String }],
    highlights: [{ type: String }],
    bestTimeToVisit: { type: String },
    location: {
      lat: Number,
      lng: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Destination', destinationSchema);
