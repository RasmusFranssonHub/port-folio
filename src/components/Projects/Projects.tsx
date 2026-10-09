import "./Projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import offertorImage from "../../assets/pictures/offertor/offertorImage.png";
import backOfficeImage from "../../assets/pictures/back-office/backOfficeImage.png";
import juniperImage from "../../assets/pictures/juniper/juniperImage.png";
import aiSvgLabImage from "../../assets/pictures/ai-svg-lab/aiSvgLabImage.png";
import BookAPIImage from "../../assets/pictures/book-api/BookAPIImage.png";
import GBImage from "../../assets/pictures/gb/GBImage.png";

function Projects() {
  return (
    <section className="projects" id="projects">
      <span className="projects__number">02</span>

      <h2 className="projects__title">PROJEKTEN.</h2>

      {/* Filter */}
      <div className="projects__filter">
        <span>Filter</span>

        <div className="projects__filter-options">
          <button type="button">All</button>
          <button type="button">React</button>
          <button type="button">TypeScript</button>
          <button type="button">JavaScript</button>
          <button type="button">Node.js</button>
          <button type="button">API</button>
          <button type="button">Database</button>
          <button type="button">Design</button>
        </div>

        <button type="button" className="projects__clear">
          Rensa X
        </button>
      </div>

      {/* Projektgrid */}
      <div className="projects__grid">
        <ProjectCard
            number="01"
            title="Offertor"
            image={offertorImage}
            alt="Förhandsvisning av Offertor"
        />

        <ProjectCard
            number="02"
            title="Back-office"
            image={backOfficeImage}
            alt="Förhandsvisning av Back-office"
        />

        <ProjectCard
            number="03"
            title="Juniper"
            image={juniperImage}
            alt="Förhandsvisning av Juniper"
        />
        

        <ProjectCard
            number="04"
            title="AI SVG Lab"
            image={aiSvgLabImage}
            alt="Förhandsvisning av AI SVG Lab"
        />

                <ProjectCard
            number="05"
            title="Book API"
            image={BookAPIImage}
            alt="Förhandsvisning av Book API"
        />

        <ProjectCard
            number="06"
            title="GB"
            image={GBImage}
            alt="Förhandsvisning av GB"
        />
        </div>
    </section>
  );
}

export default Projects;
