import { useState } from "react";
import Rover from "../components/Rover";
import Button from "../components/Button";

const RoversPage = () => {
  const [currentRoverName] = useState("Curiosity");

  return (
    <div>
      <h1>Mars Mission Rovers</h1>
      <Button>Curiosity</Button>
      <Button>Opportunity</Button>
      <Button>Spirit</Button>
      <Rover rover={currentRoverName} />
    </div>
  );
};

export default RoversPage;
