import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./db/index.js";
import balanceRouter from "./routes/balance.js";

const app = express();
const port = process.env.PORT || 8080;
connectDB();
app.use(cors());
app.use(express.json());

//routes
app.use("/api", balanceRouter);

app.listen(port, () => {
  console.log(`server is runnig on ${port}`);
});
