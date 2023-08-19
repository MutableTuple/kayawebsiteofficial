import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import "./home.styles.scss";
import Navigation from "../navigation/navigation.component";
import Button from "../button/button.component";

const Home = () => {
  return (
    <div className="main__container">
      {/* <div className="loader">
        <div className="main--loader--spinner">________________</div>
      </div> */}
      <div className="main__container-landing">
        <div className="main__container-landing--content">
          <div className="main__container-landing--content--left">
            <h1 className="main__container-landing--content--left--heading">
              Kaya Infrastructure.
            </h1>
            <p className="sub--main">
              "Elevating Urban Living Through Innovative Infrastructure
              Solutions"
            </p>
            <div className="explore-more">
              <Button props={"Explore"} />
            </div>
          </div>
          <div className="main__container-landing--content--right"></div>
        </div>
      </div>
      <div className="main__container-about">
        <div className="main__container-about--left"></div>
        <div className="main__container-about--right">
          <span className="a">A</span>bout <span className="u">U</span>s.
          <p className="main__container-about--right--content">
            Established in the bustling city of Mumbai, we stand as a premier
            interior decoration firm, dedicated to delivering turnkey excellence
            in interior projects. Our expertise spans across a diverse spectrum,
            encompassing residential havens, dynamic commercial spaces, alluring
            retail environments, inviting hotel domains, and the welcoming realm
            of hospitality. Our operational canvas extends across the expansive
            tapestry of India.
          </p>
          <div className="main__container-about--right--content-know-more">
            <Link to="/aboutus">
              <Button
                props={"Know More"}
                width={0}
                color={""}
                fill={"#272829"}
                textColor={"#fff"}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="main__container-services">
        <span className="main__container-services--header">
          Services we provide
        </span>
        <div className="main__container-services--content">
          <div className="main__container-services--content con--items c-items--1">
            <div className="image--con image--1"></div>
            <div className="text--con">
              <h3>Interior Works</h3>
              <span className="con-items-text">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit ex esse exercitation amet. Nisi
              </span>
            </div>
          </div>
          <div className="main__container-services--content con--items c-items--2">
            <div className="image--con image--2"></div>
            <div className="text--con">
              <h3>Comprehensive Civil Interior Work</h3>
              <span className="con-items-text">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
              </span>
            </div>
          </div>
          <div className="main__container-services--content con--items c-items--3">
            <div className="image--con image--3"></div>
            <div className="text--con">
              <h3>Fixtures & Modular items</h3>
              <span className="con-items-text">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
              </span>
            </div>
          </div>
          <div className="main__container-services--content con--items c-items--4">
            <div className="image--con image--4"></div>
            <div className="text--con">
              <h3>All Types of False Ceilings</h3>
              <span className="con-items-text">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
              </span>
            </div>
          </div>
        </div>
        <div className="btn-kw-service">
          <Button
            props={"Know More"}
            width={0}
            color={""}
            fill={"#272829"}
            fontSize={"1rem"}
            boxshadow={".1rem .1rem .2rem rgba(0,0,0,.2)"}
            textColor={"#fff"}
          />
        </div>
      </div>
      <div className="main__container-why-us">
        <div className="main__container-why-us--left">
          <span className="w" style={{ color: "orangered" }}>
            W
          </span>
          hy Us ?
          <div className="main__container-why-us--left--content">
            <p className="para">
              We have over 20 Years of experience in this field, dedicated &
              experienced labor who can take any job and accomplish in the given
              frame of time and with quality meeting client's satisfaction and
              trust. We also have them in adequate amounts to undertake any
              scale of projects and machinery to meet technology demands and
              efficiency at the same time.
            </p>
            <div className="kn-btn">
              <Button
                props={"Know More"}
                width={0}
                color={""}
                fill={"#272829"}
                boxshadow={".1rem .1rem .2rem rgba(0,0,0,.2)"}
                textColor={"#fff"}
              />
            </div>
          </div>
        </div>
        <div className="main__container-why-us--right"></div>
      </div>
      <div className="main__container-clients">Clients</div>
      <div className="main__container-current-project">
        <h1 className="currentpro">
          <span className="w " style={{ color: "orangered" }}>
            Current
          </span>{" "}
          Project
        </h1>
        <div className="grid-con-pro">
          <div className="main__container-current-project--projects-con p--1">
            <img
              src="https://4kwallpapers.com/images/wallpapers/skyscrapers-airplane-high-rise-building-metropolis-5k-4480x2520-5850.jpg"
              alt=""
              className="elem1-main"
            />
          </div>
          <div className="main__container-current-project--projects-con p--2">
            <div className="p--2-items">
              <h3>75,000+ SQFT</h3>
            </div>
          </div>
          <div className="main__container-current-project--projects-con p--3">
            <div className="p--3-items">
              <h3>India, Mumbai </h3>
            </div>
          </div>
          <div className="main__container-current-project--projects-con p--4">
            <div className="p--4-items">
              <h3>90% completed</h3>
            </div>
          </div>
          <div className="main__container-current-project--projects-con p--5">
            <div className="p--5-items">
              {" "}
              <h3>1 Month left</h3>
            </div>
          </div>
        </div>
        <div className="kn-btn--projects">
          <Button
            props={"More Projects"}
            width={0}
            color={""}
            fill={"#272829"}
            boxshadow={".1rem .1rem .2rem rgba(0,0,0,.2)"}
            textColor={"#fff"}
          />
        </div>
      </div>
      <footer className="main__container-footer">
        <div className="vid-bg">
          <video class="vid-bg__content" autoPlay muted loop>
            <source src={require("./video.mp4")} type="video/mp4" />
            <source src={require("./video.mp4")} type="video/webm" />
            Your browser is not supported!
          </video>
        </div>
        <div className="main__container-footer--container">
          <div className="main__container-footer--items--1 item-ft  ">
            <img src={require("./logo.png")} alt="" className="main--logo" />
            <h1>Kaya Infrastructure</h1>
          </div>
          <div className="main__container-footer--items--2 item-ft ">
            <h3 className="em-head">About</h3>
            We have over 20 Years of experience in this field, dedicated &
            experienced labor who can take any job and accomplish in the given
            frame of time and with quality meeting client's satisfaction and
            trust. We also have them in adequate amounts to undertake any scale
            of projects and machinery to meet technology demands and efficiency
            at the same time.
          </div>

          <div className="main__container-footer--items--3 item-ft ">
            <h3 className="em-head">Navigate</h3>
            <ul className="items--nav">
              {/* <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="careers" element={<Careers />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="newsletter" element={<Newsletter />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<Nopage />} />
        </Route> */}
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/aboutus">
                <li>About</li>
              </Link>
              <Link to="/gallery">
                <li>Gallery</li>
              </Link>
              <Link to="/blogs">
                <li>Blogs</li>
              </Link>
              <Link to="/newsletter">
                <li>Newsletter</li>
              </Link>
              <Link to="/services">
                <li>Services</li>
              </Link>
              <Link to="/careers">
                <li>Careers</li>
              </Link>
            </ul>
          </div>
          <div className="main__container-footer--items--4 item-ft ">
            <h3 className="em-head">Contact</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
