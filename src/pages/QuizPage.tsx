import { useState, useEffect } from "react";
import "./QuizPage.scss";
import GameOver from "../components/quiz/GameOver";
import QuizPassed from "../components/quiz/QuizPassed";
import QuizStart from "../components/quiz/QuizStart";
import QuizQuestion from "../components/quiz/QuizQuestion";
import { Question, getRandomQuestions } from "../data/quizData";

function QuizPage() {
  const [seconds, setSeconds] = useState(30);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [firstIncorrect, setFirstIncorrect] = useState(true);
  const [gameState, setGameState] = useState("gameMenu");

  const [questions, setQuestions] = useState<Question[]>();

  useEffect(() => {
    setQuestions(getRandomQuestions(10));
  }, []);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setFirstIncorrect(true);
      setTimeout(() => {
        console.log("correct");
        setSeconds((prevSeconds) => Math.min(prevSeconds + 5, 30));
        // setButtonClicked(false);
        setScore(score + 1);
        //Change the button to correct
        //Increase timer
        // Move onto next question
        const nextQuestion = currentQuestion + 1;
        if (questions && nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setSeconds(0);
          setGameState("gameWon");
        }
      }, 500);
    } else {
      setSeconds((prevSeconds) => Math.max(prevSeconds - 5, 0));
      if (firstIncorrect) {
        setScore(score - 1);
        setFirstIncorrect(false);
      }
      // Change button to incorrect
      // Reduce timer
    }
  };

  function startGame() {
    setGameState("gameRunning");
    startTimer();
  }

  function resetGame() {
    setSeconds(30);
    setScore(0);
    setCurrentQuestion(0);
    setFirstIncorrect(false);
    startTimer();
    setGameState("gameRunning");
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
      content = <QuizPassed resetGame={resetGame} />;
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

  return content;
}

export default QuizPage;
