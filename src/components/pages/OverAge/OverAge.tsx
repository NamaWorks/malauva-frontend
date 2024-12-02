import './OverAge.scss'
import React from 'react'

const OverAge = () => {
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
            <button className="overage-button" onClick={()=>{console.log('button clicked')}}>Y</button>
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