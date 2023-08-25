import { signOut } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/router";

export default function Navbar(){
    const inactiveLink = 'p-3';
    const activeLink = inactiveLink+' bg-white';
    const router = useRouter()
    const {pathname} = router
    
    return(
        <div className="flex flex-col py-5 justify-between w-52 min-h-screen">
            <div>
                Logo
            </div>
            <ul className="flex flex-col">
                <Link href={"/"}><li className={pathname === '/' ? activeLink : inactiveLink}>Dashboard</li></Link>
                <Link href={"/search"}><li className={pathname.includes('/search') ? activeLink : inactiveLink}>Buscar</li></Link>
                <Link href={"/finishedPrints"}><li className={pathname === '/finishedPrints' ? activeLink : inactiveLink}>Prints prontos</li></Link>
                <Link href={"/layouts"}><li className={pathname.includes('layouts') ? activeLink : inactiveLink}>Layouts</li></Link>
                <Link href={"/buscar"}><li className={inactiveLink}>Configurações</li></Link>
            </ul>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    )
}
