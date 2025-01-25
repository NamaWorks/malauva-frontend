import './Profile.scss';
import React, { useEffect, useState } from 'react';
import UserInterfaceButton from '/src/components/elements/buttons/UserInterfaceButton/UserInterfaceButton';
import NavigationButton from '/src/components/elements/buttons/NavigationButton/NavigationButton';
import BodyCopy from '/src/components/elements/texts/BodyCopy/BodyCopy';
import LinkText from '/src/components/elements/texts/LinkText/LinkText';
import ProfileInfoUpdateForm from '/src/components/pages/Profile/ProfileInfoUpdateForm/ProfileInfoUpdateForm';
import { submitLogout } from '../../../utils/functions/submits/submitLogout';
import { submitDeactivateAccount } from '../../../utils/functions/submits/submitDeactivateAccount';
import { fetchData } from '../../../utils/functions/api_fn/fetchData';
import { apiUrl } from '../../../data/globalVariables';

const Profile = () => {

  const [ enableDeactivateAccount, setEnableDeactivateAccount ] = useState(false)

  useEffect(()=>{
    console.log(enableDeactivateAccount)
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