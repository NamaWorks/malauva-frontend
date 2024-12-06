import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import NavbarLink from "./NavbarLink/NavbarLink";
import Sublink from "./Sublink/Sublink";
import NavigationButton from "../buttons/NavigationButton/NavigationButton";
import { getNavbarHeight } from "../../../utils/functions/getNavbarHeight";

const testFnc = (content: string): void | undefined => {
  // console.log(content);
};

const Navbar = () => {
  const [navbarHeight, setNavbarHeight] = useState(800);
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    // we should add here the call to the API in order to show the number of items in the shopping cart
    // console.log(navbarHeight);
    // console.log("toggled " + toggleNav);
  }, [toggleNav]);
  
  return (
    <>
      <nav>
        <div className={`navbar-content ${toggleNav ? 'nav-shown' : 'nav-hidden'}`} id="navbar-top-bar">
          <div id="navbar-logo-container">
            {
              toggleNav ?
              <img src="/public/assets/img/brand/malauva-logo-up-down-dark.svg" alt="MalaUva Logo" />
              : <img src="/public/assets/img/brand/malauva-logo-up-down.svg" alt="Malauva logo" />
            }
          </div>
          <div>
            <NavigationButton
              kind="fnc"
              id="navbar-btn-menu"
              text="menu"
              color={toggleNav ? 'dark' : 'beige'}
              fnc={(): undefined | void => {
                setToggleNav(!toggleNav);
              }}
            />
          </div>
        </div>

        <div
          className={`navbar-content`}
          id={`navbar-toggle-container`}
          style={{
            height: toggleNav ? `${navbarHeight}px` : `00px`,
            position: "absolute",
            top: toggleNav ? `0` : `-200px`,
          }}
        >
          <div className="navbar-toggle-content" id="navbar-links">
            <NavbarLink link="#" text="Shop" />
            <NavbarLink link="#" text="About MalaUva" />
          </div>

          <div
            className="navbar-toggle-content"
            id="navbar-illustration-container"
          >
            <img
              src="/public/assets/img/illustrations/pouring-wine.svg"
              alt="illustration of wine being poured in two glasses"
            />
          </div>

          <div
            className="navbar-toggle-content"
            id="navbar-utilities-container"
          >
            <div className="navbar-utilities-content">
              <Sublink link="#" text="My Account" />
              <Sublink link="#" text="Logout" />
            </div>
            <div className="navbar-utilities-content">
              <Sublink link="#" text="My Cart" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
