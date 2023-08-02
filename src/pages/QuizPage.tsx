import { useState } from "react";
import "./QuizPage.scss";
import GameOver from "../components/quiz/GameOver";
import QuizPassed from "../components/quiz/QuizPassed";
import QuizStart from "../components/quiz/QuizStart";
import Question from "../components/quiz/Question";

function QuizPage() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false, isClicked: false },
        { answerText: "London", isCorrect: false, isClicked: false },
        { answerText: "Paris", isCorrect: true, isClicked: false },
        { answerText: "Dublin", isCorrect: false, isClicked: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        {
          answerText: "Jeff Bezos",
          isCorrect: false,
          isClicked: false,
        },
        { answerText: "Elon Musk", isCorrect: true, isClicked: false },
        {
          answerText: "Bill Gates",
          isCorrect: false,
          isClicked: false,
        },
        {
          answerText: "Tony Stark",
          isCorrect: false,
          isClicked: false,
        },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true, isClicked: false },
        { answerText: "Intel", isCorrect: false, isClicked: false },
        { answerText: "Amazon", isCorrect: false, isClicked: false },
        { answerText: "Microsoft", isCorrect: false, isClicked: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false, isClicked: false },
        { answerText: "4", isCorrect: false, isClicked: false },
        { answerText: "6", isCorrect: false, isClicked: false },
        { answerText: "7", isCorrect: true, isClicked: false },
      ],
    },
  ];

  const [seconds, setSeconds] = useState(30);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [firstIncorrect, setFirstIncorrect] = useState(true);
  const [gameState, setGameState] = useState("gameMenu");

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
        if (nextQuestion < questions.length) {
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
      content = (
        <Question
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          questionText={questions[currentQuestion].questionText}
          timeLeft={seconds}
          answers={questions[currentQuestion].answerOptions}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
      );
  }

  return content;
}

export default QuizPage;
