import express from "express";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.get("/", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Token Verified", user: req.user });
});

export default router;
