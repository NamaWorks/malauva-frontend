import './NavPageText.scss'
import React from 'react'

const NavPageText = ({ text }: { text: string }) => {
  return (
    <>
      <p className='page-text'>{text}</p>
    </>
  )
}

export default NavPageText