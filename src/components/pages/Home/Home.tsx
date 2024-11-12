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
          <p>Lorem ipsum dolor sit amet consectetur. Et diam tempus ultrices in ultricies amet felis. Vitae et nisi tellu.</p>
        </div>
      </section>

      <section className='home-section' id='home-drag-menu'></section>
    </main>
    </>
  )
}

export default Home