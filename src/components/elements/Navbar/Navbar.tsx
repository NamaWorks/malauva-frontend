import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar-content" id="navbar-top-bar">
          <div id="navbar-logo-container">
            <img src="" alt="" />
          </div>
          <div>
            <button className="btn-secondary" id="navbar-btn-menu">Menu</button>
          </div>
        </div>

        <div className="navbar-content" id="navbar-toggle-container">
          <div className="navbar-toggle-content" id="navbar-links">
            <div className="navbar-link-container">
              <a href="#" className="h4-primary navbar-link">Shop</a>
            </div>
            <div className="navbar-link-container">
              <a href="#" className="h4-primary navbar-link">About MalaUva</a>
            </div>
          </div>

          <div className="navbar-toggle-content" id="navbar-utilities-container">
            <div className="navbar-utilities-content">
              <a href="#" className="navbar-utility sublink">My Account</a>
              <a href="#" className="navbar-utility sublink">Logout</a>
            </div>
            <div className="navbar-utilities-content">
                <a href="#" className="navbar-utility sublink">My Cart</a>
            </div>
          </div>

          <div className="navbar-toggle-content" id="navbar-illustration-container">
            <img src="#" alt="illustration of wine being poured in two glasses" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
