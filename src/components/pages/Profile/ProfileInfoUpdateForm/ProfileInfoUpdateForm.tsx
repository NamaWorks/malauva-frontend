import UserInterfaceButton from '/src/components/elements/buttons/UserInterfaceButton/UserInterfaceButton'
import '/src/components/pages/Profile/ProfileInfoUpdateForm/ProfileInfoUpdateForm.scss'
import React from 'react'

const ProfileInfoUpdateForm = () => {
  return (
    <>
    <form className='form' id='profile-form' action="">

      <div className='form-input-container'>
        <label htmlFor="signup-form-username">username</label>
        <input id="profile-form-username" className="signup-input input-username form-input" type="text" placeholder={'username pending'}/>
      </div>

      <div className='form-input-container'>
        <label htmlFor="signup-form-name">name</label>
        <input id="profile-form-name" className="signup-input input-name form-input" type="text" placeholder={'name pending'}/>
      </div>

      <div className='form-input-container'>
        <label htmlFor="signup-form-surname">surname</label>
        <input id="profile-form-surname" className="signup-input input-surname form-input" type="text" placeholder={'surname pending'}/>
      </div>

      <div className='form-input-container'>
        <label htmlFor="signup-form-phone">phone number</label>
        <input id="profile-form-phone" className="signup-input input-phone form-input" type="number" placeholder={'phone number pending'}/>
      </div>

    {/* tenemos que hacer un loop por las locations del usuario y añadir un espacio para crear una nueva locaion */}
      <div className='form-input-container'>
        <label htmlFor="signup-form-location-a">location</label>
        <input id="profile-form-location-a" className="signup-input input-phone form-input" type="text" placeholder={'location pending'}/>
      </div>

      <div className='form-input-container'>
        <label htmlFor="signup-form-email">email</label>
        <input id="profile-form-email" className="signup-input input-email form-input" type="email" placeholder={'email pending'}/>
      </div>

      <div className='form-input-container'>
        <label htmlFor="signup-form-password">change password</label>
        <input id="profile-form-password" className="signup-input input-password form-input" type="password" placeholder="new password"/>
      </div>

      {/* tenemos que haceer un loop por los métodos de pago del usuario y añadir uno para crear un nuevo método */}
      <div className='form-input-container'>
        <label htmlFor="signup-form-payment">Payment methods</label>
        <input id="profile-form-payment" className="signup-input input-email form-input" type="number" placeholder={'payment method pending'}/>
      </div>

      <UserInterfaceButton text='save' color='pink' kind='regular' fnc={()=>{console.log('button clicked')}} extraClass='profile-form-button'/>

    </form>
    </>
  )
}

export default ProfileInfoUpdateForm