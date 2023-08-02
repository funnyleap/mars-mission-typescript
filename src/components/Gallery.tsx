import { useState } from "react";
import { GalleryPhotoDetails } from "../api/nasaApi";
import "./Gallery.scss";
import Button from "./Button";

interface GalleryProps {
  galleryPhotos: GalleryPhotoDetails[];
}

const Gallery = ({ galleryPhotos }: GalleryProps) => {
  const [selectedPhotoDetails, setSelectedPhotoDetails] =
    useState<GalleryPhotoDetails>();

  return (
    <div className="Gallery">
      {galleryPhotos ? (
        galleryPhotos.map((photoDetails) => (
          <img
            src={photoDetails.img_src}
            onClick={() => setSelectedPhotoDetails(photoDetails)}
            alt="Image Thumbnail"
            height={200}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
      {selectedPhotoDetails && (
        <div className="Modal__Backdrop">
          <div className="Modal">
            <Button
              className="Modal__Close"
              onClick={() => setSelectedPhotoDetails(undefined)}
            >
              ×
            </Button>
            <img
              className="Gallery__ModalImage"
              src={selectedPhotoDetails.img_src}
              alt="Enlarged Image"
              width={800}
            />
            <p className="Image_Details">
              Taken by the {selectedPhotoDetails.camera.full_name}, on{" "}
              {selectedPhotoDetails.rover.name} on Martian sol{" "}
              {selectedPhotoDetails.sol} (Earth Date{" "}
              {selectedPhotoDetails.earth_date})
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
