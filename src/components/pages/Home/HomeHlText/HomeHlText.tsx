import "./HomeHlText.scss";
import React from "react";

const HomeHlText = () => {
  return (
    <>
      <section className="home-section" id="home-highlight-text">
        <div className="home-hl-text-container">
          <h2>
            Lorem ipsum dolor
            <span className="home-hl-illustrations">
              <img
                id="home-hl-old-ill"
                src="/public/assets/img/illustrations/old-man-drinking.svg"
                alt="old man drinking a glass of wine"
              />
            </span>
            sit amet consectetur. Et diam
            <span className="home-hl-illustrations">
              <img
                id="home-hl-flowers-ill"
                src="/public/assets/img/illustrations/flowers.svg"
                alt="flowers illustration"
              />
            </span>{" "}
            tempus ultrices in ultricies amet felis. Vitae et nisi tellu.
          </h2>
        </div>
      </section>
    </>
  );
};

export default HomeHlText;
