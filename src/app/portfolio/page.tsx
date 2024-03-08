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
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>

          <div className={styles.imageInfo}>
            <div className={styles.imageContainer}>
              <Image src={project.imageUrl} alt="race-fantic app" fill></Image>
            </div>
          </div>
        </article>
      ))}

      {/* <article>
        <div className={styles.info}>
          <h3>Racefanatic Admin Panel</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea
            aliquam alias impedit possimus, minus temporibus explicabo. Est
            cupiditate qui soluta nihil quasi culpa, eveniet deserunt eos, autem
            fugit voluptatibus!
          </p>
        </div>

        <div className={styles.imageInfo}>
          <div className={styles.imageContainer}>
            <Image src={"/admin-panel.png"} alt="race-fantic app" fill></Image>
          </div>
        </div>
      </article>
      <article>
        <div className={styles.info}>
          <h3>Apartment Bella</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea
            aliquam alias impedit possimus, minus temporibus explicabo. Est
            cupiditate qui soluta nihil quasi culpa, eveniet deserunt eos, autem
            fugit voluptatibus!
          </p>
        </div>

        <div className={styles.imageInfo}>
          <div className={styles.imageContainer}>
            <Image
              src={"/bela-apartment.png"}
              alt="race-fantic app"
              fill
            ></Image>
          </div>
        </div>
      </article>
      <article>
        <div className={styles.info}>
          <h3>Travel Forum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea
            aliquam alias impedit possimus, minus temporibus explicabo. Est
            cupiditate qui soluta nihil quasi culpa, eveniet deserunt eos, autem
            fugit voluptatibus!
          </p>
        </div>

        <div className={styles.imageInfo}>
          <div className={styles.imageContainer}>
            <Image src={"/travel-forum.png"} alt="race-fantic app" fill></Image>
          </div>
        </div>
      </article>
      <article>
        <div className={styles.info}>
          <h3>Auto Explorer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea
            aliquam alias impedit possimus, minus temporibus explicabo. Est
            cupiditate qui soluta nihil quasi culpa, eveniet deserunt eos, autem
            fugit voluptatibus!
          </p>
        </div>

        <div className={styles.imageInfo}>
          <div className={styles.imageContainer}>
            <Image
              src={"/auto-explorer.png"}
              alt="race-fantic app"
              fill
            ></Image>
          </div>
        </div>
      </article> */}
    </section>
  );
};

export default Portfolio;
