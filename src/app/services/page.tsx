import styles from "./services.module.scss";
import {
  MdOutlineScreenshotMonitor,
  MdOutlineDesignServices,
} from "react-icons/md";
import { FaMobileAlt, FaDesktop } from "react-icons/fa";

const services = () => {
  return (
    <section className={styles.services}>
      <h1>SERVICES</h1>

      <ul className={styles.servicesList} role="list">
        <li>
          <article>
            <div className={styles.titleIconContainer}>
            <div className={styles.iconContainer}>
              <MdOutlineScreenshotMonitor />
              </div>
              <h2>RESPONSIVE APP DEVELOPMENT</h2>

            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque in quae impedit cum voluptate quaerat dignissimos, qui culpa voluptatem molestias sapiente ut,.</p>
          </article>
        </li>
        <li>
          <article>
          <div className={styles.titleIconContainer}>
          <div className={styles.iconContainer}>
              <FaDesktop />
            </div>
            <h2>DESKTOP APP DEVELOPMENT</h2>
          </div>
           
          </article>
        </li>
        <li>
          <article>
          <div className={styles.titleIconContainer}>
          <div className={styles.iconContainer}>
              <FaMobileAlt />
            </div>
            <h2>MOBILE APP DEVELOPMENT</h2>
          </div>
      
          </article>
        </li>
        <li>
          <article>
          <div className={styles.titleIconContainer}>
          <div className={styles.iconContainer}>
              <MdOutlineDesignServices />
            </div>
            <h2>DESIGN, UI AND UX DEVELOPMENT</h2>
          </div>

          </article>
        </li>
      </ul>
    </section>
  );
};

export default services;
