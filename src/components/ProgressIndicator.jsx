function ProgressIndicator({ index, numQuestions, points, totalPoints }) {
  return (
    <header className="flex flex-col items-center justify-center pt-4">
      <progress
        className="h-2 w-80 appearance-none overflow-hidden rounded-3xl [&::-moz-progress-bar]:bg-amber-600 [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:rounded-3xl [&::-webkit-progress-value]:bg-amber-600"
        min="1"
        max={numQuestions}
        value={index}
        readOnly
      />
      <div className="flex justify-between py-2">
        <div className="w-80">
          Question <strong>{index + 1}</strong> of {numQuestions}
        </div>
        <div>
          Points: <strong>{points}</strong> / {totalPoints}
        </div>
      </div>
    </header>
  );
}

export default ProgressIndicator;
