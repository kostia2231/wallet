import { Router } from "express";
import addBalance from "../controllers/addBalance.js";
import addExpence from "../controllers/addExpense.js";
import setBalance from "../controllers/setBalance.js";
import getBalance from "../controllers/getBalance.js";
import getHistory from "../controllers/getHistory.js";

const router = Router();

router.post("/set-balance", setBalance);
router.post("/add-balance", addBalance);
router.post("/add-expense", addExpence);

router.get("/get-balance/:userId", getBalance);
router.get("/get-history-transaction/:userId", getHistory);

export default router;
