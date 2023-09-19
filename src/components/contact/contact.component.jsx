import React from "react";
import "./contact.styles.scss";
const Contact = () => {
  return (
    <div className="contact__main__container">
      <div className="contact--us-banner">
        <h1 className="contact__main__container--head">Contact us</h1>
      </div>
      <div className="contact__main__container--box">
        <div className="contact__main__container--box--left">
          <div className="contact__main__container--box--left--office-add">
            <div className="contact__main__container--box--left--office-add--1">
              <span className="office-em" style={{ fontWeight: 500 }}>
                Office Address:
              </span>{" "}
              110/875, Sant. Gajanan Maharaj Marg, Best Colony Rd, Motilal Nagar
              I, Goregaon West, Mumbai, Maharashtra – 400104
            </div>
          </div>
          <div className="contact__main__container--box--left--factory-add">
            <span className="office-em" style={{ fontWeight: 500 }}>
              Factory Address:{" "}
            </span>
            31, Avdhut Raj Industrial Estate, Pelhar, Off Western Expressway
            Highway, Vasai- East. Maharashtra- 401208, Maharashtra
          </div>
          <div className="email-add">
            <span className="office-em" style={{ fontWeight: 500 }}>
              Email:
            </span>
            info@kayainfrastructure.in
          </div>
          <div className="phone-num">
            <span className="office-em" style={{ fontWeight: 500 }}>
              Phone:{" "}
            </span>
            9987537555
          </div>
          <div className="whatsapp">
            <span className="office-em" style={{ fontWeight: 500 }}>
              Whatsapp:{" "}
            </span>
            9987537555
          </div>
        </div>
        <div className="contact__main__container--box--right">sdsd</div>
      </div>
    </div>
  );
};

export default Contact;
