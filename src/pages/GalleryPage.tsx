import { useState, useEffect } from "react";
import { getGalleryPhotos } from "../api/nasaApi";
import Button from "../components/Button";

const GalleryPage = () => {
  const [galleryPhotos, setGalleryPhotos] = useState<string>("");
  const [galleryPhotoUrl, setGalleryPhotoUrl] = useState<string>();

  useEffect(() => {
    getGalleryPhotos().then((data) => {
      console.log(data);
      setGalleryPhotos(data.photos[0].earth_date);
      setGalleryPhotoUrl(data.photos[0].img_src);
    });
  }, []);

  return (
    <div>
      <h1>Mars Mission Gallery</h1>
      {galleryPhotoUrl ? (
        <img alt={galleryPhotos} src={galleryPhotoUrl} />
      ) : (
        <p>Loading...</p>
      )}
      <Button onClick={() => alert("Hello!")}>Click me</Button>
    </div>
  );
};

export default GalleryPage;
