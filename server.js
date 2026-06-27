import express from "express";
import DB from "./config/mongoose.js";
import { configDotenv } from "dotenv";
import SignupRouter from "./Routes/signup.js";
import LoginRouter from "./Routes/login.js";
import ProtectedRouter from "./Routes/protected.js";
import SupporterRouter from "./Routes/supporter.js";
import downloadResume from "./Routes/downloadResume.js";
import cors from "cors";

const app = express();
configDotenv();
DB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Succesfull Create");
});

app.use("/api/protected", ProtectedRouter);
app.use("/api/signup", SignupRouter);
app.use("/api/login", LoginRouter);
app.use("/api/supporter", SupporterRouter);
app.use("/api/downloadResume", downloadResume);

const Port = 3001;

app.listen(Port, () => {
  console.log("Server is on");
});
