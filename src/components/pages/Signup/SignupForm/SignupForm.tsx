import './SignupForm.scss';
import UserInterfaceButton from "/src/components/elements/buttons/UserInterfaceButton/UserInterfaceButton";
import { signupSubmit } from "/src/utils/functions/submits/submitSignup";
import { asignIdNumber } from "/src/utils/functions/api_fn/asignIdNumber";

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

        <label htmlFor="signup-form-repeat-password">signup repeat password input</label>
        <input
          id="signup-form-repeat-password"
          className="signup-input input-password form-input"
          type="password"
          placeholder="Repeat password"
        />

        <UserInterfaceButton
          text="Signup"
          kind="regular"
          color="pink"
          fnc={async(e):Event => {
            e.preventDefault()
            const newId = await asignIdNumber()
            
            // let signupStatus = await signupSubmit()
            // console.log(signupStatus)
            // signupStatus = 201 ? loginSubmitFromSignUp() : console.log(`something went wrong`);
          }}
          extraClass="signup-form-button"
        />
      </form>
    </>
  );
};

export default SignupForm;
