"use client";

import Links from "./links/Links";
import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></div>
      )}

      <header
        className={styles.header}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Link href={"/"} className={styles.imgContainer}>
          <Image src={"/logo.png"} alt="Logo" fill />
        </Link>
        <nav
          className={`${styles.navbar} ${
            isMenuOpen ? styles.navOpen : styles.navClosed
          }`}
        >
          <Links />
        </nav>
        <div
          className={`${styles.hamburger} ${
            isMenuOpen ? styles.hamOpen : styles.hamClosed
          }`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </>
  );
};

export default Header;
