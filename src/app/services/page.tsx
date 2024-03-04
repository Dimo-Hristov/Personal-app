import styles from "./services.module.scss";
import {
  MdOutlineScreenshotMonitor,
  MdOutlineDesignServices,
} from "react-icons/md";
import { FaMobileAlt, FaDesktop } from "react-icons/fa";

const Services = () => {
  return (
    <section className={styles.services}>
      <h1>SERVICES</h1>

      <ul className={styles.servicesList} role="list">
        <li className={styles.first}>
          <article>
            <div className={styles.titleIconContainer}>
              <div className={styles.iconContainer}>
                <MdOutlineScreenshotMonitor />
              </div>
              <h2>RESPONSIVE APP DEVELOPMENT</h2>
            </div>
            <p>
              Responsive web apps adapt seamlessly to different devices,
              providing optimal user experiences. They ensure consistent
              functionality and usability across smartphones, tablets, and
              desktops.
            </p>
          </article>
        </li>
        <li className={styles.second}>
          <article>
            <div className={styles.titleIconContainer}>
              <div className={styles.iconContainer}>
                <FaDesktop />
              </div>
              <h2>DESKTOP APP DEVELOPMENT</h2>
            </div>
            <p>
              Desktop applications offer powerful functionality tailored for
              desktop environments, providing robust features and seamless
              integration with operating systems for enhanced user experiences.
            </p>
          </article>
        </li>
        <li className={styles.third}>
          <article>
            <div className={styles.titleIconContainer}>
              <div className={styles.iconContainer}>
                <FaMobileAlt />
              </div>
              <h2>MOBILE APP DEVELOPMENT</h2>
            </div>
            <p>
              Mobile applications deliver convenience and accessibility,
              optimized for small screens and touch interactions, ensuring users
              can access information and services on the go.
            </p>
          </article>
        </li>
        <li className={styles.fourth}>
          <article>
            <div className={styles.titleIconContainer}>
              <div className={styles.iconContainer}>
                <MdOutlineDesignServices />
              </div>
              <h2>DESIGN, UI AND UX DEVELOPMENT</h2>
            </div>

            <p>
              Crafting visually appealing interfaces and seamless user
              experiences through a blend of creativity and functionality to
              captivate users and enhance brand engagement.
            </p>
          </article>
        </li>
      </ul>
    </section>
  );
};

export default Services;
