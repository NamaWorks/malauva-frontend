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
            text="home"
            color="dark"
            link="home"
          />
          <NavigationButton
            kind="link"
            id="navbar-btn-menu"
            text="faq"
            color="dark"
            link="faq"
          />
          <NavigationButton
            kind="link"
            id="navbar-btn-menu"
            text="shop"
            color="dark"
            link="products"
          />
          <NavigationButton
            kind="link"
            id="navbar-btn-menu"
            text="about"
            color="dark"
            link="about"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
