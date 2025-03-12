import "./Login.scss";
import LinkText from "../../../components/elements/texts/LinkText/LinkText";
import NavPageText from "../../../components/elements/texts/NavPageText/NavPageText";
import BodyCopy from "../../../components/elements/texts/BodyCopy/BodyCopy";
import UserInterfaceButton from "../../../components/elements/buttons/UserInterfaceButton/UserInterfaceButton";
import LoginForm from "../../../components/pages/Login/LoginForm/LoginForm";
import { useContext, useEffect } from "react";
import { NavigationContext } from "../../../utils/contexts/contexts";
import { NavigationContextInterface } from "../../../utils/types/interfaces";

const Login = () => {   
  
  const { navigationState } = useContext(NavigationContext) as NavigationContextInterface


  useEffect(()=>{},[])

  
    return (
      <>
      <main id="login-page"
        onLoad={
          ()=>{
            window.scrollTo(0,0);
            console.log(navigationState)
          }
        }
      >
        <div className="login-container">
          <LinkText text="Sign Up" link="/signup" />
          <NavPageText text="Login" />
          <BodyCopy text="Sign up or login to see our top picks for you" />
          <LoginForm />
          <div className="login-social">
            <BodyCopy text="Or sign up with a social account" />

            <div className="login-social-buttons">
              <UserInterfaceButton
                text="Facebook"
                kind="regular"
                color="beige"
                icons={[
                  {
                    url: "/assets/img/icons/facebook_icon.svg",
                    name: "facebook",
                  },
                ]}
                fnc={() => {
                  console.log("click");
                }}
              />
              <UserInterfaceButton
                text="Google"
                kind="regular"
                color="beige"
                icons={[
                  {
                    url: "/assets/img/icons/google_icon.svg",
                    name: "google icon",
                  },
                ]}
                fnc={() => {
                  console.log("click");
                }}
              />
              <UserInterfaceButton
                text="Instagram"
                kind="regular"
                color="beige"
                icons={[
                  {
                    url: "/assets/img/icons/instagram_icon.svg",
                    name: "instagram icon",
                  },
                ]}
                fnc={() => {
                  console.log('click')
                }}
              />
            </div>
          </div>
        </div>

        <div className="login-container">
          <img
            src="/assets/img/pictures/login_wine-serving.webp"
            alt="man serving wine in Venezia"
          />
        </div>
      </main>
    </>
  );
};

export default Login;
