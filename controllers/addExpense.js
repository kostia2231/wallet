import { isValidObjectId } from "mongoose";
import User from "../models/user.js";

async function addExpence(req, res) {
  try {
    const { userId, amount } = req.body;
    if (!userId || !amount) {
      return res.status(400).json({ message: "all field are required" });
    }

    if (typeof amount !== "number" || amount <= 0) {
      return res.status(400).json({ message: "invalid expence" });
    }

    if (!isValidObjectId(userId)) {
      return res.status(400).json({ message: "invalid userId" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    if (user.currentBalance < amount) {
      return res.status(400).json({ message: "insufficient balance" });
    }

    user.currentBalance -= amount;

    user.transaction.push({
      type: "expense",
      amount,
      date: new Date(),
    });

    await user.save();

    res.status(201).json({
      message: "expense added successfully",
      data: { currentBalance: user.currentBalance },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "server error. try again", error: err.message });
  }
}

export default addExpence;
