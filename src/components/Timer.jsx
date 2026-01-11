import { useEffect } from "react";

function Timer({ secondsRemaining, dispatch }) {
    const timeOut = secondsRemaining === 0;
    const mins = Math.floor(secondsRemaining / 60);
    const secs = secondsRemaining % 60;

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Timer tick");
            dispatch({ type: "tick" });
        }, 1000);
        return () => clearInterval(timer);
    }, [dispatch]);

    return (
        <div className="pt-4">
            <span className={`${timeOut ? "text-red-600" : "text-black fot bg-gray-400 px-6 py-2 text-center rounded-2xl"}`}>{`${timeOut ? "Time Out!" : `${mins}:${secs < 10 ? `0${secs}` : secs}`}`}</span>
        </div>
    );
}

export default Timer;
