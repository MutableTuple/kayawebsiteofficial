import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import "./home.styles.scss";
import Navigation from "../navigation/navigation.component";
import Button from "../button/button.component";

import Cards from "./card.component";
// CARD DATA

const data = [
  {
    image: `url(${"https://atctirespvtltd30000sftvikhrolimumbai.s3.ap-south-1.amazonaws.com/ATC+Tires+Pvt+Ltd%2C+30000+SFT%2C+Vikhroli%2C+Mumbai+(38)/ATC+Tires+Pvt+Ltd%2C+30000+SFT%2C+Vikhroli%2C+Mumbai+(1).jpeg"})`,
    name: "Comprehensive Civil Interior Solutions",
    description:
      "We offer a comprehensive suite of interior solutions, including structural modifications and renovations.",
  },
  {
    image: "",
    name: "Versatile False Ceiling Installations",
    description:
      " Our expertise extends to the installation of a wide range of false ceiling designs, catering to various aesthetic and functional preferences.",
  },
  {
    image: "",
    name: "Comprehensive Flooring Solutions",
    description:
      "We provide an extensive selection of flooring solutions, encompassing hardwood, laminate, tile, carpet, and vinyl installations.",
  },
  {
    image: "",
    name: "Expert Carpets and Soft Furnishings",
    description:
      "We specialize in the supply and installation of carpets and soft furnishings, such as curtains, drapes, and upholstery.",
  },
  {
    image: "",
    name: "Electrical and Lighting Services",
    description:
      "Our services encompass electrical and lighting installations, ensuring efficient and well-illuminated interior spaces.",
  },
  {
    image: "",
    name: "Air Conditioning Solutions",
    description:
      "We excel in air conditioning installations, delivering optimal indoor climate control for your comfort.",
  },
  {
    image: "",
    name: "Fire Alarm Systems",
    description:
      "We provide cutting-edge fire alarm systems, enhancing safety and compliance within your premises.",
  },
  {
    image: `url(${"https://atctirespvtltd30000sftvikhrolimumbai.s3.ap-south-1.amazonaws.com/ATC+Tires+Pvt+Ltd%2C+30000+SFT%2C+Vikhroli%2C+Mumbai+(38)/ATC+Tires+Pvt+Ltd%2C+30000+SFT%2C+Vikhroli%2C+Mumbai+(1).jpeg"})`,

    name: "Advanced Networking and Telecom Systems",
    description:
      "Our proficiency extends to advanced networking and telecommunication infrastructure, ensuring seamless connectivity.",
  },
  {
    image: "",
    name: "Communication Systems, Public Address, and High-Quality Audio",
    description:
      "We specialize in the installation of communication systems, public address solutions, and top-tier audio equipment for diverse applications.",
  },
  {
    image: "",
    name: "Server Room Setup and Power Backup Solutions",
    description:
      "We offer expertise in designing and equipping server rooms, complete with uninterruptible power supplies (UPS) and backup diesel generators (DG).",
  },
  {
    image: "",
    name: "Designer Storage Solutions",
    description:
      "Our team crafts bespoke designer storage solutions, enhancing both aesthetics and functionality.",
  },
  {
    image: "",
    name: "Precision Partitions and Wall Paneling",
    description:
      "We excel in the construction of precision partitions and the installation of sophisticated wall paneling, elevating the interior environment.",
  },
  {
    image: "",
    name: "Customized Furniture and Carpentry Work",
    description:
      "We provide tailored solutions for both loose and fixed furniture, complemented by expert carpentry services.",
  },
  {
    image: "",
    name: "Modular Fixtures and Furnishings",
    description:
      "Our offerings encompass the installation of modular fixtures and furnishings, optimizing space utilization.",
  },
  {
    image: "",
    name: "Comprehensive Painting and Wall Finishing Services",
    description:
      "We provide a wide array of painting options and wall finishing techniques to achieve the desired look and feel.",
  },
  {
    image: "",
    name: "Kitchen Equipment and Miscellaneous Installations",
    description:
      "Our services include the installation of kitchen equipment and various miscellaneous items, ensuring a fully functional space.",
  },
  {
    image: "",
    name: "External and Internal Signage Solutions",
    description:
      "We specialize in designing and installing signage solutions for both external and internal applications, meeting your wayfinding and branding needs.",
  },
];

//

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
      <div className="main__container-about abtcon">
        <div className="main__container-about--left">dfgdfg</div>
        <div className="main__container-about--right">
          <span className="a">A</span>bout <span className="u">U</span>s.
          <p className="main__container-about--right--content">
            Established in the bustling city of Mumbai, we stand as one of the
            leading interior decoration firms, dedicated to delivering turnkey
            excellence in interior projects. Our expertise spans across a
            diverse spectrum, encompassing residential havens, dynamic
            commercial spaces, alluring retail environments, inviting hotel
            domains, and the welcoming realm of hospitality. Our operational
            canvas extends across the expansive tapestry of India.
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
        <div className="main__container-services--content media-content">
          {data.map((d) => (
            <Cards image={d.image} name={d.name} description={d.description} />
          ))}
        </div>
      </div>
      <div className="know-more-btn-sub-div">
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
      <div className="main__container-clients">
        <div className="oc">Our Clients</div>
        <div className="clients__elem">
          <img
            src="https://dl.dropboxusercontent.com/scl/fi/gky44ye46nzkvr1fhw7uf/clients.png?rlkey=at2baxec6nm4xyuyt19hp2uw7&dl=0"
            alt=""
            className="c_img"
          />
        </div>
      </div>
      {/* small screen */}
      <footer className="footer-small-screen">
        <div className="enclosure">
          <div className="logoimage-sm">
            <img src={require("./logo.png")} alt="" className="logo-sm" />
            <p className="sm-head--footer">Kaya Infrastructure</p>
          </div>

          <div className="logoimage-sm-right">
            <h3>Navigate</h3>
            <ul className="list--item--nav-sm">
              <li className="sm-item item-sm--1">Home</li>
              <li className="sm-item item-sm--2">Contact</li>
              <li className="sm-item item-sm--3">Projects</li>
              <li className="sm-item item-sm--4">Careers</li>
            </ul>
          </div>
        </div>
      </footer>
      {/* footer */}
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

// Current Project
// <div className="main__container-current-project">
//         <h1 className="currentpro">
//           <span className="w " style={{ color: "orangered" }}>
//             Current
//           </span>{" "}
//           Project
//         </h1>
//         <div className="grid-con-pro">
//           {/* <div className="main__container-current-project--projects-con p--1"></div> */}
//           <div className="main__container-current-project--projects-con p--2">
//             <div className="p--2-items">
//               <h3>75,000+ SQFT</h3>
//             </div>
//           </div>
//           <div className="main__container-current-project--projects-con p--3">
//             <div className="p--3-items">
//               <h3>India, Mumbai </h3>
//             </div>
//           </div>
//           <div className="main__container-current-project--projects-con p--4">
//             <div className="p--4-items">
//               <h3>90% completed</h3>
//             </div>
//           </div>
//           <div className="main__container-current-project--projects-con p--5">
//             <div className="p--5-items">
//               {" "}
//               <h3>1 Month left</h3>
//             </div>
//           </div>
//         </div>
//         <div className="kn-btn--projects">
//           <Button
//             props={"More Projects"}
//             width={0}
//             color={""}
//             fill={"#272829"}
//             boxshadow={".1rem .1rem .2rem rgba(0,0,0,.2)"}
//             textColor={"#fff"}
//           />
//         </div>
//       </div>
