import Links from "./links/Links"
import styles from './header.module.scss'
import Image from "next/image"


const Header = ()=>{
return(
    <header className={styles.header}>
        <Image src={'/logo.png'} alt="Logo" width={150} height={100}></Image>
    <nav>
        <Links/>
    </nav>
    </header>
)
}

export default Header