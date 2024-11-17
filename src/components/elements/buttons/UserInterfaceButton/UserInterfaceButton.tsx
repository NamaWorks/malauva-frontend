import { Icon } from '../../../../utils/types/types'
import './UserInterfaceButton.scss'
import React from 'react'

const UserInterfaceButton = ({ kind='regular', icons, text='text pending', fn, color='dark' }: { kind:string, icons: Array<Icon | undefined>, text: string, fn: undefined | void, color: string }) => {
  return (
    <>
      <button 
        className={`ui-button btn-${color} btn-${kind}`}
        onClick={()=>{fn}}
        >
        {icons && icons.map((icon): undefined | void =>{
          return (
          <div className='ui-button-icon'>
              <img src={icon.url} alt={`${icon.name} icon`} />
          </div>
          )
        })}
         <p>{text}</p>
      </button>
    </>
 )
}

export default UserInterfaceButton
