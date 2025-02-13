export const removeNotification = ():void => {
  const notifications = document.querySelectorAll('.mu-notification');
  notifications.forEach((notification)=>{
    notification.remove()
  })
}
