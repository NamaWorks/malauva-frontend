import './Login.scss'
import React from 'react'
import LinkText from '../../elements/texts/LinkText/LinkText'
import NavPageText from '../../elements/texts/NavPageText/NavPageText'
import BodyCopy from '../../elements/texts/BodyCopy/BodyCopy'
import UserInterfaceButton from '../../elements/buttons/UserInterfaceButton/UserInterfaceButton'
import LoginForm from './LoginForm/LoginForm'

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
              <UserInterfaceButton text='Facebook' kind='regular' color='beige' icons={['/#']} fnc={()=>{console.log('choripanes')}}/>

              <UserInterfaceButton text='Google' kind='regular' color='beige' icons={['/#']} fnc={()=>{console.log('choripanes')}}/>

              <UserInterfaceButton text='Instagram' kind='regular' color='beige' icons={['/#']} fnc={()=>{console.log('choripanes')}}/>
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