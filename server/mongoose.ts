import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGO_URI) {
    console.error('\x1b[31mError: MONGO_URI environment variable is not set\x1b[0m');
    return;
  }

  if (isConnected) {
    console.log('\x1b[33mWarning: Already connected to MongoDB\x1b[0m');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log('\x1b[32mConnected to MongoDB\x1b[0m');
  } catch (error: any) {
    isConnected = false;
    console.error('\x1b[31mError:\x1b[0m Connecting to MongoDB:', error.message);
  }
};
