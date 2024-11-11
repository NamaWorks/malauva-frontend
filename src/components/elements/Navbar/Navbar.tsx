import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import NavbarLink from "./NavbarLink/NavbarLink";
import Sublink from "./Sublink/Sublink";
import NavigationButton from "../buttons/NavigationButton/NavigationButton";
import { getNavbarHeight } from "../../../utils/functions/getNavbarHeight";

const testFnc = (content: string): void | undefined => {
  console.log(content);
};

const Navbar = () => {
  const [navbarHeight, setNavbarHeight] = useState();
  const [toggleNav, setToggleNav] = useState(true);

  useEffect(() => {
    // we should add here the call to the API in order to show the number of items in the shopping cart
    console.log(navbarHeight);
    console.log("toggled " + toggleNav);
  }, [toggleNav]);
  
  return (
    <>
      <nav>
        <div className="navbar-content" id="navbar-top-bar">
          <div id="navbar-logo-container">
            <img src="#" alt="MalaUva Logo" />
          </div>
          <div>
            <NavigationButton
              kind="fnc"
              id="navbar-btn-menu"
              text="menu"
              color="dark"
              fnc={() => {
                setToggleNav(!toggleNav);
              }}
            />
          </div>
        </div>

        <div
          className="navbar-content"
          id="navbar-toggle-container"
          style={{
            height: toggleNav ? `${navbarHeight}px` : `200px`,
            position: "relative",
            top: toggleNav ? `0` : `-100px`,
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
              src="/public/assets/img/pouring wine.svg"
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
