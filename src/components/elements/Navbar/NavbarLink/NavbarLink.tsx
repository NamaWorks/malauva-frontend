import './NavbarLink.scss'

const NavbarLink = ({text, link}: { text: string, link: string }) => {
  return (
    <div className="navbar-link-container">
      <a href={link} className="navbar-link">{text}</a>
    </div>
  )
}

export default NavbarLink