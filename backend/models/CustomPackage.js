import mongoose from 'mongoose';

const customPackageSchema = new mongoose.Schema(
  {
    destination: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' },
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
    travelers: { type: Number, default: 1 },
    wantsDiscussion: { type: Boolean, default: false },
    message: { type: String },
    contactEmail: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model('CustomPackage', customPackageSchema);
