import BodyCopy from '../../../elements/texts/BodyCopy/BodyCopy'
import './HomeAboutUs.scss'
import React, { useContext, useEffect } from 'react'

const HomeAboutUs = () => {
  return (
    <>
    <section className='home-section' id='home-about-us'>
    <div className='home-about-us-container'>
      <BodyCopy 
        text={'Lorem ipsum dolor sit amet consectetur. Amet maecenas consectetur vulputate nibh dignissim sed dolor aliquet tristique. Eu viverra tortor ut dui iaculis quis urna amet. Et a ultrices et laoreet placerat enim massa nunc. Dignissim aliquam mus aliquam aenean faucibus velit.'}
        kind='highlight'
        color='dark'
      />
      <div id='home-about-us-illustration'>
        <img src="/public/assets/img/illustrations/another-one.svg" alt="illustration of pouring wine" />
      </div>
    </div>
    <div className='home-about-us-container'>
      <img src="/public/assets/img/pictures/gondola-ride.png" alt="image of a gondola ride" />
    </div>
  </section>
  </>
  )
}

export default HomeAboutUs