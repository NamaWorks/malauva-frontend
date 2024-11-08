import React from "react";
import "./Navbar.scss";
import NavbarLink from "./NavbarLink/NavbarLink";
import Sublink from "./Sublink/Sublink";

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
            <NavbarLink link='#' text= 'Shop'/>
            <NavbarLink link='#' text= 'About MalaUva'/>
          </div>

          <div className="navbar-toggle-content" id="navbar-utilities-container">
            <div className="navbar-utilities-content">
              <Sublink link='#' text='My Account' />
              <Sublink link='#' text='Logout' />
            </div>
            <div className="navbar-utilities-content">
              <Sublink link='#' text='Cart' />
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
