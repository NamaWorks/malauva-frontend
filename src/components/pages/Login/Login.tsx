import './Login.scss'
import React from 'react'
import LinkText from '../../elements/texts/LinkText/LinkText'
import NavPageText from '../../elements/texts/NavPageText/NavPageText'
import BodyCopy from '../../elements/texts/BodyCopy/BodyCopy'
import UserInterfaceButton from '../../elements/buttons/UserInterfaceButton/UserInterfaceButton'

const Login = () => {
  return (
    <>
      <main>
        <div className="login-container">
          <LinkText text='test' link='#'/>
          <NavPageText text='test'/>
          <BodyCopy text='Sign up or login to see our top picks for you'/>

          <form action="">

              <label htmlFor="login-form-email">login email input</label>
              <input id='login-form-email' className='login-input' type="text" placeholder='Email' />

              <label htmlFor="login-form-password">login password input</label>
              <input id='login-form-password' className='login-input' type="password" placeholder='Password' />

              <a href="#">Forgot password?</a>

              <UserInterfaceButton text='Login' kind='regular' color='pink' fnc={()=>{console.log('choripanes')}}/>
            
          </form>

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