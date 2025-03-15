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

  const {navigationState, dispatchNavigation } = useContext(NavigationContext) as NavigationContextInterface;

const {dispatchFetchWines} = useContext(WinesContext) as WinesContextInterface;

  useEffect(() =>{
    overAgeChecker(navigationState.overAge)
    fetchData('/wines').then(res => dispatchFetchWines({type: "SET_FETCH_WINES", payload: res})).catch(err => console.warn(err))
  },[])
  
  return (
    <>
    <main id='home'
      onLoad={()=>{
        window.scrollTo(0,0)
        dispatchNavigation({ type: "SET_CURRENT_PAGE", payload: 'home'})
        sessionStorage.setItem('currentPage', `home`)
      }}
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