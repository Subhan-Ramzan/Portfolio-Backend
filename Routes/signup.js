import express from "express";
import Signup from "../modules/signup.js";
import bcryptjs from "bcryptjs";
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const { username, email, password, profileImage } = req.body;
    if (!username) {
      res.status(400).json({ message: "Please Input Username" });
      return;
    }
    if (!email || !password) {
      res.status(400).json({ message: "Please Input Email or Password" });
      return;
    }
    if (!profileImage) {
      res.status(400).json({ message: "Profile Image is Missing" });
      return;
    }
    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      console.log("Email Already Exit");
      res.status(400).json({ message: "Email Already Exit" });
      return;
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const Account = new Signup({
      username: username,
      email: email,
      password: hashedPassword,
      profileImage: profileImage,
    });
    await Account.save();
    res.status(201).json({ message: `Account Create` });
  } catch (error) {
    console.error(`Create Account Error: ${error.message}`);
  }
});

export default router;
