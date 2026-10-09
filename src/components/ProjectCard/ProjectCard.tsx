import "./ProjectCard.scss";

type ProjectCardProps = {
  number: string;
  title: string;
  image: string;
  alt: string;
};

function ProjectCard({
  number,
  title,
  image,
  alt,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <a
        className="project-card__link"
        href="#"
        aria-label={`Läs mer om ${title}`}
      >
        <div className="project-card__image">
          <img src={image} alt={alt} />
        </div>

        <div className="project-card__info">
          <span className="project-card__number">
            [{number}]
          </span>

          <h3 className="project-card__title">{title}</h3>

          <span className="project-card__arrow" aria-hidden="true">
            ↗
          </span>
        </div>
      </a>
    </article>
  );
}

export default ProjectCard;