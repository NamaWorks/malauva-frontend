import './Signup.scss'

import React from 'react'
import SignupForm from './SignupForm/SignupForm'
import LinkText from '../../elements/texts/LinkText/LinkText'
import UserInterfaceButton from '../../elements/buttons/UserInterfaceButton/UserInterfaceButton'
import BodyCopy from '../../elements/texts/BodyCopy/BodyCopy'
import NavPageText from '../../elements/texts/NavPageText/NavPageText'



const Signup = () => {
  return (
    <>

<main id='signup-page'>
        <div className="signup-container">
          <LinkText text='Sign Up' link='#'/>
          <NavPageText text='Sign up'/>
          <BodyCopy text='Sign up or login to see our top picks for you'/>
          <SignupForm/>
          <div className='signup-social'>
            <BodyCopy text='Or sign up with a social account'/>

            <div className='signup-social-buttons'>
              <UserInterfaceButton text='Facebook' kind='regular' color='beige' icons={[{url: '/public/assets/img/icons/facebook_icon.svg', name: 'facebook'}]} fnc={()=>{console.log('choripanes')}}/>
              <UserInterfaceButton text='Google' kind='regular' color='beige' icons={[{url: '/public/assets/img/icons/google_icon.svg', name: 'google icon'}]} fnc={()=>{console.log('choripanes')}}/>
              <UserInterfaceButton text='Instagram' kind='regular' color='beige' icons={[{url: '/public/assets/img/icons/instagram_icon.svg', name: 'instagram icon'}]} fnc={()=>{console.log('choripanes')}}/>
            </div>

          </div>

        </div>
        
        <div className="signup-container">
          <img src="/public/assets/img/pictures/rear_view.png" />
        </div>
      </main>
    
    </>
  )
}

export default Signup