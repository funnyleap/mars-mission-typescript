import { useState } from "react";
import Rover from "../components/Rover";
import Button from "../components/Button";

const RoversPage = () => {
  const [currentRoverName, setCurrentRoverName] = useState("Curiosity");

  return (
    <div>
      <h1>Mars Mission Rovers</h1>
      <Button onClick={() => setCurrentRoverName("Curiosity")}>
        Curiosity
      </Button>
      <Button onClick={() => setCurrentRoverName("Opportunity")}>
        Opportunity
      </Button>
      <Button onClick={() => setCurrentRoverName("Spirit")}>Spirit</Button>
      <Rover rover={currentRoverName} />
    </div>
  );
};

export default RoversPage;
