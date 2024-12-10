import User from "../models/user.js";
import { isValidObjectId } from "mongoose";

async function addBalance(req, res) {
  try {
    const { userId, amount } = req.body;

    if (!userId || !amount) {
      return res.status(400).json({ message: "all fields are required" });
    }

    if (typeof amount !== "number" || amount <= 0) {
      return res.status(400).json({ message: "invalid income" });
    }

    if (!isValidObjectId(userId)) {
      return res.status(404).json({ message: "userId is not valid" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    user.currentBalance += amount;

    user.transaction.push({
      type: "income",
      amount,
      date: new Date(),
    });

    await user.save();

    res.status(200).json({
      message: "balance is replenished",
      data: { currentBalance: user.currentBalance },
    });
  } catch (err) {
    res.status(500).json({ message: "server error. try again" });
  }
}

export default addBalance;
