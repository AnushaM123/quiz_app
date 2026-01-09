function Options({ question, dispatch, answer }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 pt-4">
      {question.options.map((option) => {
        const isSelected = option === answer;
        const hasAnswered = answer !== null;

        return (
          <button
            key={option}
            disabled={hasAnswered}
            onClick={() =>
              dispatch({ type: "newAnswer", payload: option })
            }
            className={`
              w-80 py-2 px-4 rounded-2xl text-white transition-all
              ${
                hasAnswered
                  ? isSelected
                    ? "bg-amber-600"
                    : "bg-gray-400"
                  : "bg-cyan-500 hover:bg-cyan-700"
              }
            `}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
