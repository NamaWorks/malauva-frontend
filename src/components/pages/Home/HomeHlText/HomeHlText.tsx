import "./HomeHlText.scss";

const HomeHlText = () => {
  return (
    <>
      <section className="home-section" id="home-highlight-text">
        <div className="home-hl-text-container">
          <h2>
          We’re all
            <span className="home-hl-illustrations">
              <img
                id="home-hl-old-ill"
                src="/assets/img/illustrations/old-man-drinking.svg"
                alt="old man drinking a glass of wine"
              />
            </span>
            about vineyards, the sea, and unhurried conversations. Welcome to MalaUva, your
            <span className="home-hl-illustrations">
              <img
                id="home-hl-flowers-ill"
                src="/assets/img/illustrations/flowers.svg"
                alt="flowers illustration"
              />
            </span>{" "}
            spot where every glass tells a story.
          </h2>
        </div>
      </section>
    </>
  );
};

export default HomeHlText;
