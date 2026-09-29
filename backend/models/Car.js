import mongoose from 'mongoose';

const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, enum: ['sedan', 'suv'], required: true },
    seats: { type: Number, required: true },
    pricePerDay: { type: Number, required: true },
    image: { type: String, required: true },
    features: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model('Car', carSchema);
