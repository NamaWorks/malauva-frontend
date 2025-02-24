import { useContext, useEffect} from 'react'
import './Home.scss'
import { fetchData } from '../../../utils/functions/api_fn/fetchData';
import HomeHero from './HomeHero/HomeHero';
import HomeHlText from './HomeHlText/HomeHlText';
import HomeDragAndDrop from './HomeDragAndDrop/HomeDragAndDrop';
import HomeAboutUs from './HomeAboutUs/HomeAboutUs';
import HomeTopSellers from './HomeTopSellers/HomeTopSellers';
import HomeFaq from './HomeFaq/HomeFaq';
import { NavigationContext, WinesContext } from '../../../utils/contexts/contexts';
import { overAgeChecker } from '../../../utils/functions/ui_fn/overAgeChecker';
import { NavigationContextInterface, WinesContextInterface } from '../../../utils/types/interfaces';



const Home = () => {

  const {overAge} = useContext(NavigationContext) as NavigationContextInterface;

const {setFetchWines} = useContext(WinesContext) as WinesContextInterface;

  useEffect(() =>{
    overAgeChecker(overAge)
    fetchData('/wines').then(res => setFetchWines(res)).catch(err => console.warn(err))
  },[])
  
  return (
    <>
    <main id='home'
      onLoad={()=>{window.scrollTo(0,0)}}
    >
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