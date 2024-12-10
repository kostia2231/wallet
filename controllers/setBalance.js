import User from "../models/user.js";

async function setBalance(req, res) {
  try {
    const initialBalance = req.body.initialBalance;
    if (
      !initialBalance ||
      typeof initialBalance !== "number" ||
      initialBalance < 0
    ) {
      return res.status(400).json({ message: "incorrect initial balance" });
    }

    const user = new User({
      initialBalance,
      currentBalance: initialBalance,
      transaction: [],
    });

    await user.save();
    res.status(201).json({
      message: "user was created",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ message: "server error. try again" });
  }
}

export default setBalance;
