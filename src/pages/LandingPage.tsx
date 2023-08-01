import { useState, useEffect } from "react";
import { getPhotoOfTheDayData } from "../api/nasaApi";
import Button from "../components/Button";
import { getRandomQuestions } from "../components/data/quizdata";

const Home = () => {
  const [photoOfTheDayTitle, setPhotoOfTheDayTitle] = useState<string>();
  const [photoOfTheDayUrl, setPhotoOfTheDayUrl] = useState<string>();

  useEffect(() => {
    getPhotoOfTheDayData().then((data) => {
      setPhotoOfTheDayTitle(data.title);
      setPhotoOfTheDayUrl(data.url);
    });
  }, []);

  return (
    <div>
      <h1>Mars Mission</h1>
      {photoOfTheDayUrl && (
        <img alt={photoOfTheDayTitle} src={photoOfTheDayUrl} />
      )}
      <Button onClick={() => alert("Hello!")}>Click me</Button>
      {getRandomQuestions().map((q) => (
        <div>{q.questionText}</div>
      ))}
    </div>
  );
};

export default Home;
