import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import quizRoute from "./routes/quiz.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use("/api/quiz", quizRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
