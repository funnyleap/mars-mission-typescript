import { useState } from "react";
import "./QuizPage.scss";
import Answer from "../components/quiz/Answer";

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

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setTimeout(() => {
        console.log("correct");
        // setButtonClicked(false);
        setScore(score + 1);
        //Change the button to correct
        //Increase timer
        // Move onto next question
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setShowResults(true);
        }
      }, 500);
    } else {
      // Change button to incorrect
      // Reduce timer
    }
  };

  return (
    <div className="QuizPage">
      {showResults ? (
        <div className="QuizPage__result">
          You scored {score} out of {questions.length}
        </div>
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
