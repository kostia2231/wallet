import mongoose from "mongoose";
import transactionSchema from "./transaction";
const userSchema = new mongoose.Schema({
  initialBalance: {
    type: Number,
    required: true,
  },
  currentBalance: {
    type: Number,
    required: true,
  },
  transaction: [transactionSchema],
});

const User = mongoose.model("User", userSchema);
export default User;
