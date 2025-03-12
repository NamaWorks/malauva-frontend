import './HomeHero.scss'

const HomeHero = () => {
  return (
    <>
      <section className="home-section" id="home-hero">
        <div id="home-hero-container-img">
          <img
            src="/assets/img/pictures/Hero-img.webp"
            alt="image of Giussepe, founder of MalaUva"
          />
        </div>
        <div id="home-hero-container-logo">
          <img
            src="/assets/img/brand/malauva-logo-up-down.svg"
            alt="MalaUva logo over Giussepe's picture"
          />
        </div>
      </section>
    </>
  );
};

export default HomeHero;
