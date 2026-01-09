function ProgressIndicator({ index, numQuestions, points, totalPoints }) {
    return (
        <header className="flex flex-col justify-center items-center pt-4 ">
        <input className="w-80 bg-amber-700" type="range" min="1" max={numQuestions} value={index} readOnly />
        <div className="flex justify-between py-2">
            <div className="w-80">
                Question <strong>{index}</strong> of {numQuestions}
            </div>
            <div>
                Points: <strong>{points}</strong> / {totalPoints}
            </div>
        </div>
        </header>
    );
}

export default ProgressIndicator;