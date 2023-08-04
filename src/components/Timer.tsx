import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(interval);
        }
        return Math.max(prevSeconds - 1, 0);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCorrectAnswer = () => {
    setSeconds((prevSeconds) => Math.min(prevSeconds + 5, 30));
  };

  const handleWrongAnswer = () => {
    setSeconds((prevSeconds) => Math.max(prevSeconds - 5, 0));
  };

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      <button onClick={handleCorrectAnswer}>Correct Answer</button>
      <button onClick={handleWrongAnswer}>Wrong Answer</button>
    </div>
  );
};

export default Timer;
