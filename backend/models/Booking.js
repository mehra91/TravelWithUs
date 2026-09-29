import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    destination: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' },
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model('Booking', bookingSchema);
