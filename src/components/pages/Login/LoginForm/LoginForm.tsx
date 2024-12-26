import './LoginForm.scss'
import React from 'react'
import LinkText from '/src/components/elements/texts/LinkText/LinkText'
import UserInterfaceButton from '/src/components/elements/buttons/UserInterfaceButton/UserInterfaceButton'
import BodyCopy from '/src/components/elements/texts/BodyCopy/BodyCopy'

const LoginForm = () => {
  return (
    <>
      <form id="login-form" className="form" action="">
        <label htmlFor="login-form-email">login email input</label>
        <input
          id="login-form-email"
          className="login-input input-text form-input"
          type="text"
          placeholder="Email"
        />

        <label htmlFor="login-form-password">login password input</label>
        <input
          id="login-form-password"
          className="login-input input-password form-input"
          type="password"
          placeholder="Password"
        />

        <LinkText text="Forgot Password?" kind="dimmed" />

        <UserInterfaceButton
          text="Login"
          kind="regular"
          color="pink"
          fnc={() => {
            console.log("choripanes");
          }}
          extraClass="login-form-button"
        />
      </form>
    </>
  );
}

export default LoginForm