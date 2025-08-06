const QuizPreview = ({ quiz }) => {
  if (!quiz || quiz.length === 0) return null;

  return (
    <div>
      <h2>Your Quiz</h2>
      {quiz.map((q, index) => (
        <div key={index}>
          <h3>
            {index + 1}. {q.question}
          </h3>
          {Object.entries(q.options).map(([letter, text]) => (
            <p>
              <span>{letter}.</span>
              <span>{text}</span>
            </p>
          ))}
          <h4>Correct Answer:</h4>
          <p>
            {Object.keys(q.answer)[0]}. {Object.values(q.answer)[0]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QuizPreview;
