import { RoverManifestDetails } from "../api/nasaApi";

interface RoverProps {
  roverDetails: RoverManifestDetails;
}

const Rovers = ({ roverDetails: roversDetails }: RoverProps) => {
  return (
    <div className="Rovers">
      {roversDetails ? <div></div> : <p>Loading...</p>}
    </div>
  );
};

export default Rovers;
