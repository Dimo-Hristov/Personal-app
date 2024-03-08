import Image from "next/image";
import styles from "./portfolio.module.scss";
import { projects } from "@/shared/data/projects";
import { Project } from "@/shared/types/Project";

const Portfolio = () => {
  return (
    <section className={styles.portfolioPage}>
      <h1>PORTFOLIO</h1>

      {projects.map((project: Project) => (
        <article key={project.title}>
          <div className={styles.info}>
            <h3>
              {project.title}
              <span className={styles.projectType}>{project.type}</span>
            </h3>
            <p>{project.description}</p>
            <div className={styles.technologies}>
              <h4>Tech Stack Overview</h4>
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            <div className={styles.technologies}>
              <div className={styles.ts}></div>
            </div>
          </div>

          <div className={styles.imageInfo}>
            <div className={styles.imageContainer}>
              <Image src={project.imageUrl} alt="race-fantic app" fill></Image>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Portfolio;
