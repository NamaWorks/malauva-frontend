import './Cart.scss'
import { fetchData } from '../../../utils/functions/api_fn/fetchData';
import { createObjsToPrint, parseCartItems } from '../../../utils/functions/parsers/cartItemsFunctions';
import '/src/components/pages/cart/Cart.scss'
import { useEffect, useState } from 'react';
import CartItem from './CartItem/CartItem';
import { redirectToUrl } from '../../../utils/functions/navigation_fn/redirectToUrl';

const Cart = () => {
  const [ cartItemsReady, setCartItemsReady ] = useState<any[]>()
  
  useEffect(()=>{
    sessionStorage.getItem('token') === null && redirectToUrl('/login')

    const prepareCartData = async () => {
      try {
        const data = await fetchData('/users/cart');
        const parsedItems = parseCartItems(data.cartItems);
        const objsToPrint = await createObjsToPrint(parsedItems);
        setCartItemsReady(objsToPrint);
      } catch (err) {
        console.log(err);
      }
    };

    prepareCartData();
  },[])

  return (
    <main id='cart-page'>

      <section className={`cart-page-products`}>
        {
          cartItemsReady?.map((item):any=>{
            return (
            <>
              <CartItem item={item} />
            </>
          )
          })
        }
      </section>
      <section className={`cart-page-payment`}></section>

    </main>
  )
}

export default Cart