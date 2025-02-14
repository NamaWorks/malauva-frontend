import './Signup.scss'

import { useContext, useEffect } from 'react'
import SignupForm from '../../../components/pages/Signup/SignupForm/SignupForm'
import LinkText from '../../..//components/elements/texts/LinkText/LinkText'
import UserInterfaceButton from '../../..//components/elements/buttons/UserInterfaceButton/UserInterfaceButton'
import BodyCopy from '../../..//components/elements/texts/BodyCopy/BodyCopy'
import NavPageText from '../../..//components/elements/texts/NavPageText/NavPageText'
import { overAgeChecker } from '../../..//utils/functions/ui_fn/overAgeChecker'
import { NavigationContext } from '../../..//utils/contexts/contexts'
import { NavigationContextInterface } from '../../../utils/types/interfaces'

const Signup = () => {
  const { overAge } = useContext(NavigationContext) as NavigationContextInterface

  useEffect(()=>{
    overAgeChecker(overAge)
  },[])

  return (
    <main id='signup-page'>
      <div className="signup-container">
        <LinkText text='Log In' link='login'/>
        <NavPageText text='Sign up'/>
        <BodyCopy text='Sign up or login to see our top picks for you'/>
        <SignupForm/>
        <div className='signup-social'>
          <BodyCopy text='Or sign up with a social account'/>
          <div className='signup-social-buttons'>
            <UserInterfaceButton text='Facebook' kind='regular' color='beige' icons={[{url: '/assets/img/icons/facebook_icon.svg', name: 'facebook'}]} fnc={()=>{console.log('choripanes')}}/>
            <UserInterfaceButton text='Google' kind='regular' color='beige' icons={[{url: '/assets/img/icons/google_icon.svg', name: 'google icon'}]} fnc={()=>{console.log('choripanes')}}/>
            <UserInterfaceButton text='Instagram' kind='regular' color='beige' icons={[{url: '/assets/img/icons/instagram_icon.svg', name: 'instagram icon'}]} fnc={()=>{console.log('choripanes')}}/>
          </div>
        </div>
      </div>
      <div className="signup-container">
        <img src="/assets/img/pictures/rear_view.png" />
      </div>
    </main>
  )
}

export default Signup