import { Link } from "react-router";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-zinc-100 text-zinc-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-zinc-200">
        <h1 className="text-5xl font-extrabold text-zinc-800 mb-4 tracking-tight">
          Quizify
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl text-zinc-700">
          Turn your study notes into interactive quizzes — instantly, using AI.
        </p>
        <Link to="/generate">
          <button className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-all font-semibold shadow-md">
            Get Started
          </button>
        </Link>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 text-center bg-zinc-100">
        <h2 className="text-3xl font-bold text-zinc-800 mb-12">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="bg-white p-6 shadow rounded-md border border-zinc-200">
            <h3 className="text-lg font-semibold mb-2 text-amber-700">
              1. Paste Notes
            </h3>
            <p className="text-sm text-zinc-600">
              Copy and paste your notes into the generator.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-md border border-zinc-200">
            <h3 className="text-lg font-semibold mb-2 text-amber-700">
              2. AI Generates Quiz
            </h3>
            <p className="text-sm text-zinc-600">
              Our AI transforms your notes into multiple-choice questions.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-md border border-zinc-200">
            <h3 className="text-lg font-semibold mb-2 text-amber-700">
              3. Review & Learn
            </h3>
            <p className="text-sm text-zinc-600">
              Answer the questions to reinforce your learning.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-zinc-500 border-t border-zinc-200">
        © 2025 Quizify. Built by Lorraine Nabua.
      </footer>
    </div>
  );
};

export default Home;
