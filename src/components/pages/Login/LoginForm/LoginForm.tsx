import './LoginForm.scss'
import LinkText from '../../../../components/elements/texts/LinkText/LinkText'
import UserInterfaceButton from '../../../../components/elements/buttons/UserInterfaceButton/UserInterfaceButton'
import { useContext, useEffect, useState } from 'react'
import { submitLogin } from '../../../../utils/functions/submits/submitLogin'
import { NavigationContext, NotificationContext } from '../../../../utils/contexts/contexts'
import { redirectToUrl } from '../../../../utils/functions/navigation_fn/redirectToUrl'
import Sublink from '../../../elements/Navbar/Sublink/Sublink'
import { NavigationContextInterface, NotificationContextInterface } from '../../../../utils/types/interfaces'

const LoginForm = () => {
  const currentPageH = sessionStorage.getItem('currentPage') || ''

  
  const { navigationState, dispatchNavigation} = useContext(NavigationContext) as NavigationContextInterface 
  
  const [ email, setEmail ] = useState<string | undefined>();
  const [ password, setPassword ] = useState<string | undefined>();
  const [ passwordVisible, setPasswordVisible ] = useState<boolean>(false);

  const {dispatchNotification, notificationState} = useContext(NotificationContext) as NotificationContextInterface;
  
  window.addEventListener("keydown", async (e)=>{
    e.key === 'Enter' && e.preventDefault()
  })

  useEffect(()=>{
    if(navigationState.loggedIn){
      redirectToUrl(`${navigationState.currentPage}`)
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
          fnc={
            async(e:Event):Promise<any> => {
              e.preventDefault()

            dispatchNotification({type: 'SET_NOTIFICATION_COLOR', payload: 'dark'})
            dispatchNotification({type: "SET_NOTIFICATION_TEXT", payload: 'Connecting with server'})
            dispatchNotification({type: 'SET_NOTIFICATION_ON', payload: true})
            setTimeout(() => {
              dispatchNotification({type: 'SET_NOTIFICATION_ON', payload: false})
            }, 4000);

              const loginStatus = await submitLogin({email, password})
              console.log(loginStatus)
              if(loginStatus == 200) {
                dispatchNavigation({type: 'SET_LOGGED_IN', payload: true})
                dispatchNotification({type: 'SET_NOTIFICATION_COLOR', payload: 'green'})
                dispatchNotification({type: "SET_NOTIFICATION_TEXT", payload: 'credentials ok. Redirecting...'})
                dispatchNotification({type: 'SET_NOTIFICATION_ON', payload: true})
                setTimeout(() => {
                  dispatchNotification({type: 'SET_NOTIFICATION_ON', payload: false})
                  redirectToUrl(currentPageH)
                }, 2000);
              } else {
                console.log(notificationState)
                dispatchNavigation({type: 'SET_LOGGED_IN', payload: false})
                dispatchNotification({type: 'SET_NOTIFICATION_COLOR', payload: 'pink'})
                dispatchNotification({type: "SET_NOTIFICATION_TEXT", payload: 'something went wrong'})
                dispatchNotification({type: 'SET_NOTIFICATION_ON', payload: true})
                setTimeout(() => {
                  dispatchNotification({type: 'SET_NOTIFICATION_ON', payload: false})
                }, 4000);
              }
              dispatchNotification({type: 'SET_NOTIFICATION_ON', payload: true})
            }
          }
          extraClass="login-form-button"
        />
      </form>
    </>
  );
}

export default LoginForm