import { useContext, useEffect, useState } from 'react'
import './Home.scss'
import { fetchData } from '../../../utils/functions/fetchData';
import HomeHero from './HomeHero/HomeHero';
import HomeHlText from './HomeHlText/HomeHlText';
import HomeDragAndDrop from './HomeDragAndDrop/HomeDragAndDrop';
import HomeAboutUs from './HomeAboutUs/HomeAboutUs';
import HomeTopSellers from './HomeTopSellers/HomeTopSellers';
import HomeFaq from './HomeFaq/HomeFaq';
import { WinesContext } from '../../../utils/contexts/contexts';
import BodyTitles from '../../elements/texts/BodyTitles/BodyTitles';


const Home = () => {

  type Wine = {
    _id: string;
    idNumber: string;
    name: string;
    brand: string;
    picture: string;
    taste: string;
    idealTemperature:number;
    origin: string;
    scores: string[];
    price: number;
    __v: number;
    createdAt: string;
    updatedAt: string;
  }

const {fetchWines, setFetchWines} = useContext(WinesContext)

  useEffect(() =>{

   fetchData('/wines').then(res => setFetchWines(res)).catch(err => console.warn(err))
   

  },[])
  
  return (
    <>
    <main id='home'>
      <HomeHero/>
      <HomeHlText/>
      <HomeDragAndDrop/>
      <HomeAboutUs/>
      <BodyTitles text='test text' hierarchy={4} color='dark'/>
      <HomeTopSellers/>
      <HomeFaq/>
    </main>
    </>
  )
}

export default Home