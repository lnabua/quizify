import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import QuizCard from "../components/QuizCard";

const QuizPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const quiz = location.state?.quiz;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  if (!quiz) {
    return (
      <div className="p-8 text-center">
        <p>No quiz data found.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => navigate("/generate")}
        >
          Try Again
        </button>
      </div>
    );
  }

  const saveAnswer = (index, selectedAnswer, result) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: { selectedAnswer, result },
    }));
  };

  const handleNext = () => {
    if (currentIndex < quiz.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="border p-6 rounded-lg shadow-lg bg-white w-full max-w-md">
        {
          <QuizCard
            questionData={quiz[currentIndex]}
            questionNumber={currentIndex + 1}
            totalQuestions={quiz.length}
            savedAnswer={answers[currentIndex]?.selectedAnswer ?? null}
            savedResult={answers[currentIndex]?.result ?? null}
            onSave={(selectedAnswer, result) =>
              saveAnswer(currentIndex, selectedAnswer, result)
            }
          />
        }

        <div className="flex justify-between mt-4">
          {currentIndex > 0 ? (
            <button onClick={handleBack}>Back</button>
          ) : (
            <div />
          )}
          {currentIndex < quiz.length - 1 ? (
            <button onClick={handleNext}>Next</button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
