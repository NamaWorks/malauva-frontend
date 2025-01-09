import './Sublink.scss'
import React from 'react'


const Sublink = ({ text, link, fnc,  color='beige' }: {text: string, link: string, fnc: undefined, color: string}) => {
  return (
    <a href={link} onClick={fnc} className={`sublink ${color}`}>{text}</a>
  )
}

export default Sublink