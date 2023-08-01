import { useState } from "react";

interface AnswerProps {
  isCorrect: boolean;
  answerText: string;
  handleAnswerOptionClick(isCorrect: boolean): void;
}

export default function Answer({
  isCorrect,
  answerText,
  handleAnswerOptionClick,
}: AnswerProps) {
  const [buttonClicked, setButtonClicked] = useState(false);

  function onClickHandler(isCorrect: boolean) {
    setButtonClicked(true);
    handleAnswerOptionClick(isCorrect);
  }

  // function resetAnswer(){
  //     setButtonClicked(false)
  // }

  const clickedClassName = isCorrect
    ? "QuizPage__answer QuizPage__answer--correct"
    : "QuizPage__answer QuizPage__answer--incorrect";

  return (
    <button
      className={buttonClicked ? clickedClassName : "QuizPage__answer"}
      onClick={() => onClickHandler(isCorrect)}
    >
      {answerText}
    </button>
  );
}
