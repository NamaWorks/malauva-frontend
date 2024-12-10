import './Products.scss'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { NavigationContext, WinesContext } from '../../../utils/contexts/contexts'
import { Wine } from '../../../utils/types/types'
import { fetchData } from '../../../utils/functions/fetchData'
import ProductCard from '../../elements/ProductCard/ProductCard'
import UserInterfaceButton from '../../elements/buttons/UserInterfaceButton/UserInterfaceButton'
import { addAllOrigins } from '../../../utils/functions/productsFilters'
import ProductsFilterSelect from './ProductsFilterSelect/ProductsFilterSelect'

const Products = () => {
  
  const { fetchWines, setFetchWines }  = useContext(WinesContext);
  const { currentPage } = useContext(NavigationContext);
  const [lastPrintItem, setLastPrintItem] = useState<number>(0);
  const [wineOrigins, setWineOrigins] = useState<string[]>([]);

  useEffect(()=>{
    fetchData('/wines').then(res => {
      setFetchWines(res);
      setWineOrigins(addAllOrigins(fetchWines));

    }).catch(err => console.warn(err))

    console.log(fetchWines[0])
  },[])

  return (
    <>
      <main id='products-page'>
        <section className="products-page-container" id='products-filter'>
          <div className="products-filter-container">
            <div>
              <ProductsFilterSelect selectName='Wine Origins' allText='All Origins' arr={wineOrigins}/>
              <ProductsFilterSelect selectName='Wine Origins' allText='All Origins' arr={wineOrigins}/>
            </div>
            <UserInterfaceButton text='filter' color='beige'/>
          </div>
        </section>
        <section className="products-page-container" id='products-container'>
          {
            fetchWines.map((wineObj: Wine, i: number) => {
              if(i<lastPrintItem+20){
                return(
                  <>
                    <ProductCard wineData={wineObj} key={i} />
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