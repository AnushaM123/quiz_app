import { useEffect, useReducer } from "react";

import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Loader from "./components/Loader.jsx";
import Error from "./components/Error.jsx";
import StartScreen from "./components/StartScreen.jsx";
import Question from "./components/Question.jsx";
import QuizCompleted from "./components/QuizCompleted.jsx";
import ProgressIndicator from "./components/ProgressIndicator.jsx";
import Next from "./components/Next.jsx";
import Footer from "./components/Footer.jsx";
import Timer from "./components/Timer.jsx";

function App() {
  const initialState = {
    questions: [],
    status: "loading", //"loading", "ready", "error", "active", "finished", "restart"
    index: 0,
    answer: null,
    points: 0,
    secondsRemaining: 300
  };


  const reducer = (state, action) => {
    switch (action.type) {
      case "dataRecieved":
        return {
          ...state,
          questions: action.payload,
          status: "ready",
        };
      case "dataFailed":
        return {
          ...state,
          status: "error",
        };
      case "start":
        return {
          ...state,
          status: "active",
        };
      
      case "newAnswer": {
        if(state.answer !== null) return state; // Prevent changing answer once given
        const question = state.questions.at(state.index);
        const isCorrect = question.correctAnswer === action.payload;
        return {
          ...state,
          answer: action.payload,
          points: isCorrect ? state.points + question.points : state.points,
        };
      }
      case "nextQuestion":  
        return {
          ...state,
          index: state.index < state.questions.length - 1 ? state.index + 1 : state.index,
          answer: null,
          status: state.index < state.questions.length - 1 ? "active" : "finished",
        };
      case "tick":
        return {
          ...state,
          secondsRemaining: state.secondsRemaining > 0 ? state.secondsRemaining - 1 : 0,
          status: state.secondsRemaining === 0 ? "finished" : "active",
        };
      case "restart":
        return {
          ...initialState,
          status: "restart",
        };
      default:
        throw new Error("Unknown action type");
    }
  };

  

  const [state, dispatch] = useReducer(reducer, initialState);
  const restart = state.status === 'restart';
  useEffect(() => {
    
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:8000/questions");
        const data = await response.json();
        dispatch({ type: "dataRecieved", payload: data });
      } catch (error) {
        console.error("error fetching questions:", error);
        dispatch({ type: "dataFailed" });
      }
      console.log("Questions apifetched");
    };


    fetchQuestions();
    console.log("Questions fetched");

  }, [restart]);

  
  const { questions,answer,points, index,secondsRemaining } = state;

  const numQuestions = questions.length;
  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);

  return (
    <>
      <Header />
      <Main>
        {state.status === "loading" && <Loader />}
        {state.status === "error" && <Error />}
        {state.status === "ready"  &&<StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {state.status === "active" && <>
          <ProgressIndicator index={index} numQuestions={numQuestions} points={points} totalPoints={totalPoints} />
          <Question question={questions[index]} dispatch={dispatch} answer={answer} />
        </>}
        {state.status === "finished" && <QuizCompleted points={points} numQuestions={numQuestions} dispatch={dispatch} />}
      </Main>
      {state.status === 'active' && <Footer>
        <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
        <Next dispatch={dispatch} answer={answer} />
      </Footer>}
    </>
  );
}

export default App;
