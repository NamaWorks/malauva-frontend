import './LoginForm.scss'
import LinkText from '/src/components/elements/texts/LinkText/LinkText'
import UserInterfaceButton from '/src/components/elements/buttons/UserInterfaceButton/UserInterfaceButton'
import { useContext, useEffect, useState } from 'react'
import { submitLogin } from '../../../../utils/functions/submits/submitLogin'
import { NavigationContext } from '../../../../utils/contexts/contexts'
import { redirectToUrl } from '../../../../utils/functions/navigation_fn/redirectToUrl'

const LoginForm = () => {

  
  const { loggedIn, setLoggedIn } = useContext(NavigationContext) 
  
  const [ email, setEmail ] = useState<string | undefined>();
  const [ password, setPassword ] = useState<string | undefined>();
  
  window.addEventListener("keydown", async (e)=>{
    e.key === 'Enter' && e.preventDefault()
  })

  useEffect(()=>{
    if(loggedIn){
      redirectToUrl('home')
    }
  },[])
  
  return (
    <>
      <form id="login-form" className="form" action="">
        <label htmlFor="login-form-email">login email input</label>
        <input
          id="login-form-email"
          className="login-input input-text form-input"
          type="text"
          placeholder="Email"
          onChange={(e)=>{setEmail(e.target.value)}}
          />

        <label htmlFor="login-form-password">login password input</label>
        <input
          id="login-form-password"
          className="login-input input-password form-input"
          type="password"
          placeholder="Password"
          onChange={(e)=>{setPassword(e.target.value)}}
        />

        <LinkText text="Forgot Password?" kind="dimmed" />

        <UserInterfaceButton
          text="Login"
          kind="regular"
          color="pink"
          fnc={async(e:Event) => {
            e.preventDefault()
            const loginStatus = await submitLogin({email, password})
            console.log(loginStatus)
            loginStatus == 200 ? setLoggedIn(true) : console.log(`something went wrong`);
          }}
          extraClass="login-form-button"
        />
      </form>
    </>
  );
}

export default LoginForm