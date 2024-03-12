"use client";

import { useState } from "react";
import styles from "./contactForm.module.scss";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID!
    );
  };

  return (
    <article className={styles.contactArticle}>
      <form className={styles.contactForm} onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit"> Send</button>
      </form>
    </article>
  );
};

export default ContactForm;
