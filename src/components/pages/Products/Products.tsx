import './Products.scss'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContext, WinesContext } from '../../../utils/contexts/contexts'
import { Wine } from '../../../utils/types/types'
import { fetchData } from '../../../utils/functions/fetchData'
import ProductCard from '../../elements/ProductCard/ProductCard'

const Products = React.memo(() => {
  
  const { fetchWines, setFetchWines }  = useContext(WinesContext)
  const { currentPage } = useContext(NavigationContext)
  const [lastPrintItem, setLastPrintItem] = useState<number>(0)

  useEffect(()=>{
    fetchData('/wines').then(res => setFetchWines(res)).catch(err => console.warn(err))
  },[])

  return (
    <>
    
      <main id='products-page'>
        <section className="products-page-container" id='products-filter'>
          <div className="products-filer-container"></div>
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
})

export default Products