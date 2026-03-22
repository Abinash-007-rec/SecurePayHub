import dotenv from "dotenv";
dotenv.config();

import express from "express";
import userRoutes from "./routes/userRoutes.js";
import db from "./config/db.js";

console.log("ENV CHECK 👉", {
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD ? "LOADED" : "MISSING",
  DB_NAME: process.env.DB_NAME,
});

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);

(async () => {
  try {
    const connection = await db.getConnection();
    console.log("✅ MySQL Connected Successfully");
    connection.release();
  } catch (error) {
    console.error("❌ MySQL connection failed:", error.message);
  }
})();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
console.log("Pipeline test");