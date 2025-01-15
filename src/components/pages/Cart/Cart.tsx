import { fetchData } from '../../../utils/functions/api_fn/fetchData';
import { cartItem } from '../../../utils/types/types';
import '/src/components/pages/cart/Cart.scss'
import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState<cartItem[] | null | undefined >(null)
  
  useEffect(()=>{
    const fetchCartData = async () => {
     const data = await fetchData('/users/cart')
     console.log(data)
    }
    fetchCartData()
    console.log(cartItems)
  },[])

  return (
    <main id='cart-page'>
      <div className="cart-section">test text</div>
      <div className="cart-section">test text</div>      
    </main>
  )
}

export default Cart