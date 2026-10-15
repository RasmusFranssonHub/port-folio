
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import "./ProjectDetails.scss";
import arrowUpRight from "../../assets/icons/Vector-arrow-upp-right.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right 4.svg";
import returnArrow from "../../assets/icons/return-arrow-black.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();

  const projectIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  const project = projects[projectIndex];

  const [selectedImage, setSelectedImage] = useState("");

  const images = project
    ? [
        { src: project.image, alt: project.alt },
        ...project.gallery,
      ]
    : [];

  useEffect(() => {
    setSelectedImage(project?.image ?? "");
  }, [slug, project?.image]);

  if (!project) {
    return (
      <main className="project-details project-details--not-found">
        <p>Projektet kunde inte hittas.</p>
        <Link to="/#projects">← Tillbaka till projekten</Link>
      </main>
    );
  }

  const previousProject =
    projects[projectIndex - 1];

  const nextProject =
    projects[projectIndex + 1];

  return (
    <main className="project-details">
      <nav
        className="project-details__topbar"
        aria-label="Projekt­navigering"
      >
        <div className="project-details__switch">
          {previousProject ? (
            <Link
              to={`/projects/${previousProject.slug}`}
              aria-label="Föregående projekt"
            >
              <img src={arrowLeft} alt="Föregående projekt" />
            </Link>
          ) : (
            <span aria-hidden="true"><img src={arrowLeft} alt="Föregående projekt" /></span>
          )}

          <span>
            Projekt&nbsp; {project.number} / 06
          </span>

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              aria-label="Nästa projekt"
            >
              <img src={arrowRight} alt="Nästa projekt" />
            </Link>
          ) : (
            <span aria-hidden="true"> <img src={arrowRight} alt="Nästa projekt" /></span>
          )}
        </div>
      </nav>

      <div className="project-details__content">
        <Link
          className="project-details__back"
          to="/#projects"
        >
          <span aria-hidden="true"><img src={returnArrow} alt="Tillbaka till startsidan" /></span>
          Tillbaka till startsidan
        </Link>

        <div className="project-details__layout">
          <section className="project-details__info">
            <p className="project-details__number">
              [{project.number}]
            </p>

            <h1 className="project-details__title">
              {project.title}
            </h1>

            <p className="project-details__intro">
              {project.description}
            </p>

            <div className="project-details__meta">
              <div>
                <span className="project-details__label">
                  Roll
                </span>
                <p>{project.role}</p>
              </div>

              <div>
                <span className="project-details__label">
                  Tekniker
                </span>
                <p>{project.technologies.join(", ")}</p>
              </div>

              <div>
                <span className="project-details__label">
                  Typ
                </span>
                <p>{project.type}</p>
              </div>
            </div>

            {project.githubUrl && (
              <a
                className="project-details__github"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GITHUB REPO
                <span aria-hidden="true">
                  <img src={arrowUpRight} alt="Arrow to GITHUB" />
                </span>
              </a>
            )}
          </section>

          <section
            className="project-details__visuals"
            aria-label="Projektbilder"
          >
            <figure className="project-details__hero">
              <img
                src={selectedImage || project.image}
                alt={
                  images.find(
                    (image) => image.src === selectedImage
                  )?.alt ?? project.alt
                }
              />
            </figure>
          </section>
            
        <section
          className="project-details__gallery-section"
          aria-label="Projektbilder"
        >
          {images.length > 1 && (
            <Swiper
              className="project-details__gallery-swiper"
              slidesPerView={3}
              spaceBetween={8}
              grabCursor
              watchOverflow
              breakpoints={{
                0: {
                  slidesPerView: 3,
                  spaceBetween: 8,
                },
                901: {
                  slidesPerView: "auto",
                  spaceBetween: 8,
                },
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={`${image.src}-${index}`}>
                  <button
                    className={`project-details__thumbnail ${
                      selectedImage === image.src
                        ? "project-details__thumbnail--active"
                        : ""
                    }`}
                    type="button"
                    onClick={() => setSelectedImage(image.src)}
                    aria-label={`Visa projektbild ${index + 1}`}
                    aria-pressed={selectedImage === image.src}
                  >
                    <img src={image.src} alt="" />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </section>

        </div>
        

      </div>
    </main>
  );
}

export default ProjectDetails;

