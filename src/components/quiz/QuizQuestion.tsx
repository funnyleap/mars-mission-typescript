import { Option } from "../../data/quizData";
import Answer from "./Answer";

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
  timeLeft,
  answers,
  handleAnswerOptionClick,
}: QuestionProps) {
  return (
    <>
      <div className="QuizPage__question-section">
        <div className="QuizPage__question-count">
          <p>
            Question {questionNumber}/{totalQuestions}
          </p>
        </div>
        <div className="QuizPage__question-text">
          <p>{questionText}</p>
        </div>
      </div>
      <div>
        <p>Timer: {timeLeft}</p>
      </div>
      <div className="QuizPage__answers">
        {answers.map((answerOption) => (
          <Answer
            key={answerOption.optionText}
            isCorrect={answerOption.isCorrect}
            answerText={answerOption.optionText}
            handleAnswerOptionClick={handleAnswerOptionClick}
          />
        ))}
      </div>
    </>
  );
}

export default QuizQuestion;
