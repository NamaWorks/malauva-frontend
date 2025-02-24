import { NavigationContext } from '../../../utils/contexts/contexts'
// import { redirectToUrl } from '../../../utils/functions/navigation_fn/redirectToUrl'
import '../../../components/pages/OverAge/OverAge.scss'
import { useContext, useEffect } from 'react'
import { NavigationContextInterface } from '../../../utils/types/interfaces'
// import useRedirectToPage from '../../../utils/hooks/useRedirectToPage'
import { redirectToUrl } from '../../../utils/functions/navigation_fn/redirectToUrl'

const OverAge = () => {

  const { overAge, setOverAge } = useContext(NavigationContext) as NavigationContextInterface

  console.log(overAge)

  window.addEventListener('load', ()=>{if(overAge===true){window.location.href='home'}})

  useEffect(()=>{
    overAge && redirectToUrl('home')
  },[overAge])

  return (
    <>
    <main id='overage-page'>

      <div className='overage-container'>
        <div className='overage-content-div'>
          <img src="/assets/img/illustrations/glasses.svg" alt="illustrations of stored glasses" />
        </div>
        <div className='overage-content-div'>
          <p>+21?</p>
          <div className='overage-buttons-container'>
            {/* <Link to={}> */}
              <button className="overage-button" onClick={()=>{setOverAge(true); sessionStorage.setItem('overAge', 'true')}}>Y</button>
            {/* </Link> */}
            <p>/</p>
            <button className="overage-button" onClick={()=>{console.log('button clicked')}}>N</button>
          </div>
        </div>
      </div>

    </main>
    
    </>
  )
}

export default OverAge