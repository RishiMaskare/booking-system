import express from "express";
import {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
  deleteAccount,
} from "../controllers/user.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", protect, logoutUser);

router.get("/profile", protect, getCurrentUser);
router.delete("/profile", protect, deleteAccount);

export default router;
