import './Profile.scss'
import React from 'react'
import BodyTitles from '../../elements/texts/BodyTitles/BodyTitles'
import UserInterfaceButton from '../../elements/buttons/UserInterfaceButton/UserInterfaceButton'
import NavigationButton from '../../elements/buttons/NavigationButton/NavigationButton'
import BodyCopy from '../../elements/texts/BodyCopy/BodyCopy'
import LinkText from '../../elements/texts/LinkText/LinkText'
import ProfileInfoUpdateForm from './ProfileInfoUpdateForm/ProfileInfoUpdateForm'

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