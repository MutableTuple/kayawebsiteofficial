import React from "react";
import Photos from "./photos.component";
const GalleryCard = ({
  current_project__image,
  current_project__name,
  current_project__place,
  current_project__description,
}) => {
  return (
    <div
      className="main__gallery__container-box--item-1"
      style={{
        backgroundImage: `url(${current_project__image})`,
      }}
    >
      <div className="main__gallery__container-box--cover">
        <h3 className="head--main">{current_project__name}</h3>
        <span className="head--sub">{current_project__place}</span>
        <p className="head--sub--con">{current_project__description}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
