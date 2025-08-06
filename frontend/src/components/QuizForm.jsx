import { useState } from "react";

const QuizForm = ({ onSubmit, loading }) => {
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(notes);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md border border-zinc-200"
    >
      <textarea
        className="w-full p-4 h-40 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 resize-none text-sm"
        placeholder="Paste your notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        required
      ></textarea>

      <button
        type="submit"
        className="mt-4 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded-md transition-all"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Quiz"}
      </button>
    </form>
  );
};

export default QuizForm;
