import BodyCopy from '/src/components/elements/texts/BodyCopy/BodyCopy'
import BodyTitles from '/src/components/elements/texts/BodyTitles/BodyTitles'
import '/src/components/pages/About/About.scss'

const lorem = `At MalaUva, we believe that wine isn't just a drink – it's an experience. Whether you're drawn to our carefully selected bottles or entranced by the floral illustrations that adorn each label, there's always a story to discover. From the quiet beauty of the vineyard to the serene moments shared between friends, we invite you to savor life’s small pleasures with us.

Come for the wine, stay for the stories. Welcome to MalaUva.`

const About = () => {
  return (
    <main id='about-page'>

      <div className="about-container">
        <img src="/public/assets/img/pictures/old-man.png" alt="old man sitting on the street" />
      </div>
      <div className="about-container">
        <BodyTitles text='About' hierarchy={5}/>
        <BodyCopy text={lorem}/>
      </div>
    </main>
  )
}

export default About