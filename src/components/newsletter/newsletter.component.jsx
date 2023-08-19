import React from "react";
import "./newsletter.styles.scss";
import { Link } from "react-router-dom";

const Projects = ({ project_name, desc, image, acers, place, type }) => {
  return (
    <div className="main__projects__container">
      <div className="main__projects__container__box">
        <div className="img_text">
          <h1>Hiranandani Power</h1>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi si laboris ex in Lorem sunt duis
          </p>
        </div>
      </div>
      {/* <div className="main__projects__container__box--sub">
        <div className="main__projects__container__box--sub--main">
          <div className="main__projects__container__box--sub--main--left">
            <div className="text--on--image">
              <h1>{project_name}</h1>
              <p>{desc}</p>
            </div>
          </div>
          <div className="main__projects__container__box--sub--main--right">
            <h1>{acers}</h1>
            <p>{place}</p>
            <p>{type}</p>
            <Link to="/gallery">
              <div className="explore-btn">Photos</div>
            </Link>
          </div>
        </div>
      </div> */}
      <div className="main__projects__container__box--sub">
        <div className="main__projects__container__box--sub--main">
          <div
            className="main__projects__container__box--sub--main--left"
            style={{
              backgroundImage: `url("https://images.hdqwalls.com/download/city-4k-buildings-skyscraper-view-l3-1920x1080.jpg")`,
            }}
          >
            <div className="text--on--image">
              <h1>{"adaas"}</h1>
              <p>{"sdsd"}</p>
            </div>
          </div>
          <div className="main__projects__container__box--sub--main--right">
            <h1>{acers}</h1>
            <p>{place}</p>
            <p>{type}</p>
            <Link to="/gallery">
              <div className="explore-btn">Photos</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="main__projects__container__box--sub">
        <div className="main__projects__container__box--sub--main">
          <div
            className="main__projects__container__box--sub--main--left"
            style={{
              backgroundImage: `url("https://images.wallpaperscraft.com/image/single/new_york_buildings_skyscrapers_59522_2560x1440.jpg")`,
            }}
          >
            <div className="text--on--image">
              <h1>{"Hiranandani, Powai"}</h1>
              <p>
                {
                  "lipssldjpkdjadjaspodaasd l;kasjhdlkas hdlkasdlkasdlkasdhlkasdlkasd"
                }
              </p>
            </div>
          </div>
          <div className="main__projects__container__box--sub--main--right">
            <h1>{"19000"} Acres</h1>
            <p>{"Hiranandani, Powai"}</p>
            <p>{"Commercial"}</p>
            <Link to="/gallery">
              <div className="explore-btn">Photos</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
