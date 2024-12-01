import React from "react";
import './SignupForm.scss';
import LinkText from "../../../elements/texts/LinkText/LinkText";
import UserInterfaceButton from "../../../elements/buttons/UserInterfaceButton/UserInterfaceButton";

const SignupForm = () => {
  return (
    <>
      <form id="signup-form" className="form" action="">
        <label htmlFor="signup-form-email">signup email input</label>
        <input
          id="signup-form-email"
          className="signup-input input-text form-input"
          type="text"
          placeholder="Email"
        />

        <label htmlFor="signup-form-password">signup password input</label>
        <input
          id="signup-form-password"
          className="signup-input input-password form-input"
          type="password"
          placeholder="Password"
        />

        <LinkText text="Forgot Password?" kind="dimmed" />

        <UserInterfaceButton
          text="Signup"
          kind="regular"
          color="pink"
          fnc={() => {
            console.log("choripanes");
          }}
          extraClass="signup-form-button"
        />
      </form>
    </>
  );
};

export default SignupForm;
