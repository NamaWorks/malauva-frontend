import './Sublink.scss'
import React from 'react'


const Sublink = ({ text='text pending', link, fnc,  color='beige' }: {text: string, link: string, fnc: undefined, color: string}) => {

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