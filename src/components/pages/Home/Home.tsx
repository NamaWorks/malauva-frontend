import { useContext, useEffect, useMemo} from 'react'
import './Home.scss'
import { fetchData } from '../../../utils/functions/fetchData';
import HomeHero from './HomeHero/HomeHero';
import HomeHlText from './HomeHlText/HomeHlText';
import HomeDragAndDrop from './HomeDragAndDrop/HomeDragAndDrop';
import HomeAboutUs from './HomeAboutUs/HomeAboutUs';
import HomeTopSellers from './HomeTopSellers/HomeTopSellers';
import HomeFaq from './HomeFaq/HomeFaq';
import { WinesContext } from '../../../utils/contexts/contexts';


const Home = () => {

const {setFetchWines} = useContext(WinesContext)

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
      <HomeTopSellers/>
      <HomeFaq/>
    </main>
    </>
  )
}

export default Home