import { useState, useEffect } from "react";
import { GalleryPhotoDetails, getGalleryPhotos } from "../api/nasaApi";
import Button from "../components/Button";

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
        galleryPhotos.map((imageDetails) => (
          <img
            src={imageDetails.img_src}
            alt="Image Thumbnail"
            width={300}
            height={200}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
      <Button onClick={() => alert("Hello!")}>Click me</Button>
    </div>
  );
};

export default GalleryPage;
