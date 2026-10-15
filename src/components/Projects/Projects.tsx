import "./Projects.scss";
import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";


  function Projects() {

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const availableTags = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  ).sort();

  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) =>
          selectedTags.every((tag) =>
            project.technologies.includes(tag)
          )
        );

  const toggleTag = (tag: string) => {
    setSelectedTags((previous) =>
      previous.includes(tag)
        ? previous.filter((item) => item !== tag)
        : [...previous, tag]
    );
  };

  return (
    <section className="projects" id="projects">
      <span className="projects__number">02</span>

      <h2 className="projects__title">PROJEKTEN.</h2>



      <div className="projects__filter">
      <span>Filter</span>

      <div className="projects__filter-options">
        <button
          type="button"
          className={selectedTags.length === 0 ? "is-active" : ""}
          onClick={() => setSelectedTags([])}
          aria-pressed={selectedTags.length === 0}
        >
          ALLA
        </button>

        {availableTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={selectedTags.includes(tag) ? "is-active" : ""}
            onClick={() => toggleTag(tag)}
            aria-pressed={selectedTags.includes(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {selectedTags.length > 0 && (
        <button
          type="button"
          className="projects__clear"
          onClick={() => setSelectedTags([])}
        >
          Rensa ×
        </button>
      )}
    </div>



      {/* Projektgrid */}
        <div className="projects__grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            number={project.number}
            title={project.title}
            slug={project.slug}
            image={project.image}
            alt={project.alt}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
