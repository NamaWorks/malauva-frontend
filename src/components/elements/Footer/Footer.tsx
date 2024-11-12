import NavigationButton from "../buttons/NavigationButton/NavigationButton";
import Sublink from "../Navbar/Sublink/Sublink";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container" id="footer-container-logo">
          <img src="/public/assets/img/brand/footer-logo.svg" alt="" />
        </div>
        <div className="footer-container" id="footer-container-under-logo">
          <div>
            <p>Underwine Societá agricola srl</p>
          </div>
          <div>
            <Sublink color="dark" link="#" text="privacy policy" />
            <Sublink color="dark" link="#" text="cookie policy" />
            <Sublink color="dark" link="#" text="credits" />
            <Sublink color="dark" link="#" text="contact" />
          </div>
        </div>
        <div className="footer-container" id="footer-navigation-links">
          <NavigationButton
            kind="link"
            id="navbar-btn-menu"
            text="menu"
            color="dark"
            link={'#'}
          />
          <NavigationButton
            kind="fnc"
            id="navbar-btn-menu"
            text="menu"
            color="dark"
            fnc={(): undefined => {
              setToggleNav(!toggleNav);
            }}
          />
          <NavigationButton
            kind="fnc"
            id="navbar-btn-menu"
            text="menu"
            color="dark"
            fnc={(): undefined => {
              setToggleNav(!toggleNav);
            }}
          />
          <NavigationButton
            kind="fnc"
            id="navbar-btn-menu"
            text="menu"
            color="dark"
            fnc={(): undefined => {
              setToggleNav(!toggleNav);
            }}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
