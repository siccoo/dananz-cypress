import React from "react";
import "./Home.css";
import Footer from "../../components/footer/Index";
import Navbar from "../../components/navbar/Index";

import HomeImgOne from "../../assets/images/homeImg1.png";
import HomeImgTwo from "../../assets/images/homeImg2.png";
import HomeImgThree from "../../assets/images/homeImg3.png";
import HomeImgFour from "../../assets/images/homeImg4.png";
import HomeImgFive from "../../assets/images/homeImg5.png";
import HomeImgSix from "../../assets/images/homeImg6.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="home">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3>Minimalist Room</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-one">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ad-image">
                <img src={HomeImgOne} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-two">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pt-3">
              <h6>Project Overview</h6>
              <p>
                Online learning with us does not interfere with your daily life.
                because learning can be done anytime and anywhere. Online
                learning with us does not interfere with your daily life.
                because learning can be done anytime and anywhere. Online
                learning with us does not interfere with your daily life.
                because learning can be done anytime and anywhere.
              </p>
              <div style={{ display: "flex", marginTop: "40px" }}>
                <p style={{ marginRight: "70px" }}>July 22 - 2022</p>
                <p>Interior Design - Furnitur</p>
              </div>
            </div>
            <div className="col-md-6 pt-3">
              <h6>Design Process</h6>
              <p>
                Online learning with us does not interfere with your daily life.
                because learning can be done anytime and anywhere. Online
                learning with us does not interfere with your daily life.
                because learning can be done anytime and anywhere.
              </p>
              <p>
                Online learning with us does not interfere with your daily life.
                because learning can be done anytime and anywhere. Online
                learning with us does not interfere with your daily life.
                because learning can be done anytime and anywhere.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pt-3">
              <div className="ad-image">
                <img src={HomeImgTwo} alt="" />
              </div>
            </div>
            <div className="col-md-6 pt-3">
              <div className="ad-image">
                <img src={HomeImgThree} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 pt-3">
              <div className="ad-image">
                <img src={HomeImgFour} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pt-3">
              <div className="ad-image">
                <img src={HomeImgFive} alt="" />
              </div>
            </div>
            <div className="col-md-6 pt-3">
              <div className="ad-image">
                <img src={HomeImgSix} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-three">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>let's discuss making your interior like a dream place!</p>
            </div>
            <div className="col-md-6">
              <div className="contact-section">
                <p>
                  Contact us below to work together to build your amazing
                  interior
                </p>
                <button>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
