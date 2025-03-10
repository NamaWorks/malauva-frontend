import { WinesContext } from "../../../../utils/contexts/contexts";
import { WinesContextInterface } from "../../../../utils/types/interfaces";
import { Wine } from "../../../../utils/types/types";
import ProductCard from "../../../elements/ProductCard/ProductCard";
import BodyTitles from "../../../elements/texts/BodyTitles/BodyTitles";
import "./HomeTopSellers.scss";
import { useContext } from "react";

const HomeTopSellers = () => {
  const { fetchWines } = useContext(WinesContext) as WinesContextInterface;

  return (
    <>
      <section className="home-section" id="home-top-sellers">
        <BodyTitles text="Top sellers" hierarchy={5} />
        <div id="top-sellers-container">
          {fetchWines.map((wineObj: Wine, i: number) => {
            if (i < 4) {
              return (
                <>
                  <ProductCard key={`top-seller-${i}`} wineData={wineObj} />
                </>
              );
            }
          })}
        </div>
      </section>
    </>
  );
};

export default HomeTopSellers;