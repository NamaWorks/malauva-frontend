import './HomeHero.scss'
import React from "react";

const HomeHero = () => {
  return (
    <>
      <section className="home-section" id="home-hero">
        <div id="home-hero-container-img">
          <img
            src="/public/assets/img/pictures/Hero-img.png"
            alt="image of Giussepe, founder of MalaUva"
          />
        </div>
        <div id="home-hero-container-logo">
          <img
            src="/public/assets/img/brand/malauva-logo-up-down.svg"
            alt="MalaUva logo over Giussepe's picture"
          />
        </div>
      </section>
    </>
  );
};

export default HomeHero;
