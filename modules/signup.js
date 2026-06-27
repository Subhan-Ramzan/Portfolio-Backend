import mongoose, { Schema } from "mongoose";

const SignupSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Signup = mongoose.models.signup || mongoose.model("signup", SignupSchema);
export default Signup;
