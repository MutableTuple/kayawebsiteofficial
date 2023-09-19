import "./navigation.styles.scss";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__main-box">
          <ul className="navbar__items">
            <div className="navbar__items-logo">
              <Link to="/">
                <li className="navbar__items--logo">
                  <img
                    src={require("./logo.png")}
                    alt="logo"
                    id="navbar__items--logo--main-logo"
                  />
                </li>
              </Link>
            </div>
            <div className="navbar__items-container">
              <Link to="/">
                <li className="item navbar__items-container--1 links">Home</li>
              </Link>
              <Link to="/aboutus">
                <li className="item navbar__items-container--2 links">
                  AboutUs
                </li>
              </Link>
              <Link to="/services">
                <li className="item navbar__items-container--3 links">
                  Services
                </li>
              </Link>
              <Link to="/gallery">
                <li className="item navbar__items-container--4 links">
                  Gallery
                </li>
              </Link>

              {/* <Link to="/blogs">
                <li className="item navbar__items-container--5 links">Blogs</li>
              </Link> */}
              <Link to="/projects">
                <li className="item navbar__items-container--6 links">
                  Projects
                </li>
              </Link>
              <Link to="/contact">
                <li className="item navbar__items-container--7 links">
                  ContactUs
                </li>
              </Link>
            </div>
          </ul>
        </div>
        <div className="navbar__main-box--sm">
          <ul className="navbar__main-box--sm--links">
            <li className="sm--item0 sm-item">
              <img src={require("./logo.png")} alt="" className="sm--logo" />
            </li>

            <Link to="/">
              <li className="sm--item1 sm-item">Home</li>
            </Link>

            <Link to="/aboutus">
              <li className="sm--item1 sm-item">About Us</li>
            </Link>
            <Link to="/services">
              <li className="sm--item1 sm-item">Services</li>
            </Link>
            <Link to="/gallery">
              <li className="sm--item1 sm-item">Gallery</li>
            </Link>
            <Link to="/projects">
              <li className="sm--item1 sm-item">Projects</li>
            </Link>
            <Link to="/contact">
              <li className="sm--item1 sm-item">Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
