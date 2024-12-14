import './Products.scss'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { NavigationContext, WinesContext } from '../../../utils/contexts/contexts'
import { Wine } from '../../../utils/types/types'
import { fetchData } from '../../../utils/functions/fetchData'
import ProductCard from '../../elements/ProductCard/ProductCard'
import UserInterfaceButton from '../../elements/buttons/UserInterfaceButton/UserInterfaceButton'
import { addAllStrings, prepareIntervals } from '../../../utils/functions/productsFilters'
import ProductsFilterSelect from './ProductsFilterSelect/ProductsFilterSelect'
import { handleProductsPageScroll } from '../../../utils/functions/handleProductsPageScroll'
import { getFooterTop } from '../../../utils/functions/getFooterTop'

const Products = () => {
  
  const { fetchWines, setFetchWines }  = useContext(WinesContext);
  const { currentPage, setCurrentPage } = useContext(NavigationContext);
  const [lastPrintItem, setLastPrintItem] = useState<number>(10);
  const [wineOrigins, setWineOrigins] = useState<string[]>([]);
  const [wineTastes, setWineTastes] = useState<string[]>([]);
  const [wineTemps, setWineTemps] = useState<Number[]>([5, 7, 12, 15, 20]);
  const [winePrices, setWinePrices] = useState<Number[]>([20, 50, 100, 200, 300, 450]);
  const [loading, setLoading] = useState<boolean>(true);

  
  useEffect(()=>{
    setCurrentPage('products')
    
    fetchData('/wines')
    .then(res => {
      setFetchWines(res);
      setWineOrigins(addAllStrings(fetchWines, 'origin'));
      setWineTastes(addAllStrings(fetchWines, 'taste'));
    })
    .catch(err => console.warn(err))
    .finally(()=>{setLoading(false)})
    
  },[loading])
  
  window.addEventListener('scroll', ()=>{
    const footerTop = getFooterTop()
    if(window.scrollY + footerTop <= window.scrollY + window.innerHeight*1.5){
    setLastPrintItem(lastPrintItem+10)
  } })
  
  return (
    <>
      <main id='products-page'>
        <section className="products-page-container" id='products-filter'>
          <div className="products-filter-container">
            <div>
              <ProductsFilterSelect selectName='origins' allText='All Origins' arr={wineOrigins}/>
              <ProductsFilterSelect selectName='taste' allText='All Tastes' arr={wineTastes}/>
              <ProductsFilterSelect selectName='price' allText='All Prices' arr={prepareIntervals(winePrices)}/>
              <ProductsFilterSelect selectName='temperature' allText='All Temperatures' arr={prepareIntervals(wineTemps)}/>
              <ProductsFilterSelect selectName='sort' allText='relevant' arr={['alphabetically', 'high price', 'low price', 'relevance']}/>
            </div>
            <UserInterfaceButton text='filter' color='pink'/>
          </div>
        </section>
        <section className="products-page-container" id='products-container'>
          {loading && (
            <p>fetching</p>
          )}
          {
             fetchWines.map((wineObj: Wine, i: number) => {
               if(i<lastPrintItem){
                return(
                  <>
                    <ProductCard wineData={wineObj} key={i}/>
                  </>
                )
              }
            })
          }
        </section>
      </main>

    </>
  )
}

export default Products