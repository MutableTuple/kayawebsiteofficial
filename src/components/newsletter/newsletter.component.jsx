import React from "react";
import "./newsletter.styles.scss";
import { Link } from "react-router-dom";
import AllProjects from "./allprojects.component";
const Projects = ({ project_name, desc, image, acers, place, type }) => {
  return (
    <div className="main__projects__container">
      <div className="main__projects__container__box">
        <div className="img_text">
          <h1>ERGO Services & Technology</h1>
          <p>Situated in Mumbai, One of our finest Projects.</p>
        </div>
      </div>
      {/* <div className="projects--type">
        <div className="elements--type--1  main--elem item-active">
          Commercial
        </div>
        <div className="elements--type--2  main--elem">Retail</div>
        <div className="elements--type--3  main--elem">Residential</div>
        <div className="elements--type--4  main--elem">Hospitality</div>
      </div> */}
      <AllProjects />
    </div>
  );
};

export default Projects;
