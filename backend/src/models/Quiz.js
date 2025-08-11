import mongoose from "mongoose";

const { Schema } = mongoose;

const optionsSchema = new Schema(
  {
    A: { type: String, required: true, trim: true },
    B: { type: String, required: true, trim: true },
    C: { type: String, required: true, trim: true },
    D: { type: String, required: true, trim: true },
  },
  { _id: false }
);

const answerSchema = new Schema(
  {
    letter: {
      type: String,
      required: true,
      enum: ["A", "B", "C", "D"], // prevents invalid letters
    },
    text: { type: String, required: true, trim: true },
  },
  { _id: false }
);

const questionSchema = new Schema(
  {
    question: { type: String, required: true, trim: true, maxlength: 200 },
    options: { type: optionsSchema, required: true },
    answer: {
      type: answerSchema,
      required: true,
      validate: {
        validator: function (ans) {
          if (!ans) return false;
          const { letter, text } = ans;
          // Ensure answer.text exactly equals the chosen option’s text
          return this.options?.[letter] === text;
        },
        message: "answer.text must exactly equal options[answer.letter].",
      },
    },
  },
  { _id: false }
);

const quizSchema = new Schema(
  {
    quizTitle: { type: String, required: true, trim: true, maxlength: 80 },
    notes: { type: String, default: "" },
    questions: {
      type: [questionSchema],
      validate: {
        validator: (arr) => Array.isArray(arr) && arr.length === 5,
        message: "questions must be an array of exactly 5 items.",
      },
      required: true,
    },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
