import { SublinkProps } from '../../../../utils/types/interfaces'
import './Sublink.scss'


const Sublink = ({ text='text pending', link, fnc,  color='beige' }: SublinkProps) => {

  if(link) {
    return (
      (<a href={link} className={`sublink sublink-${color}`}>{text}</a>)
    )
  }

  if(fnc) {
    return (
      (<a onClick={fnc} className={`sublink sublink-${color}`}>{text}</a>)
    )
  }
}

export default Sublink