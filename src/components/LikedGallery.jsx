import React, { useContext } from "react";
import { PicsContext } from "../context/PicsContext";
import "../App.css";

const LikedGallery = () => {
  const { pics } = useContext(PicsContext);

  return (
    <div className="gallery grid-columns-5 p-3">
      {pics
        .filter((photo) => photo.liked)
        .map((photo) => (
          <div key={photo.id} className="gallery-item">
            <img
              src={photo.src.original}
              alt={photo.alt}
              width={"200px"}
              height={"200px"}
            />
          </div>
        ))}
    </div>
  );
};

export default LikedGallery;
