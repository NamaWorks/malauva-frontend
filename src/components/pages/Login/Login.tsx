import './Login.scss'
import React from 'react'
import LinkText from '/src/components/elements/texts/LinkText/LinkText'
import NavPageText from '/src/components/elements/texts/NavPageText/NavPageText'
import BodyCopy from '/src/components/elements/texts/BodyCopy/BodyCopy'
import UserInterfaceButton from '/src/components/elements/buttons/UserInterfaceButton/UserInterfaceButton'
import LoginForm from '/src/components/pages/Login/LoginForm/LoginForm'

const Login = () => {
  return (
    <>
      <main id='login-page'>
        <div className="login-container">
          <LinkText text='Sign Up' link='#'/>
          <NavPageText text='Login'/>
          <BodyCopy text='Sign up or login to see our top picks for you'/>
          <LoginForm/>
          <div className='login-social'>
            <BodyCopy text='Or sign up with a social account'/>

            <div className='login-social-buttons'>
              <UserInterfaceButton text='Facebook' kind='regular' color='beige' icons={[{url: '/public/assets/img/icons/facebook_icon.svg', name: 'facebook'}]} fnc={()=>{console.log('choripanes')}}/>
              <UserInterfaceButton text='Google' kind='regular' color='beige' icons={[{url: '/public/assets/img/icons/google_icon.svg', name: 'google icon'}]} fnc={()=>{console.log('choripanes')}}/>
              <UserInterfaceButton text='Instagram' kind='regular' color='beige' icons={[{url: '/public/assets/img/icons/instagram_icon.svg', name: 'instagram icon'}]} fnc={()=>{console.log('choripanes')}}/>
            </div>

          </div>

        </div>
        
        <div className="login-container">
          <img src="/public/assets/img/pictures/login_wine-serving.png" alt="man serving wine in Venezia" />
        </div>
      </main>
    </>
  )
}

export default Login