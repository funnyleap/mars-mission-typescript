import { useEffect, useState } from "react";
import { RoverManifestDetails, getRoverManifestData } from "../api/nasaApi";

interface RoverProps {
  rover: string;
}

const Rover = ({ rover }: RoverProps) => {
  const [roverData, setRoverData] = useState<RoverManifestDetails>();

  useEffect(() => {
    setRoverData(undefined);
    getRoverManifestData(rover).then((data) => setRoverData(data));
  }, [rover]);

  return (
    <div className="Rovers">
      {roverData !== undefined ? (
        <>
          <h2>{roverData.photo_manifest.name}</h2>
          <p>Status: {roverData.photo_manifest.status}</p>
          <p>{roverData.photo_manifest.total_photos} photos</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Rover;
