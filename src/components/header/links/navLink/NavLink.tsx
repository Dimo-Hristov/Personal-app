"use client";

import { NavItem } from "@/shared/types/NavItem";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.scss";

interface NavLinkProps {
  item: NavItem;
}

const NavLink: React.FC<NavLinkProps> = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.navlink} ${pathName === item.path
         && styles.active}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
