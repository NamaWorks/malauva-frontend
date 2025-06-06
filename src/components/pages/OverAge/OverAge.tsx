import { NavigationContext } from '../../../utils/contexts/contexts'
// import { redirectToUrl } from '../../../utils/functions/navigation_fn/redirectToUrl'
import '../../../components/pages/OverAge/OverAge.scss'
import { useContext, useEffect } from 'react'
import { NavigationContextInterface } from '../../../utils/types/interfaces'
// import useRedirectToPage from '../../../utils/hooks/useRedirectToPage'
import { redirectToUrl } from '../../../utils/functions/navigation_fn/redirectToUrl'

const OverAge = () => {

  const { navigationState, dispatchNavigation } = useContext(NavigationContext) as NavigationContextInterface

  console.log(navigationState.overAge)

  window.addEventListener('load', ()=>{if(navigationState.overAge===true){window.location.href='home'}})

  useEffect(()=>{
    navigationState.overAge && redirectToUrl('home')
  },[navigationState.overAge])

  return (
    <>
    <main id='overage-page'
      onLoad={()=>{window.scrollTo(0,0)}}
    >

      <div className='overage-container'>
        <div className='overage-content-div'>
          <img src="/assets/img/illustrations/glasses.svg" alt="illustrations of stored glasses" />
        </div>
        <div className='overage-content-div'>
          <p>Are you over 21 years old?</p>
          <div className='overage-buttons-container'>
            {/* <Link to={}> */}
              <button className="overage-button" onClick={()=>{dispatchNavigation({type:"SET_OVER_AGE", payload:true}); sessionStorage.setItem('overAge', 'true')}}>Yes</button>
            {/* </Link> */}
            <p>/</p>
            <button className="overage-button" onClick={()=>{console.log('button clicked')}}>No</button>
          </div>
        </div>
      </div>

    </main>
    
    </>
  )
}

export default OverAge