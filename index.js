import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { connectToMongoDB } from "./connection.js";
import AuthRouter from "./routes/AuthRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

connectToMongoDB();

app.use("/auth", AuthRouter);

app.listen(PORT, () => {
  console.log(`app is listening at port ${PORT}`);
});
