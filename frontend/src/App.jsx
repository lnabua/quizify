import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import GenerateQuizPage from "./pages/GenerateQuizPage";
import QuizPage from "./pages/QuizPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/generate" element={<GenerateQuizPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </div>
  );
};

export default App;
