import { WinesContext } from '../../../../utils/contexts/contexts'
import { WinesContextInterface } from '../../../../utils/types/interfaces'
import { Wine } from '../../../../utils/types/types'
// import { handleMouseMove_, handleScrollByDragging } from '../../../../utils/functions/handleScrollByDragging'
// import useScrollByDragging from '../../../../utils/hooks/useScrollByDragging'
import ProductCard from '../../../elements/ProductCard/ProductCard'
import './HomeDragAndDrop.scss'
import React, { useContext} from 'react'

const HomeDragAndDrop = React.memo(() => {
  
  const { fetchWines } = useContext(WinesContext) as WinesContextInterface
  
  // handleScrollByDragging('drag-container')
  // useScrollByDragging('drag-container')
  // handleMouseMove_('drag-container')

  
  return (
    <>
    {/* {window.onload=()=>{}} */}
    <section className='home-section' id='home-drag-section'>
      <div id='drag-container' style={{top: -400, left: -800}}>
      {
        fetchWines.map((wineObj: Wine, i: number) => {
          if(i<100){

            return (
              <>

              <ProductCard wineData={wineObj} key={i} vertical={false} horizontal={true}/>

            </>
          )
          
        }
      }
    )
      }
      </div>
    </section>
    </>
  )


})

export default HomeDragAndDrop