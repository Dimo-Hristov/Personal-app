"use client";

import styles from "./contactForm.module.scss";

const ContactForm = () => {
  return (
    <section className={styles.contactSection}>
      <form className={styles.contactForm}>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="text" name="email" id="email" placeholder="Email" />
        <textarea name="Message" id="message" placeholder="Message" />

        <button> Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
