import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import "./ProjectDetails.scss";

function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return (
      <main className="project-details project-details--not-found">
        <p>Projektet kunde inte hittas.</p>
        <Link to="/#projects">
          Tillbaka till projekten
        </Link>
      </main>
    );
  }

  return (
    <main className="project-details">
      <nav className="project-details__nav">
        <Link to="/#projects">
          ← Tillbaka till projekten
        </Link>

        <span>
          [{project.number}]
        </span>
      </nav>

      <header className="project-details__header">
        <p className="project-details__eyebrow">
          Projekt {project.number}
        </p>

        <h1 className="project-details__title">
          {project.title}
        </h1>

        <p className="project-details__intro">
          {project.description}
        </p>

        <ul className="project-details__technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </header>

      <figure className="project-details__hero">
        <img
          src={project.image}
          alt={project.alt}
        />
      </figure>

      <section className="project-details__section">
        <h2>Om projektet</h2>
        <p>{project.about}</p>
      </section>

      <section className="project-details__section">
        <h2>Min roll</h2>
        <p>{project.role}</p>
      </section>

      <section className="project-details__section">
        <h2>Process och lösning</h2>
        <p>{project.process}</p>
      </section>

      {project.gallery.length > 0 && (
        <section className="project-details__gallery">
          <h2>Fler vyer</h2>

          <div className="project-details__gallery-grid">
            {project.gallery.map((image, index) => (
              <figure key={image.src}>
                <img
                  src={image.src}
                  alt={image.alt}
                />
                <figcaption>
                  Vy {index + 1}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <footer className="project-details__footer">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Besök projektet ↗
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            Visa på GitHub ↗
          </a>
        )}

        <Link to="/#projects">
          Alla projekt ↗
        </Link>
      </footer>
    </main>
  );
}

export default ProjectDetails;
