import { useState, useEffect } from "react";
import { getPhotoOfTheDayData } from "../api/nasaApi";
import Button from "../components/Button";

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
    </div>
  );
};

export default Home;
