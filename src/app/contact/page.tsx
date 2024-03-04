import styles from "./contact.module.scss";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Link from "next/link";
import ContactForm from "@/components/contactForm/page";

const Contact = () => {
  return (
    <section className={styles.contactPage}>
      <h1>CONTACT</h1>

      <div className={styles.infoWrapper}>
        <section className={styles.infoSection}>
          <h3>Send me a message</h3>
          <p className={styles.description}>
            Get in touch! Whether you have questions about my projects, want to
            discuss technologies, or just want to connect, I am here and ready
            to chat.
          </p>

          <div className={styles.contactsWrapper}>
            <div>
              <Link href="tel:1234567890" className={styles.contactLink}>
                <IoCallOutline />
              </Link>
              <p>+359 89 733 5537</p>
            </div>

            <div>
              <Link
                href="mailto:dimo_xristov@protonmail.com"
                className={styles.contactLink}
              >
                <MdOutlineMarkEmailRead />
              </Link>

              <p> dimo_xristov@protonmail.com</p>
            </div>

            <div>
              <Link
                href="https://www.google.com/maps/place/Sofia/@42.6955288,23.2415468,12z/data=!3m1!4b1!4m6!3m5!1s0x40aa8682cb317bf5:0x400a01269bf5e60!8m2!3d42.6977082!4d23.3218675!16zL20vMGZ0ang?entry=ttu"
                target="_blank"
                className={styles.contactLink}
              >
                <IoLocationOutline />
              </Link>
              <p>Sofia, Bulgaria</p>
            </div>
          </div>
        </section>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
