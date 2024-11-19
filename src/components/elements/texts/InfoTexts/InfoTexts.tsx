import './InfoTexts.scss'
import React from 'react'

const InfoTexts = ({ kind='regular', text='text pending' }: { kind:string, text: string }) => {
  return (
    <>

      <p className={`info-text info-text-${kind}`}></p>
    
    </>
  )
}

export default InfoTexts