import React from "react";

const Photos = ({
  project__name,
  project__description,
  sub_project__image,
}) => {
  return (
    <div
      className="main__gallery__container-box--item gall-item"
      style={{
        backgroundImage: `url(${sub_project__image})`,
      }}
    >
      <div className="gall-item--span">
        <h2>{project__name}</h2>
        <p>{project__description}</p>
      </div>
    </div>
  );
};

export default Photos;
