import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, {});
    console.log("connected to mongo");
  } catch (err) {
    console.error("faild to connect to mongo", err.message);
  }
};

export default connectDB;
