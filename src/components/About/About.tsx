import "./About.scss";
import datorHome from "../../assets/pictures/Home/dator-home.png";

const personalInfo = [
  {
    label: "PLATS",
    value: "Härnösand",
  },
  {
    label: "UTBILDNING",
    value: "Frontendutvecklare",
  },
  {
    label: "FOKUS",
    value: "Fullstack",
  },
  {
    label: "SPRÅK",
    value: "Svenska, Engelska",
  },
  {
    label: "INTRESSEN",
    value: "Webb, Design, Träning, Musik",
  },
];

function About() {
  return (
    <section id="about" className="about">

      {/* Section number */}
      <span className="about__number">01</span>

        {/* Intro */}
        <div className="about__intro">

        <h2 className="about__title">
            UTVECKLAR
            <br />
            IDÉER TILL
            <br />
            VERKLIGHET.
        </h2>

        <div className="about__intro-text">
            <p className="about-paragraph">
            Jag är en frontendutvecklare som brinner för att skapa moderna,
            användarvänliga och funktionella webbupplevelser.
            </p>

            <p className="about-paragraph">
            Jag gillar att lösa problem, lära mig ny teknik och bygga projekt
            som gör skillnad. Just nu studerar jag webbutveckling och söker
            nya möjligheter där jag kan utvecklas och bidra.
            </p>
        </div>

        <img
            src={datorHome}
            alt="Arbetsplats med dator"
        />

        </div>


      {/* Information */}
      <div className="about__details">

        <div className="about__column">
          <h3>MIN RESA</h3>

          <p>
            Jag har alltid haft ett stort intresse för teknik, 
            design och hur saker fungerar. Under min utbildning 
            har jag fått kombinera det kreativa med det tekniska, 
            och upptäckt hur kul det är att bygga webbapplikationer 
            från idé till verklighet.
 
            Jag trivs i hela utvecklingsprocessen – från planering och 
            design till utveckling och lansering. Mitt mål är att fortsätta utvecklas, 
            ta mig an större projekt och arbeta i team där jag kan bidra med både struktur, 
            engagemang och nya idéer.
          </p>
        </div>

        <div className="about__column">
          <h3>TEKNIKER JAG ARBETAR MED</h3>

          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>REST API</li>
            <li>SQL</li>
            <li>Git</li>
            <li>Figma</li>
          </ul>
        </div>

        <div className="about__column">
          <h3>KORT OM MIG</h3>

          <div className="about__info">
            {personalInfo.map((item) => (
              <div className="about__info-row" key={item.label}>
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;