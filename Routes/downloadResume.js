import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/download", (req, res) => {
  const filepath = path.join(__dirname, "../files", "SubhanResume.pdf");
  res.download(filepath, "SubhanResume.pdf", (err) => {
    if (err) {
      res.status(500).send("Error Downloading File");
    }
  });
});

export default router;
