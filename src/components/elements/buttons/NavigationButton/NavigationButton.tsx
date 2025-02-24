import { Link } from 'react-router-dom'
import { NavigationButtonProps } from '../../../../utils/types/interfaces'
import './NavigationButton.scss'
import React from 'react'

const NavigationButton: React.FC<NavigationButtonProps> = ({ kind, id, text, fnc, link, color }) => {
  switch(kind){
    case 'fnc': 
      return (
        <button className={`btn-secondary btn-navigation btn-navigation-${color || 'dark'}`} id={ id ? id : ''} onClick={fnc}> 
          {text || 'text pending'} 
        </button>
      )
    case 'link':
      if(link){
        return (
          <Link to={link}  className={`btn-secondary btn-navigation-${color || 'dark'}`} id={ id ? id : ''}>
            {text}
          </Link>
        )
      } else return null
    default:
      return null;
  }
}

export default NavigationButton