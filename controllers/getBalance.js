import { isValidObjectId } from "mongoose";
import User from "../models/user.js";

async function getBalance(req, res) {
  try {
    const { userId } = req.params;

    if (!isValidObjectId(userId)) {
      return res.status(400).json({ message: "invalid userId" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    return res.status(200).json({
      message: "balance fetched",
      data: { currentBalance: user.currentBalance },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "server error. try again", error: err.message });
  }
}

export default getBalance;
