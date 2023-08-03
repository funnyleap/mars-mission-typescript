import { useState, useEffect } from "react";
import { RoverManifestDetails, getRoverManifestData } from "../api/nasaApi";
import Rovers from "../components/Rover";
import Button from "../components/Button";

const RoversPage = () => {
  const [RoversDetails, setRoversDetails] = useState<RoverManifestDetails>();
  useEffect(() => {
    getRoverManifestData().then((data) => {
      setRoversDetails(data);
    });
  }, []);

  return (
    <div>
      <h1>Mars Mission Rovers</h1>
      <Button onClick={() => setRoversDetails(RoversDetails)}>Curiosity</Button>
      <Button>Opportunity</Button>
      <Button>Spirit</Button>
      {RoversDetails ? (
        <Rovers roverDetails={RoversDetails} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RoversPage;
