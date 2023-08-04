import { useState, useEffect } from "react";
import Rover from "../components/Rover";
import Button from "../components/Button";
import "./RoversPage.scss";
import { roverCameras } from "../data/cameraData";
import { GalleryPhotoDetails, getGalleryPhotos } from "../api/nasaApi";
import Gallery from "../components/Gallery";

const optimumSols = {
  Curiosity: 1000,
  Opportunity: 2000,
  Spirit: 500,
};

const RoversPage = () => {
  const [currentRoverName, setCurrentRoverName] = useState<
    "Curiosity" | "Opportunity" | "Spirit"
  >("Curiosity");
  const [currentCameraCode, setCurrentCameraCode] = useState<string>();
  const [galleryPhotos, setGalleryPhotos] = useState<GalleryPhotoDetails[]>();

  const setCurrentRoverNameAndClearGallery = (
    roverName: "Curiosity" | "Opportunity" | "Spirit",
  ) => {
    setCurrentCameraCode(undefined);
    setCurrentRoverName(roverName);
  };

  useEffect(() => {
    if (currentCameraCode) {
      getGalleryPhotos(
        currentRoverName,
        optimumSols[currentRoverName],
        currentCameraCode,
      ).then((data) => {
        setGalleryPhotos(data.photos);
      });
    } else {
      setGalleryPhotos(undefined);
    }
  }, [currentRoverName, currentCameraCode]);

  return (
    <div>
      <h1 className="Rovers__PageTitle">Mars Mission Rovers</h1>
      <div className="Rovers__ButtonContainer">
        <Button onClick={() => setCurrentRoverNameAndClearGallery("Curiosity")}>
          Curiosity
        </Button>
        <Button
          onClick={() => setCurrentRoverNameAndClearGallery("Opportunity")}
        >
          Opportunity
        </Button>
        <Button onClick={() => setCurrentRoverNameAndClearGallery("Spirit")}>
          Spirit
        </Button>
      </div>
      <Rover rover={currentRoverName} />
      <div className="Rovers__ButtonContainer">
        {roverCameras[currentRoverName].map((cameraDetails) => (
          <Button onClick={() => setCurrentCameraCode(cameraDetails.code)}>
            {cameraDetails.name}
          </Button>
        ))}
      </div>
      {currentCameraCode && galleryPhotos ? (
        <Gallery galleryPhotos={galleryPhotos} />
      ) : (
        currentCameraCode && <p>Loading...</p>
      )}
    </div>
  );
};

export default RoversPage;
