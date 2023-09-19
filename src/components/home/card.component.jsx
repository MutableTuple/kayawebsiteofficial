import React from "react";

const Cards = ({ image, name, description, ...props }) => {
  return (
    <div className="main__container-services--content con--items c-items--1">
      <div className="image--con image--1">{image}</div>
      <div className="text--con">
        <h3>{name}</h3>
        <span className="con-items-text">{description}</span>
      </div>
    </div>
  );
};

export default Cards;
