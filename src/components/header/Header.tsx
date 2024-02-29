import Links from "./links/Links"
import styles from './header.module.scss'
import Image from "next/image"


const Header = ()=>{
return(
    <header className={styles.header}>
        <div className={styles.imgContainer}>
        <Image src={'/logo.png'} alt="Logo" fill/>
        </div>
    <nav>
        <Links/>
    </nav>
    </header>
)
}

export default Header