import { NavLink } from "react-router-dom";
import { useEffect } from "react";
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

function QuizPassed({ resetGame, score }: QuizPassedProps) {
  useEffect(() => {
    setLocalCookie("security-clearance", "super-secret-cleared", 1);
  });
  const tweetLink = '&url=http%3A%2F%2Fgithub%2Ecom';
  const tweetText = `I just scored ${score}/10 on the mars quiz. Try beat my score`;
  // const tweetLink = '&url=http%3A%2F%2Flocalhost%3A5173%2Fmars%2Dmission%2D2023%2Daug%2F%23%2Fquiz';
  const tweetTextQuery = tweetText.replace(/ /g, "%20");
  return (
    <div className="QuizPage__result-pass">
      <h2>Congratulations! You've successfully completed the quiz!</h2>
      <h3>You're NASA material!!</h3>
      <button className="QuizPage__restart" onClick={resetGame}>
        Restart
      </button>
      <a
        className="twitter-share-button"
        target="_blank"
        href={`https://twitter.com/intent/tweet?text=${tweetTextQuery}${tweetLink}`}
      >
        <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" />{" "}
        Share
      </a>
      <NavLink to="/area51">Area 51</NavLink>
    </div>
  );
}

export default QuizPassed;
