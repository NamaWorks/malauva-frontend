import './Profile.scss';
import { useContext, useEffect, useState } from 'react';
import NavigationButton from '../../../components/elements/buttons/NavigationButton/NavigationButton';
import BodyCopy from '../../../components/elements/texts/BodyCopy/BodyCopy';
import LinkText from '../../../components/elements/texts/LinkText/LinkText';
import ProfileInfoUpdateForm from '../../../components/pages/Profile/ProfileInfoUpdateForm/ProfileInfoUpdateForm';
import { submitLogout } from '../../../utils/functions/submits/submitLogout';
import { submitDeactivateAccount } from '../../../utils/functions/submits/submitDeactivateAccount';
import { NotificationContext } from '../../../utils/contexts/contexts';
import { redirectToUrl } from '../../../utils/functions/navigation_fn/redirectToUrl';
import { NotificationContextInterface } from '../../../utils/types/interfaces';

const Profile = () => {

  const [ enableDeactivateAccount, setEnableDeactivateAccount ] = useState(false)

  const {notificationState, dispatchNotification} = useContext(NotificationContext) as NotificationContextInterface

  useEffect(()=>{
    setEnableDeactivateAccount(false)
  },[])

  useEffect(()=>{
    if(enableDeactivateAccount === true){
        setEnableDeactivateAccount(true)
    }
  },[ notificationState.notificationOn ])


  return (
    <>
    
    <main id="profile-page"
      onLoad={()=>{window.scrollTo(0,0)}}
    >

      <div className="profile-container">
        <div className="profile-content profile-buttons">
          {/* <UserInterfaceButton text='admin' fnc={()=>{console.log('button clicked')}} kind='regular' color='dark'/> */}
          {/* <UserInterfaceButton text='purchases' fnc={()=>{console.log('button clicked')}} kind='regular' color='dark'/> */}
          {/* <UserInterfaceButton text='profile' fnc={()=>{console.log('button clicked')}} kind='regular' color='dark'/> */}
        </div>
        <div className="profile-content">
          <img src="/assets/img/illustrations/skol-glasses.svg" alt="" />
        </div>
      </div>

      <div className="profile-container">
        <div className='profile-content'>
          <NavigationButton kind="fnc" text="Personal" color="dark" />
          <BodyCopy text='General information'/>
        </div>
        <div className='profile-content'>
          <LinkText text='Logout'  fnc={submitLogout}/>
          {/* <LinkText text='Deactivate account' fnc={setEnableDeactivateAccount===true ? ()=>{submitDeactivateAccount()} : ()=>{setEnableDeactivateAccount(true)}}/> */}
          {
            enableDeactivateAccount ?
            <LinkText text='Deactivate account' fnc={async()=>{
              if(await submitDeactivateAccount() === true){
                dispatchNotification({type: "SET_NOTIFICATION_ON", payload: false})
                dispatchNotification({type: 'SET_NOTIFICATION_TEXT', payload: 'account removed'})
                dispatchNotification({type: "SET_NOTIFICATION_COLOR", payload: 'green'})
                dispatchNotification({type: "SET_NOTIFICATION_ON", payload: true})
                setTimeout(() => {
                  submitLogout()
                  redirectToUrl('/home')
                }, 2000);}}} />
                : <LinkText text='Deactivate account' fnc={()=>{
                  setEnableDeactivateAccount(!enableDeactivateAccount);
                  
              dispatchNotification({type: 'SET_NOTIFICATION_TEXT', payload: 'click again to remove your account'})
              dispatchNotification({type: "SET_NOTIFICATION_COLOR", payload: 'pink'})
              dispatchNotification({type: "SET_NOTIFICATION_ON", payload: true})
            }} />
          }
          {/* We need to print a notification for telling the user that needs to click twice on the Deactivate Account button to make it effective */}
          <ProfileInfoUpdateForm/>
        </div>
      </div>

    </main>

    </>
  )
}

export default Profile