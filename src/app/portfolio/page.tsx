import Image from "next/image";
import styles from "./portfolio.module.scss";

const Portfolio = () => {
  return (
    <section className={styles.portfolioPage}>
      <h1>PORTFOLIO</h1>

      <article>
        <div className={styles.info}>
          <h3>Racefanatic App</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea
            aliquam alias impedit possimus, minus temporibus explicabo. Est
            cupiditate qui soluta nihil quasi culpa, eveniet deserunt eos, autem
            fugit voluptatibus!
          </p>
        </div>

        <div className={styles.imageInfo}>
          <div className={styles.imageContainer}>
            <Image src={"/race-app.jpg"} alt="race-fantic app" fill></Image>
          </div>
        </div>
      </article>
      <article>
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
    </section>
  );
};

export default Portfolio;
