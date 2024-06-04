import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";

dotenv.config();

const { PORT, MONGO_URI } = process.env;

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

mongoose
    .connect(MONGO_URI, { dbName: "TodoApp" })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error: " + err));

app.listen(PORT, console.log(`Server is running on port: ${PORT}`));
