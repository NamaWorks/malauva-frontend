import { Wine } from '../../../utils/types/types'
import UserInterfaceButton from '../buttons/UserInterfaceButton/UserInterfaceButton'
import BodyCopy from '../texts/BodyCopy/BodyCopy'
import BodyTitles from '../texts/BodyTitles/BodyTitles'
import PriceText from '../texts/PriceText/PriceText'
import './ProductCard.scss'
import React from 'react'

const ProductCard = ({ wineData, vertical= true, horizontal=false, page }: { wineData: Wine , vertical?: boolean, horizontal?: boolean, page?: string }) => {
  return (
    <>
      <div className='wine-card'>

        <div className='wine-card-container wine-card-image'>
          <img src={wineData.picture} alt={wineData.name} />
        </div>

        <div className='wine-card-contaienr wine-card-info'>
          <BodyTitles text={wineData.name} hierarchy={4} />
          {wineData.price && 
            <PriceText value={wineData.price} currency='$' background={true} />
          }
          <BodyCopy text={wineData.description}/>
          <UserInterfaceButton 
            kind='regular' 
            text='see wine'
            // icons={[{name: 'test', url:"#"}]}
            color='dark'
          />          
        </div>

      </div>
    </>
  )
}

export default ProductCard