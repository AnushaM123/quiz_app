import Options from "./Options.jsx";

function Question({ question, dispatch, answer}) {
    const disabled = answer === null;
  return (
      <div className="py-4">
        <h4 className="text-center text-2xl">{question.question}</h4>
        <div>
          <Options question={question} dispatch={dispatch} answer={answer} />
        </div>
      <div className="flex justify-center pt-4">
        <button className={`w-32 items-center rounded-2xl px-4 py-2 text-white ${disabled ? "bg-gray-400" : "bg-cyan-500 hover:not-focus:bg-cyan-700"}`}
        onClick={() => dispatch({ type: "nextQuestion" })} disabled={disabled}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Question;
