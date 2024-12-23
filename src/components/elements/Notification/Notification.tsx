import './Notification.scss';
import React, { useEffect, useRef, useState } from 'react'
import BodyTitles from '../texts/BodyTitles/BodyTitles'

const Notification = ({color, text}) => {

  const [notificationPosX, setNotificationPosX] = useState<number>(window.innerWidth/2);
  const componentRef = useRef(null);

  useEffect(()=>{
    const widthComponent = componentRef.current.getBoundingClientRect().width;
    setNotificationPosX(window.innerWidth/2 - widthComponent/2)
  },[])

  return (
  <div ref={componentRef} className={`mu-notification notification-${color}`} style={{left:notificationPosX}}>
      <BodyTitles hierarchy={7} text={text}/>
      <button className='notification-icon'>
        <img src={`/public/assets/img/icons/close-notification-${color === 'pink' || 'dark' ? 'beige' : 'dark'}.svg`} alt="close button" />
      </button>
    </div>
  )
}

export default Notification