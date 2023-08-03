import Button from "../Button";

interface QuizStartProps {
  startGame(): void;
}

function QuizStart({ startGame }: QuizStartProps) {
  return (
    <div>
      <h2>Mars Attack!!!</h2>
      <p>Protect Earth from a Martian invasion.</p>
      <p>
        Answer all the question correctly before the time runs out. All the
        answers can be found around the website.
      </p>
      <p>Correct answer will push the alien attacker away.</p>
      <p>Incorrect answer gives the alien a speed boost towards Earth.</p>
      <Button onClick={() => startGame()}>Start</Button>
    </div>
  );
}

export default QuizStart;
