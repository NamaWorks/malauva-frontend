import BodyCopy from '../../../elements/texts/BodyCopy/BodyCopy'
import './HomeAboutUs.scss'


const HomeAboutUs = () => {
  return (
    <>
    <section className='home-section' id='home-about-us'>
    <div className='home-about-us-container'>
      <BodyCopy 
        text={"At Malauva, we offer more than just wine—we invite you to uncover stories in every glass, explore unique flavors, and savor the charm of our curated selection. From timeless classics to delightful discoveries, you'll find the perfect choice for every toast. Because great wine is meant to be shared!"}
        kind='highlight'
        color='dark'
      />
      <div id='home-about-us-illustration'>
        <img src="/assets/img/illustrations/another-one.svg" alt="illustration of pouring wine" />
      </div>
    </div>
    <div className='home-about-us-container'>
      <img src="/assets/img/pictures/gondola-ride.png" alt="image of a gondola ride" />
    </div>
  </section>
  </>
  )
}

export default HomeAboutUs