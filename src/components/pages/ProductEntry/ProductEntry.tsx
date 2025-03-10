import "./ProductEntry.scss";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavigationContext, NotificationContext, WinesContext } from "../../../utils/contexts/contexts";
import { Wine } from "../../../utils/types/types";
import { fetchData } from "../../../utils/functions/api_fn/fetchData";
import BodyTitles from "../../../components/elements/texts/BodyTitles/BodyTitles";
import BodyCopy from "../../../components/elements/texts/BodyCopy/BodyCopy";
import PriceText from "../../../components/elements/texts/PriceText/PriceText";
import UserInterfaceButton from "../../../components/elements/buttons/UserInterfaceButton/UserInterfaceButton";
import Notification from "../../../components/elements/Notification/Notification";
import { overAgeChecker } from "../../../utils/functions/ui_fn/overAgeChecker";
import { addProductToUserCart } from "../../../utils/functions/api_fn/addProductToUserCart";
import { WinesContextInterface, NavigationContextInterface, NotificationContextInterface } from "../../../utils/types/interfaces";
import { redirectToUrl } from "../../../utils/functions/navigation_fn/redirectToUrl";

const ProductEntry = () => {
  const { fetchWines } = useContext(WinesContext) as WinesContextInterface;
  const { idNumber } = useParams<{ idNumber: string }>();
  const [wineToPrint, setWineToPrint] = useState<Wine | null>(null);
  const { navigationState, dispatchNavigation } = useContext(NavigationContext) as NavigationContextInterface;
  const [itemsNumber, setItemsNumber] = useState<number>(1);
  const { dispatchNotification } = useContext(NotificationContext) as NotificationContextInterface;

  useEffect(() => {
    overAgeChecker(navigationState.overAge);
  }, [navigationState.overAge]);

  useEffect(() => {
    if (fetchWines.length > 0) {
      const wine = fetchWines.find((wineObj: Wine) => wineObj.idNumber === idNumber);
      setWineToPrint(wine || null);
    } else {
      fetchData(`/wines/idNumber/${idNumber}`)
        .then((res) => setWineToPrint(res))
        .catch((err) => console.warn(err));
    }
  }, [fetchWines, idNumber]);

  return (
    <div>
      <Notification text={'test notification'} color={'beige'}/>
      <main id="product-entry" onLoad={()=>{sessionStorage.getItem('token') && dispatchNavigation({type: "SET_LOGGED_IN", payload: true}) && window.scrollTo(0,0)}}>
        <div className="product-entry-container" id="product-info-container">
          <div className="image-container">
            <img src={wineToPrint?.picture} alt={wineToPrint?.name} />

            <div className="arrows-container">
              <div className="arrows-left">
                <div className="arrow-data arrow-left">
                  <img
                    className="arrow" src="/assets/img/arrows/arrow_left_02.svg" alt="arrow illustration"
                  />
                  <div className="arrow-data-text">
                    <h6 className="arrow-title">Name:</h6>
                    <BodyCopy text={wineToPrint?.name} />
                  </div>
                </div>
                <div className="arrow-data arrow-left">
                  <img className="arrow" src="/assets/img/arrows/arrow_left_01.svg" alt="arrow illustration"
                  />
                  <div className="arrow-data-text">
                    <h6 className="arrow-title">Origin:</h6>
                    <BodyCopy text={wineToPrint?.origin} />
                  </div>
                </div>
              </div>

              <div className="arrows-right">
                <div className="arrow-data arrow-right">
                  <img
                    className="arrow" src="/assets/img/arrows/arrow_right_01.svg" alt="arrow illustration"
                  />
                  <div className="arrow-data-text">
                    <h6 className="arrow-title">Taste:</h6>
                    <BodyCopy text={wineToPrint?.taste} />
                  </div>
                </div>

                <div className="arrow-data arrow-right">
                  <img
                    className="arrow" src="/assets/img/arrows/arrow_right_02.svg" alt="arrow illustration"
                  />
                  <div className="arrow-data-text">
                    <h6 className="arrow-title">Temperature:</h6>
                    <BodyCopy text={wineToPrint?.idealTemperature + '°C'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-entry-container" id="buying-details-container">
          <BodyTitles text={wineToPrint?.name} hierarchy={4} color="dark" />
          <h5 className="product-entry-origin">{wineToPrint?.origin}</h5>
          <BodyCopy text={wineToPrint?.description} />
          <PriceText value={wineToPrint?.price} background />
          <div className='add-more-btn'>
            <button onClick={()=>{if (itemsNumber<=1){console.log('print alert')}else{setItemsNumber(itemsNumber-1)}}}>-</button>
              <p>{itemsNumber}</p>
            <button onClick={()=>setItemsNumber(itemsNumber+1)}>+</button>
          </div>
          <UserInterfaceButton kind="bold" color="green" text="Add to cart" 
            fnc={ 
              async():Promise<void>=>{
                if(navigationState.loggedIn){
                  dispatchNotification({type: "SET_NOTIFICATION_COLOR", payload: 'dark'})
                  dispatchNotification({type: 'SET_NOTIFICATION_TEXT', payload: 'adding products to cart'})
                  dispatchNotification({type: "SET_NOTIFICATION_ON", payload: true})
                  const res = await addProductToUserCart(window.location.href.split('/').slice(-1)[0], itemsNumber)
                  if(res === 200){
                    dispatchNotification({type: "SET_NOTIFICATION_ON", payload: false})
                    dispatchNotification({type: "SET_NOTIFICATION_COLOR", payload: 'green'})
                    dispatchNotification({type: 'SET_NOTIFICATION_TEXT', payload: 'product added to cart'})
                    dispatchNotification({type: "SET_NOTIFICATION_ON", payload: true})
                    setTimeout(() => {
                      dispatchNotification({type: "SET_NOTIFICATION_ON", payload: false})
                    }, 2000);
                  } else {
                    dispatchNotification({type: "SET_NOTIFICATION_ON", payload: false})
                    dispatchNotification({type: "SET_NOTIFICATION_COLOR", payload: 'pink'})
                    dispatchNotification({type: 'SET_NOTIFICATION_TEXT', payload: 'product could not be added to the cart'})
                    dispatchNotification({type: "SET_NOTIFICATION_ON", payload: true})
                    setTimeout(() => {
                      dispatchNotification({type: "SET_NOTIFICATION_ON", payload: false})
                    }, 2000);
                  }
                } else {
                  redirectToUrl('/login')
                }
              }
            }
            />
        </div>
      </main>
    </div>
  );
};

export default ProductEntry;
