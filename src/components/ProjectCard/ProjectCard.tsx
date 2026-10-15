import "./ProjectCard.scss";
import { Link } from "react-router-dom";
import arrowUpRight from "../../assets/icons/Vector-arrow-upp-right.svg";
import arrowUpRightBlack from "../../assets/icons/arrowUpRightBlack.svg";


type ProjectCardProps = {
  slug: string;
  number: string;
  title: string;
  image: string;
  alt: string;
};

function ProjectCard({
  slug,
  number,
  title,
  image,
  alt,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <Link
        className="project-card__link"
        to={`/projects/${slug}`}
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

          <img src={arrowUpRightBlack} alt="Arrow to project" className="project-card__arrow" />
        </div>
      </Link>
    </article>
  );
}

export default ProjectCard;