import './Sublink.scss'
import React from 'react'


const Sublink = ({ text, link, color='beige' }: {text: string, link: string, color: string}) => {
  return (
    <a href={link} className={`sublink ${color}`}>{text}</a>
  )
}

export default Sublink