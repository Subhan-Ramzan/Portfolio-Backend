import express from "express";
import bcrypt from "bcryptjs";
import Signup from "../modules/signup.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Signup.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "Email not Found" });
      return;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Password is incorrect" });
      return;
    }
    const token = jwt.sign(
      {
        id: user._id,
        username : user.username,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    console.log(token);
    res.status(200).json({ message: "Login Succesfull", token });
  } catch (error) {
    console.error("Error in Login");
    res.status(400).json({ message: error.message });
    return;
  }
});

export default router;
