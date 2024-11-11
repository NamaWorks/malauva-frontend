import './Sublink.scss'
import React from 'react'


const Sublink = ({ text, link }: {text: string, link: string}) => {
  return (
    <a href={link} className="sublink">{text}</a>
  )
}

export default Sublink