import { useContext, useEffect } from 'react'
import BodyCopy from '../../../components/elements/texts/BodyCopy/BodyCopy'
import BodyTitles from '../../../components/elements/texts/BodyTitles/BodyTitles'
import '../../../components/pages/About/About.scss'
import { NavigationContext } from '../../../utils/contexts/contexts'
import { NavigationContextInterface } from '../../../utils/types/interfaces'

const lorem = `At MalaUva, we believe that wine isn't just a drink – it's an experience. Whether you're drawn to our carefully selected bottles or entranced by the floral illustrations that adorn each label, there's always a story to discover. From the quiet beauty of the vineyard to the serene moments shared between friends, we invite you to savor life’s small pleasures with us.

Come for the wine, stay for the stories. Welcome to MalaUva.`

const About = () => {

  const { dispatchNavigation } = useContext(NavigationContext) as NavigationContextInterface

  useEffect(()=>{
    dispatchNavigation({ type: "SET_CURRENT_PAGE", payload: 'about'})
  })

  return (
    <main id='about-page'
      onLoad={()=>{window.scrollTo(0,0)}}
    >

      <div className="about-container">
        <img src="/assets/img/pictures/old-man.webp" alt="old man sitting on the street" />
      </div>
      <div className="about-container">
        <BodyTitles text='About' hierarchy={5}/>
        <BodyCopy text={lorem}/>
      </div>
    </main>
  )
}

export default About