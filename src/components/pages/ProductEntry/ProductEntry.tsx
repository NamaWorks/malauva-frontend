import './ProductEntry.scss';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { WinesContext } from '../../../utils/contexts/contexts';
import { Wine } from '../../../utils/types/types';
import { fetchData } from '../../../utils/functions/fetchData';
import BodyTitles from '../../elements/texts/BodyTitles/BodyTitles';
import BodyCopy from '../../elements/texts/BodyCopy/BodyCopy';
import PriceText from '../../elements/texts/PriceText/PriceText';
import NavigationButton from '../../elements/buttons/NavigationButton/NavigationButton';
import UserInterfaceButton from '../../elements/buttons/UserInterfaceButton/UserInterfaceButton';
import AddMoreButton from '../../elements/buttons/AddMoreButton/AddMoreButton';

const ProductEntry = () => {
  const { fetchWines } = useContext<Wine[] | undefined>(WinesContext);
  let idNumber = useParams().idNumber?.toUpperCase()
  const [wineToPrint, setWineToPrint] = useState<Wine>()
  // let wineToPrint:Wine|void =
  
  useEffect(()=>{
    if(fetchWines.lenght > 0){
        const wine = fetchWines.filter((wineObj:Wine):Wine =>{wineObj[idNumber]===idNumber})
        setWineToPrint(wine)
      } else if(fetchWines.length <= 0){
        fetchData('/wines/idNumber/' + idNumber).then(res => setWineToPrint(res)).catch(err => console.warn(err))
    }
  },[])
  
  

  return (
    <div>
      <main id='product-entry'>

        <div className="product-entry-container" id='product-info-container'>
          <div className='image-container'>
            <img src={wineToPrint?.picture} alt={wineToPrint?.name}/>
          </div>
        </div>

        <div className="product-entry-container" id='buying-details-container'>
          <BodyTitles text={wineToPrint?.name} hierarchy={4} color='dark'/>
          <h5 className='product-entry-origin'>{wineToPrint?.origin}</h5>
          <BodyCopy text={wineToPrint?.description}/>
          <PriceText value={wineToPrint?.price} background/>
          <AddMoreButton />
          <UserInterfaceButton kind='bold' color='green' text='Add to cart'/>
        </div>
      </main>
    </div>
  )
}

export default ProductEntry