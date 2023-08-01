import { useState, useEffect } from "react";
import { GalleryPhotoDetails, getGalleryPhotos } from "../api/nasaApi";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
  const [galleryPhotos, setGalleryPhotos] = useState<GalleryPhotoDetails[]>();

  useEffect(() => {
    getGalleryPhotos().then((data) => {
      setGalleryPhotos(data.photos);
    });
  }, []);

  return (
    <div>
      <h1>Mars Mission Gallery</h1>
      {galleryPhotos ? (
        <Gallery galleryPhotos={galleryPhotos} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GalleryPage;
