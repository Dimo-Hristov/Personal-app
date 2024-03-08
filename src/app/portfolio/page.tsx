import Image from "next/image";
import styles from "./portfolio.module.scss";
import { projects } from "@/shared/data/projects";
import { Project } from "@/shared/types/Project";
import Link from "next/link";
import { GrTechnology } from "react-icons/gr";

const Portfolio = () => {
  return (
    <section className={styles.portfolioPage}>
      <h1>PORTFOLIO</h1>

      {projects.map((project: Project) => (
        <article key={project.title} className={styles.projectArticle}>
          <div className={styles.contentWrapper}>
            <div className={styles.info}>
              <h3>
                {project.title}
                <span className={styles.projectType}>{project.type}</span>
              </h3>
              <p>{project.description}</p>
            </div>

            <div className={styles.imageInfo}>
              <div className={styles.imageContainer}>
                <Image
                  src={project.imageUrl}
                  alt="race-fantic app"
                  fill
                ></Image>
              </div>
            </div>
          </div>

          <div className={styles.techAndLinks}>
            <div className={styles.technologies}>
              <h4>Tech Stack Overview</h4>
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            <div className={styles.links}>
              <h4>External Links</h4>
              <Link href={project.projectUrl} target="_blank">
                Visit website
              </Link>
              <Link href={project.projectUrl} target="_blank">
                Github Repo
              </Link>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Portfolio;
