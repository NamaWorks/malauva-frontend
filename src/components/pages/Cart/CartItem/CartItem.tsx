import './CartItem.scss'
import React, { useEffect, useState } from 'react'
import { cartReadyItem } from '../../../../utils/types/types'
import BodyCopy from '../../../elements/texts/BodyCopy/BodyCopy'
import { changeNumberOfItemsInUserCart } from '../../../../utils/functions/api_fn/changeNumberOfItemsInUserCart'
import PriceText from '../../../elements/texts/PriceText/PriceText'
import Sublink from '../../../elements/Navbar/Sublink/Sublink'

const CartItem = ({item, updateData, setUpdateData}: {item: cartReadyItem, updateData:any, setUpdateData:React.Dispatch<React.SetStateAction<boolean>>}) => {

  const [ itemsNumber, setItemsNumber ] = useState<number>(item.numberOfItems)

  useEffect(()=>{
    changeNumberOfItemsInUserCart(item.idNumber, itemsNumber)
  },[itemsNumber])

  if(itemsNumber>0){
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
          <button onClick={()=>{itemsNumber==0 ? setItemsNumber(0) : setItemsNumber(Number(itemsNumber)-1); setUpdateData(!updateData)}}>-</button>
            <p>{itemsNumber}</p>
          <button onClick={()=>{setItemsNumber(Number(itemsNumber)+1); setUpdateData(!updateData)}}>+</button>
      </div>
    </div>
  
    <div className="cart-item-horizontal-container">
      <Sublink text='Remove all' color='dark' fnc={()=>{setItemsNumber(0); setUpdateData(!updateData)}}/>
      <PriceText value={item.price * itemsNumber} background={true} extraClass='cart-price'/>
    </div>
  
      </div>
      </>
    )
  }
}

export default CartItem