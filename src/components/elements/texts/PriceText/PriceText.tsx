import './PriceText.scss'
import React from 'react'

const PriceText = ({ value, currency='$', background=false }: { value: number | string, currency: string, background: boolean}) => {
  return (
    <>
      <div className={`price-text ${background && 'price-text-background'}`}>
        <p className="price-amount">{currency}{Number(value).toFixed(2)}</p>
      </div>
    </>
  )
}

export default PriceText