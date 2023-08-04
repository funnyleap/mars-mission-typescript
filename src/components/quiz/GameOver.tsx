import Button from "../Button";

interface GameOverProps {
  resetGame(): void;
}

function GameOver({ resetGame }: GameOverProps) {
  return (
    <div className="QuizPage__result">
      <h2>Game Over: Aliens have taken over earth!! 😱👽</h2>
      <Button className="QuizPage__restart" onClick={() => resetGame()}>
        Restart
      </Button>
    </div>
  );
}

export default GameOver;
