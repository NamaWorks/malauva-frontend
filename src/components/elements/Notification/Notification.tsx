import '/src/components/elements/Notification/Notification.scss';
import { useContext, useEffect, useRef, useState } from 'react'
import BodyTitles from '/src/components/elements/texts/BodyTitles/BodyTitles'
import { removeNotification } from '/src/utils/functions/ui_fn/notificationFunctions';
import { NotificationContext } from '/src/utils/contexts/contexts';

const Notification = ({color, text}: {color: string, text: string}) => {

  const [notificationPosX, setNotificationPosX] = useState<number>(window.innerWidth/2);
  const componentRef = useRef(null);

  const {notificationOn, setNotificationOn, hideNotification, setHideNotification, notificationText, setNotificationText, notificationColor, setNotificationColor} = useContext(NotificationContext)

  useEffect(()=>{
    // console.log(notificationOn)
    if(notificationOn){
      const widthComponent = componentRef.current.getBoundingClientRect().width;
      // console.log(widthComponent)
      setNotificationPosX(window.innerWidth/2 - widthComponent/2)
    }
  },[notificationOn])

  if(!notificationOn){return (null)}

  return (
  <div ref={componentRef} className={`mu-notification notification-${notificationColor}`} style={{left:notificationPosX}}>
      <BodyTitles hierarchy={7} text={notificationText}/>
      <button className='notification-icon' onClick={()=>{setNotificationOn(false)}}>
        <img src={`/public/assets/img/icons/close-notification-${color === ('pink' || 'dark') ? 'beige' : 'dark'}.svg`} alt="close button" />
      </button>
    </div>
  )


}

export default Notification