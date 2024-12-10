import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`server is runnig on ${port}`);
});
