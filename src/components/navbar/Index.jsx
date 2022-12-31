import React from "react";
import "./Navbar.css";

import HomeLogo from "../../assets/images/dananzLogo.png";

const Navbar = () => {
  return (
    <>
      <section className="nav-section">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light nav-bg">
            <a className="navbar-brand" href="/">
              <img
                src={HomeLogo}
                className="home-logo"
                alt="home-logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarSupportedContent" className="navbar-collapse collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    {" "}
                    Home{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    {" "}
                    About Us{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    {" "}
                    Services{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    {" "}
                    Our Teams{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-btn">
                    {" "}
                    Contact Us{" "}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
