import React from 'react'
import LinkText from '../../elements/texts/LinkText/LinkText'
import NavPageText from '../../elements/texts/NavPageText/NavPageText'
import BodyCopy from '../../elements/texts/BodyCopy/BodyCopy'

const Login = () => {
  return (
    <>
      <main>
        <div className="login-container">
          <LinkText text='test' link='#'/>
          <NavPageText text='test'/>
          <BodyCopy text='Sign up or login to see our top picks for you'/>
          
        </div>
        
        <div className="login-container">
          <img src="/public/assets/img/pictures/login_wine-serving.png" alt="man serving wine in Venezia" />
        </div>
      </main>
    </>
  )
}

export default Login