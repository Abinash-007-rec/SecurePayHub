import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use("/api", userRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});