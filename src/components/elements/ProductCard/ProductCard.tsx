import { Wine } from '../../../utils/types/types'
import './ProductCard.scss'
import React from 'react'

const ProductCard = ({ wineData, vertical= true, horizontal=false, page }: { wineData: Wine , vertical: boolean, horizontal: boolean, page: string }) => {
  return (
    <>
      <div className='wine-card'>

        <div className='wine-card-container wine-card-image'>
          <img src={wineData.picture} alt={wineData.name} />
        </div>

        <div className='wine-card-contaienr wine-card-info'>
          <p>{wineData.name}</p>
          <div>${wineData.price}</div>
          <p>{wineData.description}</p>
                    
        </div>

      </div>
    </>
  )
}

export default ProductCard