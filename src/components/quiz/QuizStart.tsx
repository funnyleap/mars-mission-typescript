interface QuizStartProps {
  startGame(): void;
}

function QuizStart({ startGame }: QuizStartProps) {
  return (
    <div>
      <h2>Mars Attack</h2>
      <p>Protect Earth from a Martian invasion</p>
      <p>Answer all the question correctly before the time runs out</p>
      <p>Correct answer pushing the alien attacker away</p>
      <p>Incorrect answer gives the alien a speed boost towards Earth</p>
      <button onClick={() => startGame()}>Start</button>
    </div>
  );
}

export default QuizStart;
