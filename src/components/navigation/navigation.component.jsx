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
                <li className="item navbar__items-container--1">Home</li>
              </Link>
              <Link to="/aboutus">
                <li className="item navbar__items-container--2">About Us</li>
              </Link>
              <Link to="/services">
                <li className="item navbar__items-container--3">Services</li>
              </Link>
              <Link to="/gallery">
                <li className="item navbar__items-container--4">Gallery</li>
              </Link>
              <Link to="/blogs">
                <li className="item navbar__items-container--5">Blogs</li>
              </Link>
              <Link to="/projects">
                <li className="item navbar__items-container--6">Projects</li>
              </Link>
            </div>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
