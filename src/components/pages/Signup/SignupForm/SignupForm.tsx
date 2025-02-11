import { submitLogin } from "../../../../utils/functions/submits/submitLogin";
import Sublink from "../../../elements/Navbar/Sublink/Sublink";
import "./SignupForm.scss";
import UserInterfaceButton from "/src/components/elements/buttons/UserInterfaceButton/UserInterfaceButton";
import { signupSubmit } from "/src/utils/functions/submits/submitSignup";
import { useState } from "react";

const SignupForm = () => {
  // const [idNumber, setIdNumber] = useState<string>();
  const [personName, setPersonName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordVerification, setPasswordVerification] = useState<boolean>(false);

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false) 
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState<boolean>(false) 

  return (
    <>
      <form id="signup-form" className="form" action="">
        <label htmlFor="signup-form-name">signup email input</label>
        <input
          id="signup-form-name"
          className="signup-input input-text form-input"
          type="email"
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

        {/* <div className="signup-form-div">
          <label htmlFor="signup-form-repeat-password">
            signup repeat password input
          </label>
          <input
            id="signup-form-repeat-password"
            className="signup-input input-password form-input"
            type={repeatPasswordVisible ? "text" : "password" }
            placeholder="Repeat password"
            onChange={(e) => {
              if (e.target.value == password) {
                setPasswordVerification(true);
              } else {
                setPasswordVerification(false);
              }
            }}
          />
          <Sublink fnc={():void=>{setRepeatPasswordVisible(!repeatPasswordVisible)}} text={repeatPasswordVisible ? 'Hide Password' : 'Show Password'} color="dark"/>
        </div> */}

        <UserInterfaceButton
          text="Signup"
          kind="regular"
          color="pink"
          fnc={async (e): Event => {
            e.preventDefault();
            const signupStatus = await signupSubmit({
              personName,
              email,
              username,
              password,
            });
            console.log(signupStatus);
            signupStatus = 201
              ? submitLogin({ email, password })
              : console.log(`something went wrong`);
          }}
          extraClass="signup-form-button"
        />
      </form>
    </>
  );
};

export default SignupForm;
