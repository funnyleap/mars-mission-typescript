import { useState, useEffect } from "react";
import "./QuizPage.scss";
import Answer from "../components/quiz/Answer";
import GameOver from "../components/quiz/GameOver";

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
        { answerText: "Jeff Bezos", isCorrect: false, isClicked: false },
        { answerText: "Elon Musk", isCorrect: true, isClicked: false },
        { answerText: "Bill Gates", isCorrect: false, isClicked: false },
        { answerText: "Tony Stark", isCorrect: false, isClicked: false },
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
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [firstIncorrect, setFirstIncorrect] = useState(true);

  useEffect(() => {
    startTimer()
  }, []);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setFirstIncorrect(true)
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
          setGameOver(true);
          setSeconds(0)
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

  function resetGame() {
    setSeconds(30);
    setScore(0);
    setCurrentQuestion(0);
    setGameOver(false);
    setFirstIncorrect(false);
    startTimer();
  }

  function startTimer() {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          setGameOver(true)
          clearInterval(interval);
        }
        return Math.max(prevSeconds - 1, 0);
      });
    }, 1000);

    return () => clearInterval(interval);
  }

  return (
    <div className="QuizPage">
      {gameOver ? (
        <GameOver resetGame={resetGame} />
      ) : (
        <>
          <div className="QuizPage__question-section">
            <div className="QuizPage__question-count">
              <p>
                Question {currentQuestion + 1}/{questions.length}
              </p>
            </div>
            <div className="QuizPage__question-text">
              <p>{questions[currentQuestion].questionText}</p>
            </div>
          </div>
          <div>
            <p>Score: {score}</p>
            <p>Timer: {seconds}</p>
          </div>
          <div className="QuizPage__answers">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <Answer
                isCorrect={answerOption.isCorrect}
                answerText={answerOption.answerText}
                handleAnswerOptionClick={handleAnswerOptionClick}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default QuizPage;
