import Supporter from "../modules/supporter.js";
import express from "express";

const router = express.Router();

router.post("/save", async (req, res) => {
  try {
    const { name, message, amount } = req.body;
    const supporter = new Supporter({ name, message, amount });
    await supporter.save();
    res.status(200).json({ message: "Supporter saved successfully" });
  } catch (error) {
    console.error("Error saving supporter:", error);
    res.status(500).json({ message: "Error saving supporter" });
  }
});

router.get("/call", async (req, res) => {
  try {
    const supporters = await Supporter.find({});
    res.status(200).json({ supporters });
  } catch (error) {
    console.error("Error fetching supporters:", error);
    res.status(500).json({ message: "Error fetching supporters" });
  }
});

export default router;
