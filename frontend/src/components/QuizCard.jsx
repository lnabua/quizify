import { useEffect, useState } from "react";

const QuizCard = ({
  questionData,
  questionNumber,
  totalQuestions,
  savedAnswer,
  savedResult,
  onSave,
}) => {
  const { question, options, answer } = questionData;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [result, setResult] = useState(null);
  const correctAnswer = Object.values(answer)[0];

  useEffect(() => {
    setSelectedAnswer(savedAnswer ?? null);
    setResult(savedResult ?? null);
  }, [questionNumber, savedAnswer, savedResult]);

  const handleChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleCheckAnswer = () => {
    const res = selectedAnswer === correctAnswer ? "correct" : "wrong";
    setResult(res);
    if (onSave) {
      onSave(selectedAnswer, res);
    }
  };

  return (
    <div className="p-4">
      <h2>{`Question ${questionNumber} of ${totalQuestions}`}</h2>
      <p className="mt-2 font-bold">{question}</p>

      <div className="flex flex-col space-y-2 mt-2">
        {Object.entries(options).map(([key, text]) => (
          <label key={key} className="flex items-center space-x-2">
            <input
              type="radio"
              value={text}
              checked={selectedAnswer === text}
              onChange={handleChange}
            />
            <span>
              {key}: {text}
            </span>
          </label>
        ))}
      </div>
      <div className="pt-6">
        <button
          onClick={handleCheckAnswer}
          className=" bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition"
        >
          Answer
        </button>
        {result === "correct" && (
          <p className="mt-2 text-green-600">Correct!</p>
        )}
        {result === "wrong" && (
          <p className="mt-2 text-red-600">Correct Answer: {correctAnswer}</p>
        )}
      </div>
    </div>
  );
};

export default QuizCard;
