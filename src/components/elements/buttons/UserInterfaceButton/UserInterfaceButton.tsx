import { Icon } from '../../../../utils/types/types'
import './UserInterfaceButton.scss'

const UserInterfaceButton = ({ kind='regular', icons, text='text pending', fnc, color='dark', extraClass="" }: { kind?:string, icons?: Array<Icon>, text?: string, fnc?: () => void , color?: string, extraClass?:string }) => {
  return (
    <>
      <button 
        className={`ui-button btn-${color} btn-${kind} ${extraClass}`}
        onClick={fnc}
        >
        {icons && icons.map((icon):any =>{
          return (
          <div className='ui-button-icon' key={icon.name}>
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
