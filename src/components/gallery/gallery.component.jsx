import React from "react";
import "./gallery.styles.scss";

const Gallery = () => {
  return (
    <div className="main__gallery__container">
      <h1 className="main__gallery__container-heading">
        Welcome to kaya's Gallery.
      </h1>
      <div className="main__gallery__container-box">
        <div
          className="main__gallery__container-box--item-1"
          style={{
            backgroundImage: `url(${"https://iso.500px.com/wp-content/uploads/2014/07/hong-kong-cityscape1.jpg"})`,
          }}
        >
          <div className="main__gallery__container-box--cover">
            <h3 className="head--main">ATG Yokohama</h3>
            <span className="head--sub">Hiranandani,Powai</span>
            <p className="head--sub--con">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi
            </p>
          </div>
        </div>
        <div className="main__gallery__container-box--item-2  gall-item">
          <div className=" gall-item--span">
            <h2>ATG Gallery View</h2>
            <p>136th Floor</p>
          </div>
        </div>
        <div className="main__gallery__container-box--item-3 gall-item">
          <div className=" gall-item--span">
            <h2>ATG Gallery View</h2>
            <p>136th Floor</p>
          </div>
        </div>
        <div className="main__gallery__container-box--item-4 gall-item">
          <div className=" gall-item--span">
            <h2>ATG Gallery View</h2>
            <p>136th Floor</p>
          </div>
        </div>
        <div className="main__gallery__container-box--item-5 gall-item">
          <div className=" gall-item--span">
            <h2>ATG Gallery View</h2>
            <p>136th Floor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
