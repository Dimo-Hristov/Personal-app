import styles from "./footer.module.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <p>&copy; DimoSphere 2024. All rights reserved.</p>
        <div className={styles.contacts}>
          <Link
            href={"https://www.linkedin.com/in/dimo-hristov-626398297/" }
            target="_blank"
          >
            <FaLinkedin />
          </Link>

          <Link
            href={"https://github.com/Dimo-Hristov"}
            target="_blank"
          >
          <FaGithub />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
