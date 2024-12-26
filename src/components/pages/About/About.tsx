import BodyCopy from '/src/components/elements/texts/BodyCopy/BodyCopy'
import BodyTitles from '/src/components/elements/texts/BodyTitles/BodyTitles'
import '/src/components/pages/About/About.scss'

const lorem = `Sed interdum enim tellus, et gravida turpis tincidunt vel. Sed tincidunt sed purus vel pharetra. Praesent vitae elit sed sem congue aliquet. Maecenas suscipit sagittis lacus. Integer consequat consectetur aliquet. Nam venenatis purus vel felis tincidunt iaculis. Curabitur mauris eros, eleifend ut eros eu, vehicula accumsan dolor. Aenean sit amet ligula ut dolor placerat gravida mattis sed lacus. Maecenas maximus quis nunc ut mollis. Cras pretium erat id ex porttitor, tincidunt bibendum justo venenatis. Integer libero justo, imperdiet vel lacinia nec, tempus ut quam. Suspendisse vel massa sed felis vehicula finibus vitae nec augue. Pellentesque vitae rhoncus ipsum. Aenean id tortor magna.`

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