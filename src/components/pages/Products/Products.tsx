import "./Products.scss";
import { useContext, useEffect, useState } from "react";
import {
  NavigationContext,
  WinesContext,
} from "../../../utils/contexts/contexts";
import { Wine } from "../../../utils/types/types";
import { fetchData } from "../../../utils/functions/api_fn/fetchData";
import ProductCard from "../../../components/elements/ProductCard/ProductCard";
import UserInterfaceButton from "../../../components/elements/buttons/UserInterfaceButton/UserInterfaceButton";
import {addAllStrings, prepareIntervals, } from "../../../utils/functions/ui_fn/productsFilters";
import ProductsFilterSelect from "./ProductsFilterSelect/ProductsFilterSelect";
import { getFooterTop } from "../../../utils/functions/ui_fn/getFooterTop";
import { getRandomIndex } from "../../../utils/functions/math/getRandomIndex";
import { overAgeChecker } from "../../../utils/functions/ui_fn/overAgeChecker";
import { filterProducts } from "../../../utils/functions/filters_fn/filterProducts";
import useSubmitFilters from "../../../utils/hooks/useSubmitFilters";
import { sortProducts } from "../../../utils/functions/filters_fn/sortProducts";
import { NavigationContextInterface, WinesContextInterface } from "../../../utils/types/interfaces";

const Products = () => {
  const { fetchWines, setFetchWines } = useContext(WinesContext) as WinesContextInterface;
  const { setCurrentPage, overAge } = useContext(NavigationContext) as NavigationContextInterface;

  const [lastPrintItem, setLastPrintItem] = useState<number>(12);
  const [wineOrigins, setWineOrigins] = useState<string[]>([]);
  const [wineTastes, setWineTastes] = useState<string[]>([]);
  const [wineTemps, setWineTemps] = useState<number[]>([5, 7, 12, 15, 20]);
  const [winePrices, setWinePrices] = useState<number[]>([20, 50, 100, 200, 300, 450,]);
  const [printedItems, setPrintedItems] = useState<Map<number, string>>(new Map());
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredWines, setFilteredWines] = useState<Wine[]>(fetchWines)

  // Here the different fil†er values
  const [ originsValue, setOriginsValue ] = useState<string>('origin');
  const [ tasteValue, setTasteValue ] = useState<string>('taste');
  const [ priceValue, setPriceValue ] = useState<number | string>('price');
  const [ temperatureValue, setTemperatureValue ] = useState<number | string>('temperature');
  const [ sortValue, setSortValue ] = useState<string>('sort');
  const [ winInnerWidth, setWinInnerWidth ] = useState<number>(window.innerWidth)
  const [ showFilters, setShowFilters ] = useState<boolean>(false)


  setWineTemps(wineTemps)
  setWinePrices(winePrices)

  useEffect(() => {
    setCurrentPage("products");

    overAgeChecker(overAge);

    fetchData("/wines")
      .then((res:Wine[]) => {
        setFetchWines(res);
        setWineOrigins(addAllStrings(fetchWines, "origin"));
        setWineTastes(addAllStrings(fetchWines, "taste"));
      })
      .catch((err:Error) => console.warn(err))
      .finally(() => {
        setLoading(false);
      });

      setFilteredWines(fetchWines)
      
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

  useEffect(() => {
    console.log(`select values changed`)
    const filteredArr = filterProducts(originsValue, tasteValue, priceValue, temperatureValue, sortValue, fetchWines)
    setFilteredWines(filteredArr)
    useSubmitFilters({setOriginsValue, setTasteValue, setPriceValue, setTemperatureValue, setSortValue})
    sortProducts(filteredArr, sortValue)
  },[originsValue, tasteValue, priceValue, temperatureValue, sortValue, fetchWines, loading])

  window.addEventListener('resize', ()=>{setWinInnerWidth(window.innerWidth)})

  return (
    <>
      <main id="products-page">
        <section className="products-page-container" id="products-filter">
        <div className="products-filter-container shown">
          {winInnerWidth<=800 && (<UserInterfaceButton text={showFilters ? 'hide filters' : 'show filters'} fnc={()=>{setShowFilters(!showFilters)}} />)}
            <div className={`filters-container ${showFilters ? 'filters-shown' : 'filters-hidden'}`}>
              <div>
                <ProductsFilterSelect selectName="origins" allText="Origins" arr={wineOrigins} />
                <ProductsFilterSelect selectName="taste" allText="Taste" arr={wineTastes} />
                <ProductsFilterSelect selectName="price" allText="Price" arr={prepareIntervals(winePrices)} />
                <ProductsFilterSelect selectName="temperature" allText="Temperature" arr={prepareIntervals(wineTemps)} />
                <ProductsFilterSelect selectName="sort" allText="Sort" arr={["alphabetically", "high price", "low price"]} />
              </div>
              <UserInterfaceButton text="filter" color="pink" fnc={()=>{useSubmitFilters({setOriginsValue, setTasteValue, setPriceValue, setTemperatureValue, setSortValue}); console.warn(`submit button clicked`)}}/>
            </div>
          </div>
        </section>
        <section className="products-page-container" id="products-container">
          {loading && <p>fetching</p>}
          {filteredWines.map((wineObj:Wine, i:number) => {
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
                        })
          }
        </section>
      </main>
    </>
  );
};

export default Products;
