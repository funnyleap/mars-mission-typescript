import { useEffect, useState } from "react";
import { RoverManifestDetails, getRoverManifestData } from "../api/nasaApi";
import "./Rover.scss";

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
    <div className="Rover">
      {roverData !== undefined ? (
        <>
          <div>
            <h2>{roverData.photo_manifest.name}</h2>
            <p>Status: {roverData.photo_manifest.status}</p>
            <p>{roverData.photo_manifest.total_photos} photos</p>
            <p>Launch date: {roverData.photo_manifest.launch_date}</p>
            <p>Landing date: {roverData.photo_manifest.landing_date}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Rover;
