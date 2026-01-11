function Next({dispatch, answer}) {
    const disabled = answer === null;

    return (
        <div className="pt-4">
        <button className={`w-32 items-center rounded-2xl px-4 py-2 text-white ${disabled ? "bg-gray-400" : "bg-cyan-500 hover:not-focus:bg-cyan-700"}`}
        onClick={() => dispatch({ type: "nextQuestion" })} disabled={disabled}>
          Next
        </button>
      </div>
    );
}

export default Next;