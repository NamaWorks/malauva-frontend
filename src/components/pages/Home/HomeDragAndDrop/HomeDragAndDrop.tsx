import { WinesContext } from '../../../../utils/contexts/contexts'
import ProductCard from '../../../elements/ProductCard/ProductCard'
import './HomeDragAndDrop.scss'
import React, { useContext } from 'react'

const HomeDragAndDrop = () => {

  const { fetchWines } = useContext(WinesContext)

  return (
    <>
    <section className='home-section' id='home-drag-section'>
      {
        fetchWines.map((wineObj: Wine, i: number) => {

          return (
            <>

              <ProductCard wineData={wineObj} key={i} vertical={false} horizontal={true}/>

            </>
          )

        })
      }
    </section>
    </>
  )
}

export default HomeDragAndDrop