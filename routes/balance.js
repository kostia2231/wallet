import { Router } from "express";
import setBalance from "../controllers/setBalance.js";
import addBalance from "../controllers/addBalance.js";

const router = Router();

router.post("/set-balance", setBalance);
router.post("/add-balance", addBalance);

export default router;
