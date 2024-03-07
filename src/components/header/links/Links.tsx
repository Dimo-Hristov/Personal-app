import { NavItem } from "@/shared/types/NavItem";
import NavLink from "./navLink/NavLink";
import { links } from "@/shared/data/navLink";
import styles from "./links.module.scss";

const Links = () => {
  return (
    <ul role="list" className={styles.navList}>
      {links.map((link: NavItem) => (
        <NavLink item={link} key={link.title}></NavLink>
      ))}
    </ul>
  );
};

export default Links;
