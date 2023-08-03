import { useState } from "react";
import Rover from "../components/Rover";
import Button from "../components/Button";
import "./RoversPage.scss";

const RoversPage = () => {
  const [currentRoverName, setCurrentRoverName] = useState("Curiosity");

  return (
    <div>
      <h1>Mars Mission Rovers</h1>
      <div className="Rovers__ButtonContainer">
        <Button onClick={() => setCurrentRoverName("Curiosity")}>
          Curiosity
        </Button>
        <Button onClick={() => setCurrentRoverName("Opportunity")}>
          Opportunity
        </Button>
        <Button onClick={() => setCurrentRoverName("Spirit")}>Spirit</Button>
      </div>
      <Rover rover={currentRoverName} />
    </div>
  );
};

export default RoversPage;
