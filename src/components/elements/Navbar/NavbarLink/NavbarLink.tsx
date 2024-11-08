import React from 'react'
import './NavbarLink.scss'

const NavbarLink = ({text, link}: { text: string, link: string }) => {
  return (
    <div className="navbar-link-container">
      <a href={link} className="h4-primary navbar-link">{text}</a>
    </div>
  )
}

export default NavbarLink