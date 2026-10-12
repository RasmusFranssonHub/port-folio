import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <span className="hero__role">
        Fullstack Developer
      </span>

      <span className="hero__number">
        00
      </span>


      <h1 className="hero__title">
        PORT<span className="hero_hyphen">-</span>
        <br />
        FOLIO
      </h1>
    </section>
  );
}

export default Hero;