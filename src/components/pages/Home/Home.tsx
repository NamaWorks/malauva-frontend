import './Home.scss'

const Home = () => {
  return (
    <>
    <main id='home'>

      <section className='home-section' id='home-hero'>
        <div id='home-hero-container-img'>
          <img src="/public/assets/img/pictures/Hero-img.png" alt="image of Giussepe, founder of MalaUva" />
        </div>
        <div id='home-hero-container-logo'>
          <img src="/public/assets/img/brand/malauva-logo-up-down.svg" alt="MalaUva logo over Giussepe's picture" />
        </div>
      </section>

      <section className='home-section' id='home-highlight-text'>
        <div className='home-hl-text-container'>
          <h1>Lorem ipsum dolor sit amet consectetur. Et diam tempus ultrices in ultricies amet felis. Vitae et nisi tellu.</h1>
        </div>
      </section>

      <section className='home-section' id='home-drag-menu'></section>

      <section className='home-section' id='home-about-us'>
        <div className='home-about-us-container'>
          <p>Lorem ipsum dolor sit amet consectetur. Amet maecenas consectetur vulputate nibh dignissim sed dolor aliquet tristique. Eu viverra tortor ut dui iaculis quis urna amet. Et a ultrices et laoreet placerat enim massa nunc. Dignissim aliquam mus aliquam aenean faucibus velit.</p>
          <div>
            <img src="/public/assets/img/illustrations/another-one.svg" alt="illustration of pouring wine" />
          </div>
        </div>
        <div className='home-about-us-container'>
          <img src="/public/assets/img/pictures/gondola-ride.png" alt="image of a gondola ride" />
        </div>
      </section>

      <section className='home-section' id='home-top-sellers'>
        <h4>top sellers</h4>
      </section>


    </main>
    </>
  )
}

export default Home