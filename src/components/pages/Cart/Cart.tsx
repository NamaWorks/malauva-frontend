import { useContext, useEffect, useState } from 'react';
import { fetchData } from '../../../utils/functions/api_fn/fetchData';
import { proceedToPayment } from '../../../utils/functions/api_fn/proceedToPayment';
import { redirectToUrl } from '../../../utils/functions/navigation_fn/redirectToUrl';
import { createObjsToPrint, parseCartItems } from '../../../utils/functions/parsers/cartItemsFunctions';
import { getPriceToPrintInCart } from '../../../utils/functions/ui_fn/getPriceToPrintInCart';
import BodyCopy from '../../elements/texts/BodyCopy/BodyCopy';
import LinkText from '../../elements/texts/LinkText/LinkText';
import PriceText from '../../elements/texts/PriceText/PriceText';
import './Cart.scss';
import CartItem from './CartItem/CartItem';
import { NavigationContext, NotificationContext } from '../../../utils/contexts/contexts';
import { NavigationContextInterface, NotificationContextInterface } from '../../../utils/types/interfaces';

const Cart = () => {
  const [ cartItemsReady, setCartItemsReady ] = useState<any[]>();
  const [ totalPrice, setTotalPrice] = useState<number>(0);
  const [ shippingCost, setShippingCost ] = useState<number>(0);
  const [ updateData , setUpdateData ] = useState<boolean>(false);
  const [ userData , setUserData ] = useState<any>();
  const [ loading, setLoading ] = useState<boolean>(true)

  const { dispatchNotification } = useContext(NotificationContext) as NotificationContextInterface;
  const { dispatchNavigation } = useContext(NavigationContext) as NavigationContextInterface
  
  useEffect(()=>{
    sessionStorage.getItem('token') === null && redirectToUrl('/login')
    dispatchNavigation({ type: "SET_CURRENT_PAGE", payload: 'cart'})


    const prepareCartData = async () => {
      if(loading){
        dispatchNotification({ type: 'SET_NOTIFICATION_TEXT', payload: 'loading cart' })
        dispatchNotification({ type: 'SET_NOTIFICATION_COLOR', payload: 'green'})
        dispatchNotification({ type: 'SET_NOTIFICATION_ON', payload: true})
      }; 
        try {
          const data = await fetchData('/users/cart');
          setUserData(data)
          const parsedItems = parseCartItems(data.cartItems);
          const objsToPrint = await createObjsToPrint(parsedItems);
          setCartItemsReady(objsToPrint);
          let  totalPrice = 0
          cartItemsReady?.forEach((item)=>{
            totalPrice += item.price * item.numberOfItems
          })
  
          const radioInput = document.querySelector('#home-delivery') as HTMLInputElement;
          if(radioInput){
            if(radioInput.checked){
              setShippingCost(4.99)
            } else {
              setShippingCost(0)
            }
          }
  
          // This is a provisional function for getting the price to print correctly:
          setTotalPrice(getPriceToPrintInCart())

          setLoading(false)
          dispatchNotification({ type: 'SET_NOTIFICATION_ON', payload: false})
  
        } catch (err) {
          console.log(err);

        }
      }
    
    prepareCartData();
  },[updateData])
  

  return (
    <main id='cart-page'
      onLoad={()=>{window.scrollTo(0,0)}}
    >

      <section className={`cart-page-products`}>
        {
          cartItemsReady?.map((item)=>{
            return (
              <CartItem item={item} updateData={updateData} setUpdateData={setUpdateData}/>
          )
          })
        }
      </section>

        <section className={`cart-page-payment`}>

        <div className='cart-page-payment-fieldsets'>
          < LinkText link={`/products`} text='Continue Shopping'/>
          
          <fieldset className='cart-page-payment-method'>
            <BodyCopy text='Payment Method:' kind='bold'/>
            <div className='radio-input'>
              <input onClick={()=>{setUpdateData(!updateData)}} type="radio" id='credit-card' name='payment-method' value={`credit-card`}/>
              <label htmlFor="credit-card"><BodyCopy text='Credit Card'/></label>
            </div>
            <div className='radio-input'>
              <input onClick={()=>{setUpdateData(!updateData)}} type="radio" id='paypal' name='payment-method' value={`paypal`}/>
              <label htmlFor="paypal"><BodyCopy text='Paypal'/></label>
            </div>
          </fieldset>

          <fieldset className='cart-page-shipping'>
            <BodyCopy text='Choose Shipping Method:' kind='bold'/>
            <div className='radio-input'>
              <input onClick={()=>{setUpdateData(!updateData)}} type="radio" id='store-pickup' name='shipping-method' value={`store-pickup`}/>
              <label htmlFor="store-pickup"><BodyCopy text='Store pickup (In 20 min) ----- FREE'/></label>
            </div>

            <div className='radio-input'>
              <input onClick={()=>{setUpdateData(!updateData)}} type="radio" id='home-delivery' name='shipping-method' value={`home-delivery`}/>
              <label htmlFor="home-delivery"><BodyCopy text='Home Delivery (In 2-4 working days) ----- $4.99'/></label>
            </div>

          </fieldset>
        </div>
          
          <div className='cart-page-payment-order-summary'>
            <BodyCopy text='Order Summary:' kind='bold'/>

            <div className='order-summary-div'>
              <BodyCopy text='Total Products:'/>
              <PriceText light={true} value={totalPrice} />
            </div>

            <div className='order-summary-div'>
              <BodyCopy text='Shipping Costs:'/>
              <PriceText light={true} value={Number(shippingCost)} />
            </div>

            <div className='order-summary-div'>
              <BodyCopy text='TOTAL:' kind='highlight-bold'/>
              <PriceText value={Number(totalPrice + shippingCost)}/>
            </div>
          </div>

          <LinkText text='Proceed to payment' fnc={async ():Promise<void> =>{ await proceedToPayment(userData); setUpdateData(!updateData)}}/>
        </section>

    </main>
  )
}

export default Cart