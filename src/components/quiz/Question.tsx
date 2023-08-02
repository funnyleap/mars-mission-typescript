import Answer from "./Answer";

interface QuestionProps {
  questionNumber: number;
  totalQuestions: number;
  questionText: string;
  timeLeft: number;
  answers: AnswerOptions[];
  handleAnswerOptionClick(isCorrect: boolean): void;
}

interface AnswerOptions {
  answerText: string;
  isCorrect: boolean;
  isClicked: boolean;
}

function Question({
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
            isCorrect={answerOption.isCorrect}
            answerText={answerOption.answerText}
            handleAnswerOptionClick={handleAnswerOptionClick}
          />
        ))}
      </div>
    </>
  );
}

export default Question;
