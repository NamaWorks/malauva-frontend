import { WinesContext } from '../../../../utils/contexts/contexts'
import { handleMouseMove_, handleScrollByDragging } from '../../../../utils/functions/handleScrollByDragging'
import useScrollByDragging from '../../../../utils/hooks/useScrollByDragging'
import ProductCard from '../../../elements/ProductCard/ProductCard'
import './HomeDragAndDrop.scss'
import React, { useContext, useEffect, useState } from 'react'

const HomeDragAndDrop = React.memo(() => {
  
  const { fetchWines } = useContext(WinesContext)
  
  // handleScrollByDragging('drag-container')
  // useScrollByDragging('drag-container')
  handleMouseMove_('drag-container')

  
  return (
    <>
    {/* {window.onload=()=>{}} */}
    <section className='home-section' id='home-drag-section'>
      <div id='drag-container' style={{top: -400, left: -800}}>
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


})

export default HomeDragAndDrop