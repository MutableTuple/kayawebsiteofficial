import React from "react";
import { Link } from "react-router-dom";

const SingleProject = ({
  project__image,
  project__name,
  project__size,
  project__place,
  project__type,
  project__description,
  ...other
}) => {
  return (
    <div className="main__projects__container__box--sub">
      <div className="main__projects__container__box--sub--main">
        <div
          className="main__projects__container__box--sub--main--left"
          style={{
            backgroundImage: `url(${project__image})`,
          }}
        >
          <div className="text--on--image">
            <h1>{project__name}</h1>
            <p>{project__description}</p>
          </div>
        </div>
        <div className="main__projects__container__box--sub--main--right">
          <h1>{project__size}</h1>
          <p>{project__place}</p>
          <p>{project__type}</p>
          <Link to="/gallery">
            <div className="explore-btn">Photos</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
