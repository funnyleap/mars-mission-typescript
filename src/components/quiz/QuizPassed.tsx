import "./QuizPage.scss"; 

interface QuizPassedProps {
  resetGame(): void;
}

function QuizPassed({ resetGame }: QuizPassedProps) {
  return (
    <div className="QuizPage__result-pass">
      <h2>Congratulations! You've successfully completed the quiz!</h2>
      <h3>You're NASA material!!</h3>
      <button className="QuizPage__restart" onClick={resetGame}>Restart</button>
    </div>
  );
}

export default QuizPassed;
