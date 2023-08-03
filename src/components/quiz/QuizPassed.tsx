import { Link } from "react-router-dom";
import { useEffect } from "react";
import Button from "../Button";
import "./QuizPassed.scss";

interface QuizPassedProps {
  resetGame(): void;
  score: number;
}

const setLocalCookie = (name: string, value: string, daysToExpire: number) => {
  const expirationDate = new Date();
  expirationDate.setTime(
    expirationDate.getTime() + daysToExpire * 24 * 60 * 60 * 1000,
  );

  const cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(
    value,
  )};expires=${expirationDate.toUTCString()};path=/`;
  document.cookie = cookieString;
};

const area51UnlockScore = 0;

function QuizPassed({ resetGame, score }: QuizPassedProps) {
  useEffect(() => {
    setLocalCookie("security-clearance", "super-secret-cleared", 1);
  });
  const tweetLink =
    "&url=https%3A%2F%2Ftechswitch%2Dlearners%2Egithub%2Eio%2Fmars%2Dmission%2D2023%2Daug%2F%23%2Fquiz";
  const tweetText = `I just scored ${score}/10 on the mars quiz. Try beat my score`;
  // const tweetLink = '&url=http%3A%2F%2Flocalhost%3A5173%2Fmars%2Dmission%2D2023%2Daug%2F%23%2Fquiz';
  const tweetTextQuery = tweetText.replace(/ /g, "%20");
  return (
    <div className="QuizPage__result-pass">
      <h1></h1>
      <h2>{`Congratulations! You scored ${score}/10.`}</h2>
      <h3>You're NASA material!!</h3>
      {score < area51UnlockScore ? (
        <>
          <h4>Retry the quiz to improve your score </h4>
        </>
      ) : (
        <>
          <Link to="/area51">Reveal the truth about Mars</Link>
        </>
      )}
      <div className="QuizPage__buttons">
        <Button className="QuizPage__restart" onClick={resetGame}>
          Restart Quiz
        </Button>

        <a
          className="twitter-share-button"
          target="_blank"
          href={`https://twitter.com/intent/tweet?text=${tweetTextQuery}${tweetLink}`}
        >
          <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" />{" "}
          Share
        </a>
      </div>
    </div>
  );
}

export default QuizPassed;
