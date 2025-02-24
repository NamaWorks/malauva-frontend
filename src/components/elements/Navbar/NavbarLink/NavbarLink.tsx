import { Link } from 'react-router-dom'
import './NavbarLink.scss'

const NavbarLink = ({text, link, setToggleNav}: { text: string, link: string, setToggleNav?: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className="navbar-link-container" onClick={()=>{setToggleNav && setToggleNav(false)}}>
      <Link to={link} className="navbar-link">{text}</Link>
    </div>
  )
}

export default NavbarLink