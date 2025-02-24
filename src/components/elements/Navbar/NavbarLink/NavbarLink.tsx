import { Link } from 'react-router-dom'
import './NavbarLink.scss'

const NavbarLink = ({text, link}: { text: string, link: string }) => {
  return (
    <div className="navbar-link-container">
      <Link to={link} className="navbar-link">{text}</Link>
    </div>
  )
}

export default NavbarLink