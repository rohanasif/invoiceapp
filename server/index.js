import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import createConnection from "./configuration/db.js";
import router from "./routes/router.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
createConnection();
app.use(router);
app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
