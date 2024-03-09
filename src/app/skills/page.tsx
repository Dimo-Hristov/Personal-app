import styles from "./skills.module.scss";
import { FaHtml5, FaAngular, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiNextdotjs,
  SiHandlebarsdotjs,
  SiExpress,
  SiMongoose,
  SiMongodb,
} from "react-icons/si";
import { IoLogoIonic } from "react-icons/io";

const skills = () => {
  return (
    <section className={styles.skillsSection}>
      <h1>SKILLS</h1>
      <article className={styles.firstArticle}>
        <div className={styles.filler}>
          <h2>Front-end</h2>
          <div className={styles.iconsContainer}>
            <div className="html">
              <FaHtml5 />
              <h3>HTML5</h3>
            </div>

            <div className="css">
              <IoLogoCss3 />
              <h3>CSS3</h3>
            </div>

            <div className="js">
              <IoLogoJavascript />
              <h3>Javascript</h3>
            </div>

            <div className="ts">
              <SiTypescript />
              <h3>Typescript</h3>
            </div>

            <div className="ang">
              <FaAngular />
              <h3>Angular</h3>
            </div>

            <div className="react">
              <FaReact />
              <h3>React.JS</h3>
            </div>

            <div className="next">
              <SiNextdotjs />
              <h3>Next.JS</h3>
            </div>

            <div className="ion">
              <IoLogoIonic />
              <h3>Ionic</h3>
            </div>

            <div className="hnd">
              <SiHandlebarsdotjs />
              <h3>Handlebars</h3>
            </div>
          </div>
        </div>
      </article>

      <article className={styles.secondArticle}>
        <div className={styles.filler}>
          <h2>Back-end</h2>
          <div className={styles.iconsContainer}>
            <div className="node">
              <FaNodeJs />
              <h3>Node.JS</h3>
            </div>

            <div className="ex">
              <SiExpress />
              <h3>Express.js</h3>
            </div>

            <div className="mng">
              <SiMongoose />
              <h3>Mongoose</h3>
            </div>
          </div>
        </div>
      </article>

      <article className={styles.thirdArticle}>
        <div className={styles.filler}>
          <h2>DataBase</h2>
          <div className={styles.iconsContainer}>
            <div className="db">
              <SiMongodb />
              <h3>Mongo DB</h3>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default skills;
