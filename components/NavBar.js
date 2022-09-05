import Link from "next/link";
import { useRouter } from "next/router";
import styles from './NavBar.module.css'
export default function NavBar() {
    const router = useRouter();
    return <nav>
        <Link href="/"><a className={router.pathname === "/" ? styles.active : ''}>home</a></Link>
        <Link href="/about"><a className={router.pathname === "/about" ? styles.active : ''}>about</a></Link>
    </nav>
}