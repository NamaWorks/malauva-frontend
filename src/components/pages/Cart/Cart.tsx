import './Cart.scss'
import { fetchData } from '../../../utils/functions/api_fn/fetchData';
import { createObjsToPrint, parseCartItems } from '../../../utils/functions/parsers/cartItemsFunctions';
import '/src/components/pages/cart/Cart.scss'
import { useEffect, useState } from 'react';
import CartItem from './CartItem/CartItem';
import { redirectToUrl } from '../../../utils/functions/navigation_fn/redirectToUrl';
import LinkText from '../../elements/texts/LinkText/LinkText';
import BodyCopy from '../../elements/texts/BodyCopy/BodyCopy';
import PriceText from '../../elements/texts/PriceText/PriceText';

const Cart = () => {
  const [ cartItemsReady, setCartItemsReady ] = useState<any[]>();
  const [ totalPrice, setTotalPrice] = useState<number>();
  const [ shippingCost, setShippingCost ] = useState<number>()
  
  useEffect(()=>{
    sessionStorage.getItem('token') === null && redirectToUrl('/login')

    const prepareCartData = async () => {
      try {
        const data = await fetchData('/users/cart');
        const parsedItems = parseCartItems(data.cartItems);
        const objsToPrint = await createObjsToPrint(parsedItems);
        setCartItemsReady(objsToPrint);
        let  totalPrice = 0
        cartItemsReady?.forEach((item)=>{
          totalPrice += item.price * item.numberOfItems
        })
        setTotalPrice(totalPrice)
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

        <section className={`cart-page-payment`}>
          < LinkText link={`/products`} text='Continue Shopping'/>


          <fieldset className='cart-page-payment-method'>
            <BodyCopy text='Payment Method:' kind='bold'/>
            <div className='radio-input'>
              <input type="radio" id='credit-card' name='payment-method' value={`credit-card`}/>
              <label htmlFor="credit-card"><BodyCopy text='Credit Card'/></label>
            </div>
            <div className='radio-input'>
              <input type="radio" id='paypal' name='payment-method' value={`paypal`}/>
              <label htmlFor="paypal"><BodyCopy text='Paypal'/></label>
            </div>
          </fieldset>

          <fieldset className='cart-page-shipping'>
            <BodyCopy text='Choose Shipping Method:' kind='bold'/>
            <div className='radio-input'>
              <input type="radio" id='store-pickup' name='shipping-method' value={`store-pickup`}/>
              <label htmlFor="credit-card"><BodyCopy text='Store pickup (In 20 min) ----- FREE'/></label>
            </div>

            <div className='radio-input'>
              <input type="radio" id='home-delivery' name='shipping-method' value={`home-delivery`}/>
              <label htmlFor="credit-card"><BodyCopy text='Home Delivery (In 2-4 working days) ----- $4.99'/></label>
            </div>

          </fieldset>
          
          <div className='cart-page-payment-order-summary'>
            <BodyCopy text='Order Summary:' kind='bold'/>

            <div className='order-summary-div'>
              <BodyCopy text='Total Products:'/>
              <PriceText light={true} value={0} />
            </div>

            <div className='order-summary-div'>
              <BodyCopy text='Shipping Costs:'/>
              <PriceText light={true} value={totalPrice} />
            </div>

            <div className='order-summary-div'>
              <BodyCopy text='TOTAL:' kind='highlight-bold'/>
              <PriceText value={0}/>   
            </div>
          </div>
        </section>

    </main>
  )
}

export default Cart