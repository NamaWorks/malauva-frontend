import { WinesContext } from '../../../../utils/contexts/contexts';
import { Wine } from '../../../../utils/types/types';
import ProductCard from '../../../elements/ProductCard/ProductCard';
import './HomeTopSellers.scss'
import React, { useContext } from 'react'

const HomeTopSellers = () => {

  const { fetchWines} = useContext(WinesContext)

  return (
    <>
      <section className="home-section" id="home-top-sellers">
        {
        fetchWines.map((wineObj: Wine, i: number) => {
          if(i < 4) {
            return(
              <>
                <ProductCard wineData={wineObj}/>
              </>)
          }
        }
      )
        }
      </section>
    </>
  );
}

export default HomeTopSellers