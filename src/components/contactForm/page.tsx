"use client";

import styles from "./contactForm.module.scss";

const ContactForm = () => {
  return (
    <article className={styles.contactArticle}>
      <form className={styles.contactForm}>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="text" name="email" id="email" placeholder="Email" />
        <textarea name="Message" id="message" placeholder="Message" />

        <button> Send</button>
      </form>
    </article>
  );
};

export default ContactForm;
