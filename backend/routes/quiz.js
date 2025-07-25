// import express from "express";
// import { OpenAI } from "openai";

// const router = express.Router();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// router.post("/", async (req, res) => {
//   const { notes } = req.body;

//   if (!notes) {
//     return res.status(400).json({ error: "No notes provided" });
//   }

//   const prompt = `
//   Create 5 multiple-choice quiz questions from the following study notes.
//   Each question should have 4 options and indicate the correct answer clearly.
//   Notes:
//   ${notes}
//   `;

//   try {
//     const completion = await openai.chat.completions.create({
//       model: "gpt-4",
//       messages: [{ role: "user", content: prompt }],
//       temperature: 0.7,
//     });

//     const quizText = completion.choices[0].message.content;
//     res.json({ quiz: quizText });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;
