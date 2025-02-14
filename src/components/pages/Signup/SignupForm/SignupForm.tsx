import { NavigationContext, NotificationContext } from "../../../../utils/contexts/contexts";
import { submitLogin } from "../../../../utils/functions/submits/submitLogin";
import Sublink from "../../../../components/elements/Navbar/Sublink/Sublink";
import "./SignupForm.scss";
import UserInterfaceButton from "../../../../components/elements/buttons/UserInterfaceButton/UserInterfaceButton";
import { signupSubmit } from "../../../../utils/functions/submits/submitSignup";
import { useContext, useState } from "react";
import { redirectToUrl } from "../../../../utils/functions/navigation_fn/redirectToUrl";
import { NavigationContextInterface, NotificationContextInterface } from "../../../../utils/types/interfaces";

const SignupForm = () => {
  const { setNotificationOn, setNotificationText, setNotificationColor } = useContext(NotificationContext) as NotificationContextInterface;
  const { loggedIn, setLoggedIn } = useContext(NavigationContext) as NavigationContextInterface

  const [personName, setPersonName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  return (
    <>
      <form id="signup-form" className="form" action="">
        <label htmlFor="signup-form-name">signup email input</label>
        <input
          id="signup-form-name"
          className="signup-input input-text form-input"
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setPersonName(e.target.value);
          }}
        />

        <label htmlFor="signup-form-email">signup email input</label>
        <input
          id="signup-form-email"
          className="signup-input input-text form-input"
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="signup-form-username">signup email input</label>
        <input
          id="signup-form-username"
          className="signup-input input-text form-input"
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <div className="signup-form-div">
          <label htmlFor="signup-form-password">signup password input</label>
          <input
            id="signup-form-password"
            className="signup-input input-password form-input"
            type={passwordVisible ? "text" : "password"}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Sublink fnc={():void=>{setPasswordVisible(!passwordVisible)}} text={passwordVisible ? 'Hide Password' : 'Show Password'} color="dark"/>
        </div>

        <UserInterfaceButton
          text="Signup"
          kind="regular"
          color="pink"
          fnc={
            async (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              setNotificationText('creating new Profile')
              setNotificationColor('dark')
              setNotificationOn(true)
              const signupStatus = await signupSubmit({
                personName,
                email,
                username,
                password,
              });
              if(signupStatus === 201){
                setNotificationOn(false)
                console.log('signed up correctly')
                setNotificationText('You signed up correctly')
                setNotificationColor('green')
                setNotificationOn(true)
                setTimeout(async() => {
                  setNotificationOn(false)
                  const loginRes = await submitLogin({ email, password });
                  if(loginRes === 200){
                    setLoggedIn(true)
                    redirectToUrl('/profile')
                  } else {
                    setNotificationOn(false)
                    console.error('could not sign up')
                    setNotificationText('There was a problem when login in')
                    setNotificationColor('pink')
                    setNotificationOn(true)
                    loggedIn && setLoggedIn(false)
                    setTimeout(() => {
                      setNotificationOn(false)
                    }, 4000);
                  }
                }, 2000);
              } else {
                console.log(`something went wrong`);
                setNotificationText(`Check all the fields`);
                setNotificationColor('pink');
                setNotificationOn(true);
                setTimeout(() => {
                  setNotificationOn(false)
                }, 4000);
              }
            }
          }
          extraClass="signup-form-button"
        />
      </form>
    </>
  );
};

export default SignupForm;
