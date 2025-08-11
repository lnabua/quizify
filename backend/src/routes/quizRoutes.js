import express from "express";
import { OpenAI } from "openai";
import Quiz from "../models/Quiz.js";
import protectRoute from "../middleware/auth.js";

const router = express.Router();

router.post("/", protectRoute, async (req, res) => {
  const { notes } = req.body;

  if (!notes) {
    return res.status(400).json({ error: "No notes provided" });
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = `
  You are a strict JSON generator. From the NOTES below, return a quiz in EXACTLY this JSON shape.
  Return ONLY valid JSON. Do NOT wrap in markdown. Do NOT add commentary, examples, or extra fields.

  REQUIRED SHAPE:
  {
    "quizTitle": "string (<= 80 chars)",
    "questions": [
      {
        "question": "string (<= 200 chars)",
        "options": {
          "A": "string",
          "B": "string",
          "C": "string",
          "D": "string"
        },
        "answer": {
          "letter": "A" | "B" | "C" | "D",
          "text": "string"
        }
      }
    ]
  }

  STRICT RULES:
  - Exactly 5 questions.
  - Use ONLY facts from NOTES; do not invent.
  - "options" MUST include keys A, B, C, D.
  - "answer.letter" MUST be one of A/B/C/D.
  - "answer.text" MUST equal options[answer.letter] EXACTLY.
  - No trailing commas, no comments, no markdown fences, no extra keys.

  NOTES:
  ${notes}
  `;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
    });

    let quizText = completion.choices[0].message.content.trim();

    if (quizText.startsWith("```")) {
      quizText = quizText.replace(/```json|```/g, "").trim();
    }

    const quizData = JSON.parse(quizText);

    // Create new quiz document with the Quiz model
    const newQuiz = new Quiz({
      quizTitle: quizData.quizTitle,
      notes: notes, // Store the original notes
      questions: quizData.questions,
      user: req.user?._id || null, // Associate with user if authenticated
    });

    // Save to MongoDB
    const savedQuiz = await newQuiz.save();

    res.status(201).json(savedQuiz);
  } catch (error) {
    console.error("Error generating or saving quiz:", error);
    res.status(500).json({ error: "Failed to generate and save quiz" });
  }
});

router.get("/", protectRoute, async (req, res) => {
  try {
    const quizzes = await Quiz.find().sort({ createdAt: -1 });

    const totalQuizzes = await Quiz.countDocuments();

    res.send({
      quizzes,
      totalQuizzes,
    });
  } catch (error) {
    console.error("Error in get all quizzes route", error);
    res.status(500).json({ error: "Failed to get all quizzes" });
  }
});

router.delete("/:id", protectRoute, async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    if (quiz.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    await quiz.deleteOne();
    res.json({ message: "Book deleted sucessfully" });
  } catch (error) {
    console.error("Error in deleting quiz", error);
    res.status(500).json({ error: "Failed to delete quiz" });
  }
});

export default router;
