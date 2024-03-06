import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <section className={styles.loaderSection}>
      <div className={styles.loader}></div>
    </section>
  );
};

export default Loading;
