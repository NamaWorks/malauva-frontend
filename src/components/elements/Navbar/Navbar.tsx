import { useContext, useEffect, useState } from "react";
import "./Navbar.scss";
import NavbarLink from "./NavbarLink/NavbarLink";
import Sublink from "./Sublink/Sublink";
import NavigationButton from "../buttons/NavigationButton/NavigationButton";
// import { redirectToUrl } from "../../../utils/functions/navigation_fn/redirectToUrl";ys
import { submitLogout } from "../../../utils/functions/submits/submitLogout";
import { NavigationContext } from "../../../utils/contexts/contexts";
import { NavigationContextInterface } from "../../../utils/types/interfaces";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [ userLogged, setUserLogged ] = useState<boolean>()
  const [navbarHeight, setNavbarHeight] = useState<number>(800);
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  const { dispatchNavigation, navigationState } = useContext(NavigationContext) as NavigationContextInterface

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      setUserLogged(true)
    }

    if(window.innerWidth <= 550){
      setNavbarHeight(400)
    } else {setNavbarHeight(800)}
  }, [toggleNav]);
  
  return (
    <>
      <nav
        // onClick={()=>{setToggleNav(!toggleNav)}}
      >
        <div className={`navbar-content ${toggleNav ? 'nav-shown' : 'nav-hidden'}`} id="navbar-top-bar">
          <Link to={'home'} onClick={()=>{setToggleNav(false)}}>
          <div id="navbar-logo-container" onClick={()=>{console.log('home')}}>
            {
              toggleNav ?
              <img src="/assets/img/brand/malauva-logo-up-down-dark.svg" alt="MalaUva Logo" />
              : <img src="/assets/img/brand/malauva-logo-up-down.svg" alt="Malauva logo" />
            }
          </div>
            </Link>
          <div className="navbar-menu-side">

            {
              userLogged === true
              ?<></>
              :<>
                <Sublink link="/login" text="Login" fnc={()=>{setToggleNav(false)}}/>
                <Sublink link="/signup" text="signup" fnc={()=>{setToggleNav(false)}}/>
              </>
            }

            <NavigationButton
              kind="fnc"
              id="navbar-btn-menu"
              text="menu"
              color={toggleNav ? 'dark' : 'beige'}
              fnc={() => {
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
              <NavbarLink link="/products" text="Shop" setToggleNav={setToggleNav}/>
              <NavbarLink link="/about" text="About MalaUva" setToggleNav={setToggleNav}/>
          </div>

          <div
            className="navbar-toggle-content"
            id="navbar-illustration-container"
          >
            <img
              src="/assets/img/illustrations/pouring-wine.svg"
              alt="illustration of wine being poured in two glasses"
            />
          </div>

          <div
            className="navbar-toggle-content"
            id="navbar-utilities-container"
          >
            <div className="navbar-utilities-content">
              {userLogged && (
                <>
                    <Sublink link="/profile" text="My Account" fnc={()=>{setToggleNav(false)}}/>
                  
                    <Sublink fnc={()=>{submitLogout(); navigationState.loggedIn && dispatchNavigation({type: 'SET_LOGGED_IN', payload: false}) && setToggleNav(false)}} text="Logout" />
                  
                </>
              )}

              {!userLogged && (
                <>
                    <Sublink link="/login" text="Login" fnc={()=>{setToggleNav(false)}}/>
                    <Sublink link="/signup" text="signup" fnc={()=>{setToggleNav(false)}}/>
                </>
              )
              }
            </div>
            <div className="navbar-utilities-content">
                <Sublink link="/cart" text="My Cart" fnc={()=>{setToggleNav(false)}}/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
