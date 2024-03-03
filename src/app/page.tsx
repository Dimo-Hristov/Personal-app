import { Pacifico} from "next/font/google";
import styles from "./page.module.scss";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400"
})


export default function Home() {

  return (
    <section className={styles.homepage}>
      <p className={styles.text1}>I&#39;m</p>
        <h1 className={styles.text2}>Dimo Hristov</h1>
        <p className={styles.text3}>Full Stack Developer</p>
        <p className={`${pacifico.className} ${styles.text4}`}>Code With Passion</p>
    </section>
  );
}
