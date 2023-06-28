import { signOut } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/router";

export default function Navbar(){
    const inactiveLink = 'p-3';
    const activeLink = inactiveLink+' bg-red-500';
    const router = useRouter()
    const {pathname} = router
    
    function verificar(ev) {
        console.log(ev.target);
        console.log(pathname);
    }
    return(
        <div className="flex flex-col py-5 justify-between w-52 min-h-screen">
            <div>
                Logo
            </div>
            <ul className="flex flex-col">
                <li className={pathname === '/' ? activeLink : inactiveLink}><Link href={"/"}>Dashboard</Link></li>
                <li className={pathname.includes('/buscar') ? activeLink : inactiveLink}><Link href={"/buscar"}>Buscar</Link></li>
                <li className={inactiveLink}><Link href={"/prints"}>Prints prontos</Link></li>
                <li onClick={verificar} className={pathname.includes('layouts') ? activeLink : inactiveLink}><Link href={"/layouts"}>Layouts</Link></li>
                <li className={inactiveLink}><Link href={"/buscar"}>Configurações</Link></li>
            </ul>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    )
}