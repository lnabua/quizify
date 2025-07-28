import express from "express";
import { OpenAI } from "openai";

const router = express.Router();

router.post("/", async (req, res) => {
  const { notes } = req.body;

  if (!notes) {
    return res.status(400).json({ error: "No notes provided" });
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = `
  From the following notes, generate 5 multiple-choice quiz questions in this exact JSON format:

  [
    {
      "question": "Question text here",
      "options": {
        "A": "Option A text",
        "B": "Option B text",
        "C": "Option C text",
        "D": "Option D text"
      },
      "answer": {
        "A": "Option A text"
      }
    },
    ...
  ]

Make sure the correct answer's letter and text match the options.

  Notes:
  ${notes}
  `;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    let quizText = completion.choices[0].message.content.trim();

    if (quizText.startsWith("```")) {
      quizText = quizText.replace(/```json|```/g, "").trim();
    }

    const quiz = JSON.parse(quizText);

    res.json({ quiz });
  } catch (err) {
    console.error("Error generating quiz:", err);
    res.status(500).json({ error: "Failed to generate quiz" });
  }
});

export default router;
