import './Products.scss'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { NavigationContext, WinesContext } from '../../../utils/contexts/contexts'
import { Wine } from '../../../utils/types/types'
import { fetchData } from '../../../utils/functions/fetchData'
import ProductCard from '../../elements/ProductCard/ProductCard'
import UserInterfaceButton from '../../elements/buttons/UserInterfaceButton/UserInterfaceButton'
import { addAllNumbers, addAllStrings } from '../../../utils/functions/productsFilters'
import ProductsFilterSelect from './ProductsFilterSelect/ProductsFilterSelect'

const Products = () => {
  
  const { fetchWines, setFetchWines }  = useContext(WinesContext);
  const { currentPage, setCurrentPage } = useContext(NavigationContext);
  const [lastPrintItem, setLastPrintItem] = useState<number>(0);
  const [wineOrigins, setWineOrigins] = useState<string[]>([]);
  const [wineTastes, setWineTastes] = useState<string[]>([]);
  const [wineTemps, setWineTemps] = useState<Number[]>([0, 5, 10, 15, 20]);
  const [winePrices, setWinePrices] = useState<Number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=>{
    
    fetchData('/wines').then(res => {
      setFetchWines(res);
      setWineOrigins(addAllStrings(fetchWines, 'origin'));
      setWineTastes(addAllStrings(fetchWines, 'taste'));
      setWinePrices(addAllNumbers())
    }).catch(err => console.warn(err)).finally(()=>{setLoading(false)})
    // console.log(fetchWines[0])
  },[loading])

  return (
    <>
      <main id='products-page'>
        <section className="products-page-container" id='products-filter'>
          <div className="products-filter-container">
            <div>
              <ProductsFilterSelect selectName='Origins' allText='All Origins' arr={wineOrigins}/>
              <ProductsFilterSelect selectName='Taste' allText='All Tastes' arr={wineTastes}/>
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
              if(i<lastPrintItem+20){
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