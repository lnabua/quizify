import { useState } from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import QuizForm from "../components/QuizForm";
import { useNavigate } from "react-router";

const GenerateQuizPage = () => {
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleGenerateQuiz = async (notes) => {
    setLoading(true); //disables quiz form while new quiz is being generated
    setQuiz(null); //clear previously generated quiz

    const loadingToast = toast.loading("Generating your quiz...");

    try {
      const response = await api.post("/quiz", { notes });
      console.log(response.data.quiz);
      setQuiz(response.data.quiz); //TBD: might not need since res.data is being used in another page
      toast.success("Quiz generated successfully!", { id: loadingToast });
      navigate("/quiz", { state: { quiz: response.data.quiz } });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.", {
        id: loadingToast,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Generate a Quiz</h1>
        <p className="text-center text-zinc-600 mb-10">
          Paste your study notes below and let AI turn them into a quiz.
        </p>

        {!quiz && <QuizForm onSubmit={handleGenerateQuiz} loading={loading} />}
      </div>
    </div>
  );
};

export default GenerateQuizPage;
