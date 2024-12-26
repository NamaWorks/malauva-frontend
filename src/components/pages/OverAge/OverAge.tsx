import { NavigationContext } from '../../../utils/contexts/contexts'
import { redirectToUrl } from '../../../utils/functions/redirectToUrl'
import './OverAge.scss'
import React, { useContext, useEffect } from 'react'

const OverAge = () => {

  const { overAge, setOverAge } = useContext(NavigationContext)

  console.log(overAge)

  window.addEventListener('load', ()=>{if(overAge === 'true'){window.location.href='home'}})

  useEffect(()=>{
    overAge && redirectToUrl('home')
  },[overAge])

  return (
    <>
    <main id='overage-page'>

      <div className='overage-container'>
        <div className='overage-content-div'>
          <img src="/public/assets/img/illustrations/glasses.svg" alt="illustrations of stored glasses" />
        </div>
        <div className='overage-content-div'>
          <p>+21?</p>
          <div className='overage-buttons-container'>
            <button className="overage-button" onClick={()=>{setOverAge(true); sessionStorage.setItem('overAge', true)}}>Y</button>
            <p>/</p>
            <button className="overage-button" onClick={()=>{console.log('button clicked')}}>N</button>
          </div>
        </div>
      </div>

    </main>
    
    </>
  )
}

export default OverAge