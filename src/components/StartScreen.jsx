function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="flex flex-col items-center gap-4 pt-8">
      <h2 className="text-2xl">Welcome to the React Quiz App</h2>
      <p className="text-lg">
        {numQuestions} questions to test your React mastery
      </p>
      <button
        className="rounded-xl bg-cyan-600 px-4 py-2 text-white hover:not-focus:bg-cyan-700"
        onClick={() => dispatch({ type: "start" })}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
