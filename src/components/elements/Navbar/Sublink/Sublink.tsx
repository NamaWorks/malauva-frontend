import { Link } from 'react-router-dom'
import { SublinkProps } from '../../../../utils/types/interfaces'
import './Sublink.scss'


const Sublink = ({ text='text pending', link, fnc,  color='beige' }: SublinkProps) => {

  if(link) {
    return (
      (<Link to={link} className={`sublink sublink-${color}`} onClick={fnc}>{text}</Link>)
    )
  }

  if(fnc) {
    return (
      (<a onClick={fnc} className={`sublink sublink-${color}`}>{text}</a>)
    )
  }
}

export default Sublink