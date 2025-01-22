import './CartItem.scss'
import React, { useEffect, useState } from 'react'
import { cartReadyItem } from '../../../../utils/types/types'
import BodyCopy from '../../../elements/texts/BodyCopy/BodyCopy'
import { changeNumberOfItemsInUserCart } from '../../../../utils/functions/api_fn/changeNumberOfItemsInUserCart'
import PriceText from '../../../elements/texts/PriceText/PriceText'
import Sublink from '../../../elements/Navbar/Sublink/Sublink'
import { removeItemAllFromCart } from '../../../../utils/functions/api_fn/removeItemAllFromCart'

const CartItem = ({item}: {item: cartReadyItem}) => {

  const [ itemsNumber, setItemsNumber ] = useState(item.numberOfItems)

  useEffect(()=>{
    changeNumberOfItemsInUserCart(item.idNumber, itemsNumber)
  },[itemsNumber])

  return (
    <>

    <div className='cart-item' id={`cart-item-${item.idNumber}`}>

  <div className='cart-item-horizontal-container'>
      <div className="cart-item-img">
        <img src={item.picture} alt={`${item.idNumber}-image`} />
      </div>

      <div className='cart-item-data'>
        <h5 className="cart-item-name">{item.name}</h5>
        <BodyCopy text={`Item ID: ${item.idNumber}`} />
      </div>
  </div>

  <div className="cart-item-horizontal-container">
    <div className='add-more-btn'>
        <button onClick={()=>{setItemsNumber(itemsNumber-1)}}>-</button>
          <p>{itemsNumber}</p>
        <button onClick={()=>setItemsNumber(itemsNumber+1)}>+</button>
    </div>
  </div>

  <div className="cart-item-horizontal-container">
    <Sublink text='Remove all' color='dark' fnc={()=>{setItemsNumber(0)} }/>
    <PriceText value={item.price * itemsNumber} background={true}/>
  </div>

    </div>
    </>
  )
}

export default CartItem