import '/src/components/elements/Notification/Notification.scss';
import { useContext, useEffect, useRef, useState } from 'react'
import BodyTitles from '../../../components/elements/texts/BodyTitles/BodyTitles'
import { NotificationContext } from '../../..//utils/contexts/contexts';
import { NotificationContextInterface } from '../../../utils/types/interfaces';

const Notification = ({color}: {color?: string, text: string}) => {

  const [notificationPosX, setNotificationPosX] = useState<number>(window.innerWidth/2);
  const componentRef = useRef<HTMLDivElement>(null);

  const {notificationState, dispatchNotification} = useContext(NotificationContext) as NotificationContextInterface

  
  useEffect(()=>{
    centerNotification
  },[notificationState.notificationOn, notificationState.notificationText, notificationState.notificationColor])
  
  function centerNotification () {
    if (componentRef.current) {
      const widthComponent = componentRef.current.getBoundingClientRect().width;
      console.log(widthComponent)
      setNotificationPosX(window.innerWidth/2 - widthComponent/2)
    }
  }

  if(!notificationState.notificationOn){return (null)}

  return (
    <div ref={componentRef} className={`mu-notification notification-${notificationState.notificationColor}`} style={{left:notificationPosX}} onLoad={centerNotification} onChange={centerNotification}>
      <BodyTitles hierarchy={7} text={notificationState.notificationText}/>
      <button className='notification-icon' onClick={()=>{dispatchNotification({type: "SET_NOTIFICATION_ON", payload: false})}}>
        <img src={`/assets/img/icons/close-notification-${(color === 'pink' || 'dark') ? 'beige' : 'dark'}.svg`} alt="close button"/>
      </button>
    </div>
  )
}

export default Notification