import './Profile.scss';
import { useContext, useEffect, useState } from 'react';
import NavigationButton from '/src/components/elements/buttons/NavigationButton/NavigationButton';
import BodyCopy from '/src/components/elements/texts/BodyCopy/BodyCopy';
import LinkText from '/src/components/elements/texts/LinkText/LinkText';
import ProfileInfoUpdateForm from '/src/components/pages/Profile/ProfileInfoUpdateForm/ProfileInfoUpdateForm';
import { submitLogout } from '../../../utils/functions/submits/submitLogout';
import { submitDeactivateAccount } from '../../../utils/functions/submits/submitDeactivateAccount';
import { NotificationContext } from '../../../utils/contexts/contexts';

const Profile = () => {

  const [ enableDeactivateAccount, setEnableDeactivateAccount ] = useState(false)

  const { notificationOn, hideNotification, notificationText, notificationColor, setNotificationOn, setHideNotification, setNotificationText, setNotificationColor } = useContext(NotificationContext)

  useEffect(()=>{
    if(enableDeactivateAccount === true){
      setNotificationColor('pink')
      setNotificationText('Click again to Remove your account')
      setNotificationOn(true)

    }
  },[enableDeactivateAccount])


  return (
    <>
    
    <main id="profile-page">

      <div className="profile-container">
        <div className="profile-content profile-buttons">
          {/* <UserInterfaceButton text='admin' fnc={()=>{console.log('button clicked')}} kind='regular' color='dark'/> */}
          {/* <UserInterfaceButton text='purchases' fnc={()=>{console.log('button clicked')}} kind='regular' color='dark'/> */}
          {/* <UserInterfaceButton text='profile' fnc={()=>{console.log('button clicked')}} kind='regular' color='dark'/> */}
        </div>
        <div className="profile-content">
          <img src="/public/assets/img/illustrations/skol-glasses.svg" alt="" />
        </div>
      </div>

      <div className="profile-container">
        <div className='profile-content'>
          <NavigationButton kind="fnc" text="Personal" color="dark" />
          <BodyCopy text='General information'/>
        </div>
        <div className='profile-content'>
          <LinkText text='Logout'  fnc={()=>{submitLogout()}}/>
          {/* <LinkText text='Deactivate account' fnc={setEnableDeactivateAccount===true ? ()=>{submitDeactivateAccount()} : ()=>{setEnableDeactivateAccount(true)}}/> */}
          {
            enableDeactivateAccount ?
            <LinkText text='Deactivate account' fnc={()=>{submitDeactivateAccount()}} />
            : <LinkText text='Deactivate account' fnc={()=>{setEnableDeactivateAccount(!enableDeactivateAccount)}} />
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