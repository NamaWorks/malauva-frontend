import { Icon } from '../../../../utils/types/types'
import './UserInterfaceButton.scss'
import React, { ReactNode } from 'react'

const UserInterfaceButton = ({ kind='regular', icons, text='text pending', fnc, color='dark' }: { kind?:string, icons?: Array<Icon | undefined>, text?: string, fnc?: undefined | void, color?: string }) => {
  return (
    <>
      <button 
        className={`ui-button btn-${color} btn-${kind}`}
        onClick={fnc}
        >
        {icons && icons.map((icon): undefined | void =>{
          return (
          <div className='ui-button-icon'>
              <img src={icon.url} alt={`${icon.name || text} icon`} />
          </div>
          )
        })}
         <p>{text}</p>
      </button>
    </>
 )
}

export default UserInterfaceButton
