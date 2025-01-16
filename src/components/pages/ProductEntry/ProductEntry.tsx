import "./ProductEntry.scss";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavigationContext, WinesContext } from "../../../utils/contexts/contexts";
import { Wine } from "/src/utils/types/types";
import { fetchData } from "/src/utils/functions/api_fn/fetchData";
import BodyTitles from "/src/components/elements/texts/BodyTitles/BodyTitles";
import BodyCopy from "/src/components/elements/texts/BodyCopy/BodyCopy";
import PriceText from "/src/components/elements/texts/PriceText/PriceText";
import NavigationButton from "/src/components/elements/buttons/NavigationButton/NavigationButton";
import UserInterfaceButton from "/src/components/elements/buttons/UserInterfaceButton/UserInterfaceButton";
import AddMoreButton from "/src/components/elements/buttons/AddMoreButton/AddMoreButton";
import Notification from "/src/components/elements/Notification/Notification";
import { overAgeChecker } from "/src/utils/functions/ui_fn/overAgeChecker";
import { addProductToUserCart } from "../../../utils/functions/api_fn/addProductToUserCart";

const ProductEntry = () => {
  const { fetchWines } = useContext<Wine[] | undefined>(WinesContext);
  let idNumber = useParams().idNumber?.toUpperCase();
  const [wineToPrint, setWineToPrint] = useState<Wine>();
  const { overAge } = useContext<boolean>(NavigationContext)
    const [itemsNumber, setItemsNumber] = useState<number>(1)

  useEffect(()=>{
    overAgeChecker(overAge)
  },[itemsNumber])

  useEffect(() => {
    if (fetchWines.lenght > 0) {
      const wine = fetchWines.filter((wineObj: Wine): Wine => {
        wineObj[idNumber] === idNumber;
      });
      setWineToPrint(wine);
    } else if (fetchWines.length <= 0) {
      fetchData("/wines/idNumber/" + idNumber)
        .then((res) => setWineToPrint(res))
        .catch((err) => console.warn(err));
    }
  }, []);

  return (
    <div>
      <Notification text={'test notification'} color={'beige'}/>
      <main id="product-entry">
        <div className="product-entry-container" id="product-info-container">
          <div className="image-container">
            <img src={wineToPrint?.picture} alt={wineToPrint?.name} />

            <div className="arrows-container">
              <div className="arrows-left">
                <div className="arrow-data arrow-left">
                  <img
                    className="arrow" src="/public/assets/img/arrows/arrow_left_02.svg" alt="arrow illustration"
                  />
                  <div className="arrow-data-text">
                    {/* <h6 className="arrow-title">Scores:</h6> */}
                    <h6 className="arrow-title">Name:</h6>
                    {/* <BodyCopy text={wineToPrint?.scores?.length} /> */}
                    <BodyCopy text={wineToPrint?.name} />
                  </div>
                </div>
                <div className="arrow-data arrow-left">
                  <img className="arrow" src="/public/assets/img/arrows/arrow_left_01.svg" alt="arrow illustration"
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
                    className="arrow" src="/public/assets/img/arrows/arrow_right_01.svg" alt="arrow illustration"
                  />
                  <div className="arrow-data-text">
                    <h6 className="arrow-title">Taste:</h6>
                    <BodyCopy text={wineToPrint?.taste} />
                  </div>
                </div>

                <div className="arrow-data arrow-right">
                  <img
                    className="arrow" src="/public/assets/img/arrows/arrow_right_02.svg" alt="arrow illustration"
                  />
                  <div className="arrow-data-text">
                    <h6 className="arrow-title">Temperature:</h6>
                    <BodyCopy text={wineToPrint?.idealTemperature + '°C deg'} />
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
          {/* <AddMoreButton /> */}
          {/* The next items are the content of the AddMoreButton component */}
        <div className='add-more-btn'>
            <button onClick={()=>{if (itemsNumber<=1){console.log('print alert')}else{setItemsNumber(itemsNumber-1)}}}>-</button>
              <p>{itemsNumber}</p>
            <button onClick={()=>setItemsNumber(itemsNumber+1)}>+</button>
        </div>
          <UserInterfaceButton kind="bold" color="green" text="Add to cart" fnc={async():Promise<void>=>{await addProductToUserCart(window.location.href.split('/').slice(-1)[0], itemsNumber)}}/>
        </div>
      </main>
    </div>
  );
};

export default ProductEntry;
