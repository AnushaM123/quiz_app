import Options from "./Options.jsx";

function Question({ question, dispatch, answer}) {
  return (
      <div className="py-4">
        <h4 className="text-center text-2xl">{question.question}</h4>
        <div>
          <Options question={question} dispatch={dispatch} answer={answer} />
        </div>
      
    </div>
  );
}

export default Question;
