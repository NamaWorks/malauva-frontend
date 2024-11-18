
import React from 'react'

const CursorText = ({text}: {text: string}) => {
  return (
    <div className='cursor-text'>
      <p className='cursor-text-p'>{text}</p>
    </div>
  )
}

export default CursorText