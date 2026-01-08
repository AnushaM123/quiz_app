import { useEffect, useReducer } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Loader from "./components/Loader.jsx";
import Error from "./components/Error.jsx";
import StartScreen from "./components/StartScreen.jsx";

function App() {
  const initialState = {
    questions: [],
    status: "loading", //"loading", "ready", "error", "active"
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
      default:
        throw new Error("Unknown action type");
    }
  };

  

  const [state, dispatch] = useReducer(reducer, initialState);

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

  }, []);
  const { questions } = state;

  const numQuestions = questions.length;

  return (
    <>
      <Header />
      <Main>
        {state.status === "loading" && <Loader />}
        {state.status === "error" && <Error />}
        {state.status === "ready" && <StartScreen numQuestions={numQuestions} />}
      </Main>
    </>
  );
}

export default App;
