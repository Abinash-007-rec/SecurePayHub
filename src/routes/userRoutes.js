import express from "express";
const router = express.Router();

import {
  registerUser,
  loginUser,
  getProfile
} from "../controllers/userController.js";

import authMiddleware from "../middleware/authMiddleware.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getProfile);

export default router;