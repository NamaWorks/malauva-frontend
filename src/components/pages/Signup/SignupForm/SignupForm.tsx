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
  const { dispatchNotification } = useContext(NotificationContext) as NotificationContextInterface;
  const { dispatchNavigation, navigationState } = useContext(NavigationContext) as NavigationContextInterface

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
              dispatchNotification({type: 'SET_NOTIFICATION_TEXT', payload: "creating new profile"})
              dispatchNotification({type: 'SET_NOTIFICATION_COLOR', payload: "dark"})
              dispatchNotification({type: 'SET_NOTIFICATION_ON', payload: true})
              const signupStatus = await signupSubmit({
                personName,
                email,
                username,
                password,
              });
              if(signupStatus === 201){
                dispatchNotification({type: 'SET_NOTIFICATION_ON', payload: false})
                dispatchNotification({type: "SET_NOTIFICATION_TEXT", payload: "you signed up correctly"})
                dispatchNotification({type: 'SET_NOTIFICATION_COLOR', payload: 'green'})
                dispatchNotification({type: 'SET_NOTIFICATION_ON', payload: true})
                setTimeout(async() => {
                  dispatchNotification({type: 'SET_NOTIFICATION_ON', payload: false})
                  const loginRes = await submitLogin({ email, password });
                  if(loginRes === 200){
                    dispatchNavigation({type: 'SET_LOGGED_IN', payload: true})
                    redirectToUrl('/profile')
                  } else {
                    dispatchNotification({type: 'SET_NOTIFICATION_ON', payload: false})
                    dispatchNotification({type: 'SET_NOTIFICATION_TEXT', payload: 'there was a problem when login in'})
                    dispatchNotification({type: 'SET_NOTIFICATION_COLOR', payload: 'pink'})
                    dispatchNotification({type: 'SET_NOTIFICATION_ON', payload: true})
                    navigationState.loggedIn && dispatchNavigation({type: 'SET_LOGGED_IN', payload: false})
                    setTimeout(() => {
                      dispatchNotification({type: 'SET_NOTIFICATION_ON', payload: false})
                    }, 4000);
                  }
                }, 2000);
              } else {
                console.log(`something went wrong`);
                dispatchNotification({type: 'SET_NOTIFICATION_COLOR', payload: 'pink'})
                dispatchNotification({type: 'SET_NOTIFICATION_ON', payload: true})
                dispatchNotification({type: 'SET_NOTIFICATION_TEXT', payload: "check all the fields"})
                setTimeout(() => {
                  dispatchNotification({type: 'SET_NOTIFICATION_ON', payload: false})
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
