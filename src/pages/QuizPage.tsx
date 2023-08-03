import { useState, useEffect } from "react";
import "./QuizPage.scss";
import GameOver from "../components/quiz/GameOver";
import QuizPassed from "../components/quiz/QuizPassed";
import QuizStart from "../components/quiz/QuizStart";
import QuizQuestion from "../components/quiz/QuizQuestion";
import { Question, getRandomQuestions } from "../data/quizData";

import { useAnimate } from "framer-motion";

const gameSettings = {
  numOfQuestions: 10,
  maxTime: 30,
  maxVw: 72,
  startVw: 10,
  wrongTime: 3,
  correctTime: 3,
};

function QuizPage() {
  const [seconds, setSeconds] = useState(gameSettings.maxTime);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [firstIncorrect, setFirstIncorrect] = useState(true);
  const [gameState, setGameState] = useState("gameMenu");
  const [showAnimation, setShowAnimation] = useState(false);

  const [questions, setQuestions] = useState<Question[]>();

  // const controls = useAnimationControls();
  const [scope, animate] = useAnimate();

  const startAnimation = async () => {
    await animate(scope.current, { x: 0 }, { ease: "backOut", duration: 0 });
    animate(
      scope.current,
      { x: `${gameSettings.maxVw}vw` },
      { ease: "linear", duration: gameSettings.maxTime },
    );
  };

  const getNewX = (timeLeft: number) => {
    const newProgress =
      (gameSettings.maxTime - timeLeft) / gameSettings.maxTime;
    const newX = newProgress * gameSettings.maxVw;
    return `${newX}vw`;
  };

  const jumpBackAnimation = async () => {
    const newSeconds = Math.min(
      seconds + gameSettings.correctTime,
      gameSettings.maxTime,
    );
    const newX = getNewX(newSeconds);
    await animate(
      scope.current,
      { x: newX, rotateZ: [0, -150, 0] },
      { ease: "backOut", duration: 0.5 },
    );
    animate(
      scope.current,
      { x: `${gameSettings.maxVw}vw` },
      { ease: "linear", duration: newSeconds },
    );
  };

  const jumpFwdAnimation = async () => {
    let newSeconds = Math.max(seconds - gameSettings.wrongTime, 0);
    const newX = getNewX(newSeconds);
    if (newSeconds <= 0) {
      newSeconds = 0.1;
    }
    await animate(
      scope.current,
      { x: newX, rotateZ: [0, 20, 0] },
      { ease: "backOut", duration: 0.15 },
    );
    animate(
      scope.current,
      { x: `${gameSettings.maxVw}vw` },
      { ease: "linear", duration: newSeconds },
    );
  };

  useEffect(() => {
    setQuestions(getRandomQuestions(gameSettings.numOfQuestions));
  }, []);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setFirstIncorrect(true);
      jumpBackAnimation();
      setTimeout(() => {
        console.log("correct");
        setSeconds((prevSeconds) =>
          Math.min(prevSeconds + 5, gameSettings.maxTime),
        );
        setScore(score + 1);
        const nextQuestion = currentQuestion + 1;
        if (questions && nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setSeconds(0);
          setGameState("gameWon");
          setShowAnimation(false);
        }
      }, 500);
    } else {
      setSeconds((prevSeconds) =>
        Math.max(prevSeconds - gameSettings.wrongTime, 0),
      );
      jumpFwdAnimation();
      if (firstIncorrect) {
        setScore(score - 1);
        setFirstIncorrect(false);
      }
    }
  };

  function startGame() {
    setGameState("gameRunning");
    setShowAnimation(true);
    startTimer();
    startAnimation();
  }

  function resetGame() {
    setQuestions(getRandomQuestions(gameSettings.numOfQuestions));
    setSeconds(gameSettings.maxTime);
    setScore(0);
    setCurrentQuestion(0);
    setFirstIncorrect(false);
    startTimer();
    startAnimation();
    setGameState("gameRunning");
    setShowAnimation(true);
  }

  function startTimer() {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(interval);
          setGameState((prevState) => {
            if (prevState === "gameWon") {
              return "gameWon";
            } else {
              return "gameOver";
            }
          });
        }
        return Math.max(prevSeconds - 1, 0);
      });
    }, 1000);

    return () => clearInterval(interval);
  }

  let content: JSX.Element;

  switch (gameState) {
    case "gameMenu":
      content = <QuizStart startGame={startGame} />;
      break;
    case "gameOver":
      content = <GameOver resetGame={resetGame} />;
      break;
    case "gameWon":
      content = <QuizPassed resetGame={resetGame} score={score} />;
      break;
    default:
      content = questions ? (
        <QuizQuestion
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          questionText={questions[currentQuestion].questionText}
          timeLeft={seconds}
          answers={questions[currentQuestion].options}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
      ) : (
        <p>Loading...</p>
      );
  }

  return (
    <div
      className={`QuizPage ${
        gameState === "gameRunning" && seconds < 7.5 ? "flashing" : ""
      }`}
    >
      <div
        className={
          showAnimation
            ? "QuizPage__solar-system  "
            : "QuizPage__solar-system QuizPage__solar-system--hide"
        }
      >
        <div className="mars"></div>

        <div className="earth"></div>

        <div className="ufo" ref={scope}></div>
      </div>
      {content}
    </div>
  );
}

export default QuizPage;
