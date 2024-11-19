import './BodyCopy.scss'
import React from 'react'

const BodyCopy = ({ kind='regular', text, color='dark' }: { kind?:string, text: string, color?: string }) => {
  return (
    <>
      <p className={`body-copy body-copy-${kind} body-copy-${color}`}>{text}</p>
    </>
  )
}

export default BodyCopy