import './Profile.scss'
import React from 'react'
import BodyTitles from '/src/components/elements/texts/BodyTitles/BodyTitles'
import UserInterfaceButton from '/src/components/elements/buttons/UserInterfaceButton/UserInterfaceButton'
import NavigationButton from '/src/components/elements/buttons/NavigationButton/NavigationButton'
import BodyCopy from '/src/components/elements/texts/BodyCopy/BodyCopy'
import LinkText from '/src/components/elements/texts/LinkText/LinkText'
import ProfileInfoUpdateForm from '/src/components/pages/Profile/ProfileInfoUpdateForm/ProfileInfoUpdateForm'

const Profile = () => {
  return (
    <>
    
    <main id="profile-page">

      <div className="profile-container">
        <div className="profile-content profile-buttons">
          <UserInterfaceButton text='admin' fnc={console.log('button clicked')} kind='regular' color='dark'/>
          <UserInterfaceButton text='purchases' fnc={console.log('button clicked')} kind='regular' color='dark'/>
          <UserInterfaceButton text='profile' fnc={console.log('button clicked')} kind='regular' color='dark'/>
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
          <LinkText text='Logout' link='#'/>
          <LinkText text='Deactivate account' link='#'/>
          <ProfileInfoUpdateForm/>
        </div>
      </div>

    </main>

    </>
  )
}

export default Profile