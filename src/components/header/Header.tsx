import Links from "./links/Links"
import styles from './header.module.scss'
import Image from "next/image"
import Link from "next/link"


const Header = ()=>{
return(
    <header className={styles.header}>
        <Link href={'/'} className={styles.imgContainer}>
        <Image src={'/logo.png'} alt="Logo" fill/>
        </Link>
    <nav className={styles.navbar}>
        <Links/>
    </nav>
    </header>
)
}

export default Header