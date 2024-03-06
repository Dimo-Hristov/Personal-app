import Image from "next/image";
import styles from "./about.module.scss";
import SeparationLine from "@/components/separationLine/page";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutMe}>
        <div className={styles.imageWrapper}>
          <div className={styles.border}>
            <div className={styles.filler}></div>
          </div>
          <Image src={"/profile-pic.jpg"} alt="Logo" fill />
        </div>

        <article className={styles.info}>
          <h1>ABOUT ME</h1>
          <p>
            Hey there! I&apos;m Dimo Hristov, a full-stack developer with a
            flair for crafting captivating front-end experiences and robust
            back-end solutions. While I thrive on the creativity and innovation
            of front-end development using latest technologies, I&apos;m equally
            passionate about the intricacies of back-end architecture.
          </p>

          <p>
            From designing elegant user interfaces to architecting resilient
            back-end systems, I bring a holistic approach to every project,
            blending creativity with technical expertise to deliver solutions
            that exceed expectations. With a keen eye for detail and a
            commitment to excellence, I&apos;m always eager to tackle new
            challenges and push the boundaries of what&apos;s possible in web
            development.
          </p>

          <p>Let&apos;s collaborate and turn your ideas into reality!</p>
        </article>
      </div>

      <div className={styles.education}>
        <div className={styles.leftAnimation}>
          <SeparationLine />
        </div>

        <h3>Education</h3>
        <article>
          <div className={styles.filler}>
            <h4>Hight school diploma</h4>
            <SeparationLine />
            <p>4th EPAL of Athens, Greece</p>
            <p>Computer science - 3 Years</p>
          </div>
        </article>

        <article>
          <div className={styles.filler}>
            <h4>Javascript development</h4>
            <SeparationLine />
            <p>SoftUni Sofia, Bulgaria</p>
            <p>
              Javascript path, from basics to the latest technologies - 2 Years
            </p>
          </div>
        </article>

        <article>
          <div className={styles.filler}>
            <h4>Self improvement</h4>
            <SeparationLine />
            <p>Reading documentations and practice on daily basis.</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
