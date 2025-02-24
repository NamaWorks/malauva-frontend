import { Wine } from "../../../utils/types/types";
import UserInterfaceButton from "../buttons/UserInterfaceButton/UserInterfaceButton";
import BodyCopy from "../texts/BodyCopy/BodyCopy";
import BodyTitles from "../texts/BodyTitles/BodyTitles";
import PriceText from "../texts/PriceText/PriceText";
import "./ProductCard.scss";
// import { redirectToUrl } from "../../../utils/functions/navigation_fn/redirectToUrl";

const ProductCard = ({
  wineData,
  vertical = true,
  horizontal = false,
  // page,
  extraClass,
}: {
  wineData: Wine;
  vertical?: boolean;
  horizontal?: boolean;
  // page?: string;
  extraClass?:string,
}) => {
  return (
    <>
      <article
        className={`wine-card ${extraClass && extraClass} ${
          horizontal ? "wine-card-horizontal" : null
        } ${
          vertical ? "wine-card-vertical" : null
        }`}
      >
        <div className={`wine-card-container wine-card-image`}>
          <img src={wineData.picture} alt={wineData.name} />
        </div>

        <div className="wine-card-container wine-card-info">
          <BodyTitles text={wineData.name} hierarchy={6} />

          <BodyCopy text={wineData.description} />
          {wineData.price && (
            <PriceText value={wineData.price} currency="$" background={false} />
          )}
          <UserInterfaceButton
            kind="regular"
            text="see wine"
            // fnc={()=>{redirectToUrl(`/products/${wineData.idNumber}`)}}
            fnc={()=>{console.log('clicked')}}
            link={`/products/${wineData.idNumber}`}
            color="dark"
          />
        </div>
      </article>
    </>
  );
};

export default ProductCard;
