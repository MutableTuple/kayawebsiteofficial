import React from "react";
import "./aboutus.styles.scss";

const AboutUs = () => {
  return (
    <div className="about_us__main__container">
      <div className="about_us__main__container--box">
        <h3 className="about_us__main__container--box--head">
          {/* Crafting Connections, Inspiring Moments: Unveiling the Heart Behind
          Kaya Infrastructure. */}
        </h3>
      </div>
      <div className="about_us__main__container--box--head--sub">
        <h2 className="about_us__main__container--box--head--sub--head">
          The Story......
        </h2>
        <div className="about_us__main__container--box--head--sub--div--in">
          <div className="about_us__main__container--box--head--sub--div--in--left">
            <p className="story--p-1">
              Amidst Mumbai's vibrant rhythm, we're an interior decoration firm
              turning spaces into living dreams. From homes to hotels, boutiques
              to offices, our artistry blends seamlessly with innovative
              technology, creating not just spaces, but experiences. With
              projects spanning India, we're more than designers; we're
              storytellers, weaving aspirations into every design stroke. As we
              collaborate, we become part of narratives, crafting relationships
              and leaving smiles of satisfaction in our wake. In Mumbai's
              tapestry, we're the threads of creativity, binding dreams to
              reality and redefining the essence of design.
            </p>
          </div>
          <div className="about_us__main__container--box--head--sub--div--in--right">
            <img
              src="https://archello.com/thumbs/images/2022/07/12/sanjay-puri-architects-mirai-house-of-arches-private-houses-archello.1657611024.4722.jpg?fit=crop&auto=compress"
              alt=""
              className="s-img-1"
            />
          </div>
        </div>
      </div>
      <div className="main__sub__container">
        <h1 className="main__sub__container--head">The Team...</h1>
        <div className="main__sub__container--box">
          <div className="main__sub__container--box--team-leaders">
            <div className="main__sub__container--box--team-leaders--1">
              <img
                src={require("./images/Mr_Shyam_Vk.jpg")}
                alt="Mr Shyampyare Vishwakarma"
                className="main__sub__container--box--team-leaders--1--img"
              />
              <div className="main__sub__container--box--team-leaders--1--ack">
                <p className="main__sub__container--box--team-leaders--1--ack--t1">
                  Mr. Shyam Vishwakarma
                </p>
                <p className="main__sub__container--box--team-leaders--1--ack--t1--sub">
                  Founder & Managing Partner
                </p>
              </div>
            </div>
            <div className="main__sub__container--box--team-leaders--2">
              <img
                src={require("./images/Mr_Hitesh_Vk.jpg")}
                alt="Mr Hitesh Vishwakarma"
                className="main__sub__container--box--team-leaders--2--img"
              />
              <div className="main__sub__container--box--team-leaders--2--ack">
                <p className="main__sub__container--box--team-leaders--2--ack--t1">
                  Mr. Hitesh Vishwakarma
                </p>
                <p className="main__sub__container--box--team-leaders--2--ack--t1--sub">
                  head of projects & execution
                </p>
              </div>
            </div>
            <div className="main__sub__container--box--team-leaders--3">
              <img
                src=""
                alt=""
                className="main__sub__container--box--team-leaders--3--img"
              />
              <div className="main__sub__container--box--team-leaders--3--ack">
                <p className="main__sub__container--box--team-leaders--3--ack--t1">
                  Mr Vivian Moraes
                </p>
                <p className="main__sub__container--box--team-leaders--3--ack--t1--sub">
                  Head of Sales & Marketing
                </p>
              </div>
            </div>
            <div className="main__sub__container--box--team-leaders--4">
              <img
                src=""
                alt=""
                className="main__sub__container--box--team-leaders--4--img"
              />
              <div className="main__sub__container--box--team-leaders--4--ack">
                <p className="main__sub__container--box--team-leaders--4--ack--t1">
                  Mr Jitendra Sharma
                </p>
                <p className="main__sub__container--box--team-leaders--4--ack--t1--sub">
                  Project Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main__sub__container--values">
        <h1 className="main__sub__container--values--head">Our Values...</h1>
        <div className="main__sub__container--values--vision--1">
          <div className="vision--1">
            <div className="vision--1--text">
              <h1 className="ov">Our Vision</h1>
              Our vision is to deliver superior services to our esteemed
              clients, consistently surpassing their expectations. Through our
              unwavering commitment to quality and excellence, we aim to
              cultivate a heightened level of trust and confidence among our
              valued clientele.
            </div>
            <div className="vision--1--img"></div>
          </div>
        </div>

        <div className="main__sub__container--values--vision--2">
          <div className="vision--2">
            <div className="vision--2--text">
              <h1 className="ov">Our Mission</h1>
              We aspire to establish enduring partnerships with our customers
              and clients, characterized by mutual trust and loyalty. Our
              dedication to exceptional customer service is exemplified by our
              pursuit of innovation and cutting-edge technology in all aspects
              of our business operations. Through these efforts, we endeavor to
              continually enhance the value we provide to our stakeholders.
            </div>
            <div className="vision--2--img"></div>
          </div>
        </div>
        <div className="comp__val">Synergy - Resilience - Innovation</div>
      </div>
    </div>
  );
};

export default AboutUs;
