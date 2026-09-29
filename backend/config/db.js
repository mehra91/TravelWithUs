import mongoose from 'mongoose';

// Not called anywhere yet. The schemas under /models describe the intended
// shape of the data so the backend is ready to connect to MongoDB whenever
// you want to move off the in-memory mock data in /data/mockData.js.
//
// To go live:
//   1. Set MONGO_URI in your .env file.
//   2. Import and call connectDB() from server.js.
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
