import "./ProductEntry.scss";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WinesContext } from "../../../utils/contexts/contexts";
import { Wine } from "../../../utils/types/types";
import { fetchData } from "../../../utils/functions/fetchData";
import BodyTitles from "../../elements/texts/BodyTitles/BodyTitles";
import BodyCopy from "../../elements/texts/BodyCopy/BodyCopy";
import PriceText from "../../elements/texts/PriceText/PriceText";
import NavigationButton from "../../elements/buttons/NavigationButton/NavigationButton";
import UserInterfaceButton from "../../elements/buttons/UserInterfaceButton/UserInterfaceButton";
import AddMoreButton from "../../elements/buttons/AddMoreButton/AddMoreButton";
import Notification from "../../elements/Notification/Notification";

const ProductEntry = () => {
  const { fetchWines } = useContext<Wine[] | undefined>(WinesContext);
  let idNumber = useParams().idNumber?.toUpperCase();
  const [wineToPrint, setWineToPrint] = useState<Wine>();
  // let wineToPrint:Wine|void =

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
      <Notification text={'test notification'} color={'pink'}/>
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
                    <h6 className="arrow-title">Scores:</h6>
                    <BodyCopy text={wineToPrint?.scores?.length} />
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
                    <BodyCopy text={wineToPrint?.idealTemperature + ' deg'} />
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
          <AddMoreButton />
          <UserInterfaceButton kind="bold" color="green" text="Add to cart" />
        </div>
      </main>
    </div>
  );
};

export default ProductEntry;
