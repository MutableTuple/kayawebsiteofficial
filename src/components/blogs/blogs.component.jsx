import React from "react";
import "./blogs.styles.scss";
import { Outlet } from "react-router-dom";
const Blogs = () => {
  return (
    <div className="main__container__blogs">
      <div className="main--top-blog-bg"></div>
      {/* <h1 className="main__container__blogs--head">Welcome to Kaya's Blog</h1> */}
      <div className="main__container__blogs--box">
        <div className="new">
          <span className="new--blog">New</span>
        </div>
        <div className="main__container__blogs--box-left">
          <img
            src={
              "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1629367648/1629367647.jpg"
            }
            alt="blogpost image"
            className="main__container__blogs--box-left--image"
          />
        </div>
        <div className="main__container__blogs--box-right">
          <div className="main__container__blogs--box-right--head">
            <h1>Inclusion & Diversity at Workplae: How is it here at Kaya?</h1>
            <div className="main__container__blogs--box-right--head--main">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi animcupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </div>
          </div>
          {/* btu */}
        </div>
      </div>
      <span className="more-blogs">
        <h1>More Blogs.....</h1>
      </span>
      <div className="sub-main__container__blogs--prev">
        <div className="sub-main__container__blogs--prev--1">
          <span className="sub-main__container__blogs--prev--1--content">
            <h3>How Engineers are India building an empire?</h3>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi
            </p>
          </span>
        </div>
        <div className="sub-main__container__blogs--prev--2">
          <span className="sub-main__container__blogs--prev--2--content">
            <h3>How Engineers are India building an empire?</h3>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi
            </p>
          </span>
        </div>
        <div className="sub-main__container__blogs--prev--3">
          <span className="sub-main__container__blogs--prev--3--content">
            <h3>How Engineers are India building an empire?</h3>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
