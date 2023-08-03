interface GameOverProps {
  resetGame(): void;
}

function GameOver({ resetGame }: GameOverProps) {
  return (
    <div className="QuizPage__result">
      <h2>Game Over: Aliens have taken over earth!! 😱👽</h2>
      <button className="QuizPage__restart" onClick={() => resetGame()}>
        Restart
      </button>
    </div>
  );
}

export default GameOver;
