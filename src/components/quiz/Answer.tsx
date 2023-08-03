import { useState } from "react";
import Button from "../Button";
import "./Answer.scss";

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
    setTimeout(() => {
      setButtonClicked(false);
    }, 500);

    handleAnswerOptionClick(isCorrect);
  }

  const clickedClassName = isCorrect
    ? "QuizPage__answer QuizPage__answer--correct"
    : "QuizPage__answer QuizPage__answer--incorrect";

  return (
    <Button
      className={buttonClicked ? clickedClassName : "QuizPage__answer"}
      onClick={() => onClickHandler(isCorrect)}
    >
      {answerText}
    </Button>
  );
}
