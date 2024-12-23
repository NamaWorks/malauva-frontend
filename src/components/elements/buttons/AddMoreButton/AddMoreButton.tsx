import './AddMoreButton.scss'
import React, { useState } from 'react'

const AddMoreButton = () => {
  const [itemsNumber, setItemsNumber] = useState<number>(1)

  return (
    <>
      <div className='add-more-btn'>
        <button onClick={()=>{if (itemsNumber<=1){console.log('print alert')}else{setItemsNumber(itemsNumber-1)}}}>-</button>
        <p>{itemsNumber}</p>
        <button onClick={()=>setItemsNumber(itemsNumber+1)}>+</button>
      </div>
    </>
  )
}

export default AddMoreButton