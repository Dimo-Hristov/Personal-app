import Link from "next/link";
import styles from "./not-found.module.scss";

const NotFound = () => {
  return (
    <section className={styles.errorPage}>
      <h2>not found</h2>
      <Link href={"/"}>Return Home</Link>
    </section>
  );
};

export default NotFound;
