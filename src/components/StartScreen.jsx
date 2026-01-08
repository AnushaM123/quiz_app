function StartScreen({ numQuestions }) {
  return (
    <div className="flex flex-col items-center gap-4 pt-8">
      <h2 className="text-2xl">Welcome to the React Quiz App</h2>
      <p className="text-lg">{numQuestions} questions to test your React mastery</p>
      <button className="bg-cyan-600 hover:not-focus:bg-cyan-700 text-white px-4 py-2 rounded-xl">Start Quiz</button>
    </div>
  );
}

export default StartScreen;
