import { WinesContext } from '../../../../utils/contexts/contexts'
import { handleScrollByDragging, handleScrollByDraggingTest } from '../../../../utils/functions/handleScrollByDragging'
import useScrollByDragging from '../../../../utils/hooks/useScrollByDragging'
import ProductCard from '../../../elements/ProductCard/ProductCard'
import './HomeDragAndDrop.scss'
import React, { useContext } from 'react'

const HomeDragAndDrop = () => {

  const { fetchWines } = useContext(WinesContext)
  // handleScrollByDragging('drag-container')
  handleScrollByDraggingTest('drag-container')
  // useScrollByDragging('drag-container')

  return (
    <>
    <section className='home-section' id='home-drag-section'>
      <div id='drag-container' style={{top: -400, left: -400}}>
      {
        fetchWines.map((wineObj: Wine, i: number) => {
          
          return (
            <>

              <ProductCard wineData={wineObj} key={i} vertical={false} horizontal={true}/>

            </>
          )
          
        })
      }
      </div>
    </section>
    </>
  )
}

export default HomeDragAndDrop