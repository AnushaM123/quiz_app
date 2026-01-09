function QuizCompleted({ points, numQuestions, dispatch }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold">Quiz Completed</h2>
            <p className="mt-4">
                You scored {points} out of {numQuestions} points.
            </p>
            <button onClick={() => dispatch({ type: "restart" })} className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded-2xl hover:bg-cyan-700">
                Restart Quiz
            </button>
        </div>
    );
}
 export default QuizCompleted;