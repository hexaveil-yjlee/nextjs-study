import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return <nav>
        <Link href="/"><a style={{color: router.pathname === "/" ? 'red' : 'blue'}} >home</a></Link>
        <Link href="/about"><a style={{color: router.pathname === "/about" ? 'red' : 'blue'}} >about</a></Link>
    </nav>
}