import React from "react";
import "./Footer.css";

import FooterLogo from "../../assets/images/dananzLogo.png";
import FacebookIcon from "../../assets/images/facebook.png";
import InstagramIcon from "../../assets/images/instagram.png";
import TiktokIcon from "../../assets/images/tiktok.png";
import YoutubeIcon from "../../assets/images/youtube.png";
import Circle from "../../assets/images/circleIcon.png";
import ArrowUpward from "../../assets/images/arrowUpward.png";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img
                src={FooterLogo}
                className="footer-logo"
                alt="dananz"
              />
              <p className="furniture">One of the best furniture agency.</p>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-4">
              <p className="footer-email">
                <img src={Circle} alt="" />{" "} Enter your email to get the latest news
              </p>
              <div className="footer-subscription">
                <input type="text" placeholder="Email address" />
                <img src={ArrowUpward} alt="" className="arrow-upward" />
              </div>
              <hr className="footer-line" />
              <div className="social-section ">
                <p>Follow us On</p>
                <a href="/">
                  <img
                    src={FacebookIcon}
                    className="social-icon"
                    alt="facebook-icon"
                  />
                </a>
                <a href="/">
                  <img
                    src={InstagramIcon}
                    className="social-icon"
                    alt="instagram-icon"
                  />
                </a>
                <a href="/">
                  <img
                    src={TiktokIcon}
                    className="social-icon"
                    alt="tiktok-icon"
                  />
                </a>
                <a href="/">
                  <img
                    src={YoutubeIcon}
                    className="social-icon"
                    alt="youtube-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
