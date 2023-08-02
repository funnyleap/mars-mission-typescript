import { useState, useEffect } from "react";
import "./BirthdayCardPage.scss";
import { getPhotoOfTheDayData } from "../api/nasaApi";
import birthdayCardPlaceholder from "../assets/birthday-card-default.jpg";

const BirthdayCardPage = () => {
  const [photoOfTheDayTitle, setPhotoOfTheDayTitle] = useState<string>();
  const [photoOfTheDayUrl, setPhotoOfTheDayUrl] = useState<string>();
  console.log(photoOfTheDayUrl);
  useEffect(() => {
    getPhotoOfTheDayData()
      .then((data) => {
        setPhotoOfTheDayTitle(data.title);
        setPhotoOfTheDayUrl(data.url);
      })
      .catch(() => {
        setPhotoOfTheDayUrl(birthdayCardPlaceholder);
        setPhotoOfTheDayTitle("Mars Rover");
      });
  }, []);

  return (
    <div className="BirthdayCardPage">
      {photoOfTheDayUrl && (
        <img alt={photoOfTheDayTitle} src={photoOfTheDayUrl} />
      )}
      <div>
        <label>To:</label>
        <input></input>
        <label>Message:</label>
        <input></input>
        <label>From:</label>
        <input></input>
      </div>
    </div>
  );
};

export default BirthdayCardPage;
