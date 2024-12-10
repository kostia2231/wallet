import User from "../models/user.js";

async function setBalance(req, res) {
  try {
    const initialBalace = req.body.initialBalace;
    if (
      !initialBalace ||
      typeof initialBalace !== "number" ||
      initialBalace < 0
    ) {
      return res.status(400).json({ message: "incorrect initial balance" });
    }

    const user = new User({
      initialBalace,
      currentBalance: initialBalace,
      transaction: [],
    });

    user.save();
    res.status(201).json({
      message: "user was created",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ message: "server error. try again" });
  }
}

export default setBalance;
