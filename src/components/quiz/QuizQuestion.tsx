import { Option } from "../../data/quizData";
import Answer from "./Answer";
import "./QuizQuestion.scss";

interface QuestionProps {
  questionNumber: number;
  totalQuestions: number;
  questionText: string;
  timeLeft: number;
  answers: Option[];
  handleAnswerOptionClick(isCorrect: boolean): void;
}

function QuizQuestion({
  questionNumber,
  totalQuestions,
  questionText,
  answers,
  handleAnswerOptionClick,
}: QuestionProps) {
  return (
    <>
      <div className="QuizPage__question-section">
        <p className="QuizPage__question-count">
          Question {questionNumber}/{totalQuestions}
        </p>
        <p className="QuizPage__question-text">{questionText}</p>
      </div>
      <div className="QuizPage__answers">
        {answers.map((answerOption) => (
          <Answer
            key={answerOption.optionText}
            isCorrect={answerOption.isCorrect}
            answerText={answerOption.optionText}
            onClick={handleAnswerOptionClick}
          />
        ))}
      </div>
    </>
  );
}

export default QuizQuestion;
