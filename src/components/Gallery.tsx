import { useState } from "react";
import { GalleryPhotoDetails } from "../api/nasaApi";

interface GalleryProps {
  galleryPhotos: GalleryPhotoDetails[];
}

const Gallery = ({ galleryPhotos }: GalleryProps) => {
  const [selectedPhotoDetails, setSelectedPhotoDetails] =
    useState<GalleryPhotoDetails>();

  return (
    <div>
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
        <div>
          <img src={selectedPhotoDetails.img_src} alt="Enlarged Image" />
          <p>
            Taken by the {selectedPhotoDetails.camera.full_name}, on{" "}
            {selectedPhotoDetails.rover.name} on Martian sol{" "}
            {selectedPhotoDetails.sol} (Earth Date{" "}
            {selectedPhotoDetails.earth_date})
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
