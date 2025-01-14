import './LoginForm.scss'
import LinkText from '/src/components/elements/texts/LinkText/LinkText'
import UserInterfaceButton from '/src/components/elements/buttons/UserInterfaceButton/UserInterfaceButton'
import { useContext, useEffect, useState } from 'react'
import { submitLogin } from '/src/utils/functions/submits/submitLogin'
import { NavigationContext, NotificationContext } from '/src/utils/contexts/contexts'
import { redirectToUrl } from '/src/utils/functions/navigation_fn/redirectToUrl'
import Sublink from '../../../elements/Navbar/Sublink/Sublink'

const LoginForm = () => {

  
  const { loggedIn, setLoggedIn } = useContext(NavigationContext) 
  
  const [ email, setEmail ] = useState<string | undefined>();
  const [ password, setPassword ] = useState<string | undefined>();
  const [ passwordVisible, setPasswordVisible ] = useState<boolean>(false);

  const {notificationOn, setNotificationOn, hideNotification, setHideNotification, notificationText, setNotificationText, notificationColor, setNotificationColor} = useContext(NotificationContext)
  
  window.addEventListener("keydown", async (e)=>{
    e.key === 'Enter' && e.preventDefault()
  })

  useEffect(()=>{
    if(loggedIn){
      redirectToUrl('home')
    }
  },[loggedIn])
  
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

      <div className='login-form-div'>
      <label htmlFor="login-form-password">login password input</label>
        <input
          id="login-form-password"
          className="login-input input-password form-input"
          type={passwordVisible ? 'text' : "password"}
          placeholder="Password"
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        <Sublink fnc={():void=>{setPasswordVisible(!passwordVisible)}} text={passwordVisible ? 'Hide Password' : 'Show Password'} color="dark"/>
      </div>

        <LinkText text="Forgot Password?" kind="dimmed" />

        <UserInterfaceButton
          text="Login"
          kind="regular"
          color="pink"
          fnc={async(e:Event) => {
            e.preventDefault()
            const loginStatus = await submitLogin({email, password})
            loginStatus == 200 ? (setLoggedIn(true), setNotificationColor('green'), setNotificationText('credentials ok')) : ( setLoggedIn(false), setNotificationColor('pink'), setNotificationText('something went wrong'));
            setNotificationOn(true)
          }}
          extraClass="login-form-button"
        />
      </form>
    </>
  );
}

export default LoginForm