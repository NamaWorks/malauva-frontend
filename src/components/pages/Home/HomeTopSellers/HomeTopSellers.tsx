import { WinesContext } from "../../../../utils/contexts/contexts";
import { Wine } from "../../../../utils/types/types";
import ProductCard from "../../../elements/ProductCard/ProductCard";
import BodyTitles from "../../../elements/texts/BodyTitles/BodyTitles";
import "./HomeTopSellers.scss";
import React, { useContext } from "react";

const HomeTopSellers = () => {
  const { fetchWines } = useContext(WinesContext);

  return (
    <>
      <section className="home-section" id="home-top-sellers">
        <BodyTitles text="Top sellers" hierarchy={5} />
        <div id="top-sellers-container">
          {fetchWines.map((wineObj: Wine, i: number) => {
            if (i < 4) {
              return (
                <>
                  <ProductCard wineData={wineObj} key={i} />
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
