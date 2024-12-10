import mongoose from "mongoose";
const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["income", "expense"],
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now(),
  },
});

export default transactionSchema;
