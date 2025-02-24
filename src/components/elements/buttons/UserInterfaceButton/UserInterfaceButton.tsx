import { Link } from 'react-router-dom'
import { Icon } from '../../../../utils/types/types'
import './UserInterfaceButton.scss'

const UserInterfaceButton = ({ kind='regular', icons, text='text pending', fnc, color='dark', extraClass="", link }: { kind?:string, icons?: Array<Icon>, text?: string, fnc?: (e:any) => any , color?: string, extraClass?:string, link?:string }) => {

return (
  <>
  <Link to={link || ""}>
    <button
      className={`ui-button btn-${color} btn-${kind} ${extraClass}`}
      onClick={fnc}
      >
      {icons &&
        icons.map((icon): any => {
          return (
            <div className="ui-button-icon" key={icon.name}>
              <img src={icon.url} alt={`${icon.name || text} icon`} />
            </div>
          );
        })}
      <p>{text}</p>
    </button>
  </Link>
</>
)

}

export default UserInterfaceButton
