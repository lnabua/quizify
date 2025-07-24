import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import quizRoute from "./routes/quiz.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/quiz", quizRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
