import './NavigationButton.scss'
import React from 'react'

const NavigationButton = ({ kind, id, text, fnc, link, color }: { kind: string, id?: string, text: string, fnc?: void | undefined , link?: string, color?: string }) => {
  switch(kind){
    case 'fnc': 
      return (
        <>
          <button className={`btn-secondary btn-navigation ${color}`} id={ id ? id : ''} onClick={fnc}>{text}</button>
        </>
      )
    break; 

    case 'link': 
      return (
        <>
          <a href={link} className={`btn-secondary btn-navigation ${color}`} id={ id ? id : ''}>{text}</a>
        </>
      )
    break; 

  }
}

export default NavigationButton