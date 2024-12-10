import { isValidObjectId } from "mongoose";
import User from "../models/user.js";

async function getHistory(req, res) {
  try {
    const { userId } = req.params;

    if (!isValidObjectId(userId)) {
      return res.status(400).json({ message: "invalid userId" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    res.status(200).json({
      message: "Transaction history fetched",
      data: { history_transaction: user.transaction },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "server error. try again", error: err.message });
  }
}

export default getHistory;
