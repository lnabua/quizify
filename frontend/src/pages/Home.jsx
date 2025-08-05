import api from "../lib/axios";
import { useEffect } from "react";
import { Link } from "react-router";

const Home = () => {
  // Testing frontend/backend connection
  useEffect(() => {
    api
      .get("/quiz")
      .then((res) => {
        console.log("Response from backend:", res.data);
      })
      .catch((err) => {
        console.error("Error connecting to backend:", err);
      });
  }, []);

  return (
    <div className="flex w-full flex-col h-screen">
      <div className="flex flex-col justify-center items-center bg-primary-content h-1/2">
        <h1 className="text-white text-5xl font-bold">Quizify</h1>
        <h2 className="text-white text-2xl font-bold mt-2">
          AI Quiz Generator
        </h2>
        <p className="text-white text-lg">
          Convert any text into an interactive quiz in seconds.
        </p>
        <div className="mt-2">
          <Link to="/generate" className="btn btn-primary btn-lg">
            Let's Get Started!
          </Link>
        </div>
      </div>
      <div className="hero bg-base-200 h-1/2">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://picsum.photos/200/300"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold">Here's how it works</h1>
            <p className="pb-5 text-lg">Make a quiz in 60 seconds.</p>
            <ol className="list-decimal pl-6 marker:text-base-content marker:font-bold text-lg">
              <li>
                Insert content you want to make a quiz from, e.g. an excerpt
                from a Wikipedia article.
              </li>
              <li>Press Generate Quiz and test the result!</li>
              <li>
                Click View quiz to add more questions, change the design and
                collect responses.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
