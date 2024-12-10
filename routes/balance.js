import { Router } from "express";
import addBalance from "../controllers/addBalance.js";
import addExpence from "../controllers/addExpense.js";
import setBalance from "../controllers/setBalance.js";

const router = Router();

router.post("/set-balance", setBalance);
router.post("/add-balance", addBalance);
router.post("/add-expense", addExpence);

export default router;
