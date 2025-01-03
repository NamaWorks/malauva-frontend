import "./Products.scss";
import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  NavigationContext,
  WinesContext,
} from "/src/utils/contexts/contexts";
import { Wine } from "/src/utils/types/types";
import { fetchData } from "/src/utils/functions/api_fn/fetchData";
import ProductCard from "/src/components/elements/ProductCard/ProductCard";
import UserInterfaceButton from "/src/components/elements/buttons/UserInterfaceButton/UserInterfaceButton";
import {addAllStrings, prepareIntervals, } from "/src/utils/functions/ui_fn/productsFilters";
import ProductsFilterSelect from "./ProductsFilterSelect/ProductsFilterSelect";
import { getFooterTop } from "/src/utils/functions/ui_fn/getFooterTop";
import { getRandomIndex } from "/src/utils/functions/math/getRandomIndex";
import { overAgeChecker } from "/src/utils/functions/ui_fn/overAgeChecker";

const Products = () => {
  const { fetchWines, setFetchWines } = useContext(WinesContext);
  const { currentPage, setCurrentPage } = useContext(NavigationContext);
  const [lastPrintItem, setLastPrintItem] = useState<number>(12);
  const [wineOrigins, setWineOrigins] = useState<string[]>([]);
  const [wineTastes, setWineTastes] = useState<string[]>([]);
  const [wineTemps, setWineTemps] = useState<Number[]>([5, 7, 12, 15, 20]);
  const [winePrices, setWinePrices] = useState<Number[]>([20, 50, 100, 200, 300, 450,]);
  const [printedItems, setPrintedItems] = useState<Map<number, string>>(new Map());
  const [loading, setLoading] = useState<boolean>(true);
  const {overAge} = useContext(NavigationContext)

  useEffect(() => {
    setCurrentPage("products");

    overAgeChecker(overAge);

    fetchData("/wines")
      .then((res) => {
        setFetchWines(res);
        setWineOrigins(addAllStrings(fetchWines, "origin"));
        setWineTastes(addAllStrings(fetchWines, "taste"));
      })
      .catch((err) => console.warn(err))
      .finally(() => {
        setLoading(false);
      });
  }, [loading]);

  useEffect(() => {
    // Scroll listener to load more items
    const handleScroll = () => {
      const footerTop = getFooterTop();
      if (
        window.scrollY + footerTop <=
        window.scrollY + window.innerHeight * 1.5
      ) {
        setLoading(true);
        setLastPrintItem(lastPrintItem + 12);
        setLoading(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastPrintItem]);

  const renderWineList = () => {
    return fetchWines.map((wineObj: Wine, i: number) => {
      const randomVal = getRandomIndex();
      let className = "skip-zero";

      // Check if the wine item already has a printed class
      if (printedItems.has(i)) {
        className = printedItems.get(i) as string;
      } else {
        // Assign class based on random value
        if (i < lastPrintItem) {
          if (randomVal > 7) {
            className = "skip-one";
          } else if (randomVal > 9) {
            className = "skip-two";
          } else {
            className = "skip-zero";
          }

          // Update the printed items map with the assigned class
          setPrintedItems((previousMap) => new Map(previousMap).set(i, className));
        }
      }

      // Return ProductCard with appropriate class
      if (i < lastPrintItem) {
        return (
          <ProductCard wineData={wineObj} key={wineObj.idNumber} extraClass={className}/>
        );
      }

      return null; // Avoid rendering items beyond lastPrintItem
    });
  };

  return (
    <>
      <main id="products-page">
        <section className="products-page-container" id="products-filter">
          <div className="products-filter-container">
            <div>
              <ProductsFilterSelect selectName="origins" allText="All Origins" arr={wineOrigins} />
              <ProductsFilterSelect selectName="taste" allText="All Tastes" arr={wineTastes} />
              <ProductsFilterSelect selectName="price" allText="All Prices" arr={prepareIntervals(winePrices)} />
              <ProductsFilterSelect selectName="temperature" allText="All Temperatures" arr={prepareIntervals(wineTemps)} />
              <ProductsFilterSelect selectName="sort" allText="relevant" arr={["alphabetically", "high price", "low price", "relevance"]} />
            </div>
            <UserInterfaceButton text="filter" color="pink" />
          </div>
        </section>
        <section className="products-page-container" id="products-container">
          {loading && <p>fetching</p>}
          {renderWineList()}
        </section>
      </main>
    </>
  );
};

export default Products;
