import { useState } from "react";
import { GalleryPhotoDetails } from "../api/nasaApi";
import "./Gallery.scss";
import Modal from "./Modal";
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
            className="ImageCard"
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
        <Modal closeAction={() => setSelectedPhotoDetails(undefined)}>
          <img
            className="Gallery__ModalImage"
            src={selectedPhotoDetails.img_src}
            alt="Enlarged Image"
            width={800}
          />
          <p className="Gallery__ModalImageDetails">
            Taken by the {selectedPhotoDetails.camera.full_name}, on{" "}
            {selectedPhotoDetails.rover.name} on Martian sol{" "}
            {selectedPhotoDetails.sol} (Earth Date{" "}
            {selectedPhotoDetails.earth_date})
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
