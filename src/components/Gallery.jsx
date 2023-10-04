import React, { useContext } from "react";
import { PicsContext } from "../context/PicsContext";
import "../App.css";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { pics } = useContext(PicsContext);

  return (
    <div className="gallery grid-columns-5 p-3">
      {pics.map((photo) => (
        <div key={photo.id} className="gallery-item">
          <img
            src={photo.src.original}
            alt={photo.alt}
            width={"200px"}
            height={"200px"}
          />
          <div className="overlay">
            <p>{photo.alt}</p>
            <div className="icon-heart-container">
              <IconHeart
                className="icon-heart"
                filled={photo.liked}
                photoId={photo.id}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
