import { NotificationContext } from '../../../../utils/contexts/contexts'
import { fetchData } from '../../../../utils/functions/api_fn/fetchData'
// import redirectToPage from '../../../../utils/hooks/useRedirectToPage'
import { newProfileInfoChecker, submitProfileInfoUpdate } from '../../../../utils/functions/submits/submitProfileInfoUpdate'
import { NotificationContextInterface } from '../../../../utils/types/interfaces'
import Sublink from '../../../elements/Navbar/Sublink/Sublink'
import UserInterfaceButton from '../../../elements/buttons/UserInterfaceButton/UserInterfaceButton'
import '../../../pages/Profile/ProfileInfoUpdateForm/ProfileInfoUpdateForm.scss'
import {useContext, useEffect, useState } from 'react'
import useRedirectToPage from '../../../../utils/hooks/useRedirectToPage'

const ProfileInfoUpdateForm = () => {

  const { dispatchNotification } = useContext(NotificationContext) as NotificationContextInterface

  const [idNumber, setIdNumber] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [personName, setPersonName] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string | number>();
  const [email, setEmail] = useState<string>();

  const [ newUsername, setNewusername ] = useState<string>('');
  const [ newPersonName, setNewPersonName ] = useState<string>('');
  const [ newPhoneNumber, setNewPhoneNumber ] = useState<number | string>(0);
  const [ newEmail, setNewEmail ] = useState<string>('');
  const [ newPassword, setNewPassword ] = useState<string>('');

  const [ changePasswordVisible, setChangePasswordVisible ] = useState<boolean>(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      const data = await fetchData('/users/profile');
      setIdNumber(data.idNumber);
      setUsername(data.username);
      setPersonName(data.personName);
      setPhoneNumber(data.phoneNumber);
      setEmail(data.email);
      console.log(idNumber)
    };
    fetchProfileData();
  }, []);

  return (
    <>
    <form className='form' id='profile-form' action="">

      <div className='form-input-container'>
        <label htmlFor="signup-form-username">username</label>
        <input id="profile-form-username" className="signup-input input-username form-input" type="text" placeholder={username} onChange={(e)=>{if(newProfileInfoChecker(e.target.value, e.target.id.split('-')[e.target.id.split('-').length-1])){setNewusername(e.target.value)}}}/>
      </div>

      <div className='form-input-container'>
        <label htmlFor="signup-form-name">name</label>
        <input id="profile-form-name" className="signup-input input-name form-input" type="text" placeholder={personName} onChange={(e)=>{if(newProfileInfoChecker(e.target.value, e.target.id.split('-')[e.target.id.split('-').length-1])){setNewPersonName(e.target.value)}}}/>
      </div>

      <div className='form-input-container'>
        <label htmlFor="signup-form-phone">phone number</label>
        <input id="profile-form-phone" className="signup-input input-phone form-input" type="number" placeholder={phoneNumber?.toString()} onChange={(e)=>{if(newProfileInfoChecker(e.target.value, e.target.id.split('-')[e.target.id.split('-').length-1])){setNewPhoneNumber(Number(e.target.value))}}}/>
      </div>

      <div className='form-input-container'>
        <label htmlFor="signup-form-email">email</label>
        <input id="profile-form-email" className="signup-input input-email form-input" type="email" placeholder={email} onChange={(e)=>{if(newProfileInfoChecker(e.target.value, e.target.id.split('-')[e.target.id.split('-').length-1])){
          setNewEmail(e.target.value)
        }}}/>
      </div>

      <div className='form-input-container'>
        <label htmlFor="signup-form-password">change password</label>
        <input id="profile-form-password" className="signup-input input-password form-input" type={changePasswordVisible ? 'text' : 'password'} placeholder="new password" onChange={(e)=>{if(newProfileInfoChecker(e.target.value, e.target.id.split('-')[e.target.id.split('-').length-1])){setNewPassword(e.target.value)}}}/>
        <Sublink fnc={():void=>{setChangePasswordVisible(!changePasswordVisible)}} text={changePasswordVisible ? 'Hide Password' : 'Show Password'} color="dark"/>
      </div>

      <UserInterfaceButton text='save' color='pink' kind='regular' 
      fnc={
        async (e: React.MouseEvent<HTMLButtonElement>)=>{
          e.preventDefault(); 
          const changeOk = await submitProfileInfoUpdate(newUsername, newPersonName, Number(newPhoneNumber), newEmail, newPassword);
          if (changeOk) {
            dispatchNotification({ type: 'SET_NOTIFICATION_TEXT', payload: 'changes saved' })
            dispatchNotification({ type: 'SET_NOTIFICATION_COLOR', payload: 'green' })
            dispatchNotification({ type: 'SET_NOTIFICATION_ON', payload: true })
            
            setTimeout(() => {
              dispatchNotification({ type: 'SET_NOTIFICATION_ON', payload: false })
              useRedirectToPage('profile')
            }, 3000);
          } else {
            dispatchNotification({ type: 'SET_NOTIFICATION_TEXT', payload: 'could not save the changes' })
            dispatchNotification({ type: 'SET_NOTIFICATION_COLOR', payload: 'pink' })
            dispatchNotification({ type: 'SET_NOTIFICATION_ON', payload: true })
            
            setTimeout(() => {
              dispatchNotification({ type: 'SET_NOTIFICATION_ON', payload: false })
            }, 3000);
          }
        }
      } 
      extraClass='profile-form-button'/>

    </form>
    </>
  )
}

export default ProfileInfoUpdateForm