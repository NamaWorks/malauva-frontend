import './PriceText.scss'
import React from 'react'

const PriceText = ({ value, currency='$', background=false, light=false }: { value: number | string, currency?: string, background?: boolean, light?:boolean}) => {
  
  if(!light){
    return (
    <>
      <div className={`price-text ${background === true && 'price-text-background'}`}>
        <p className="price-amount">{currency}{Number(value).toFixed(2)}</p>
      </div>
    </>
  )
} else {
  return (
    <>
      <div className={`price-text-light`}>
        <p className="price-amount">{currency}{Number(value).toFixed(2)}</p>
      </div>
    </>
  )
}
}

export default PriceText