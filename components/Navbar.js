import { signOut } from "next-auth/react"
import Link from "next/link"

export default function Navbar(){
    return(
        <div className="flex flex-col py-5 justify-between w-52 min-h-screen">
            <div>
                Logo
            </div>
            <ul className="flex flex-col">
                <li className="p-3 "><Link href={"/"}>Dashboard</Link></li>
                <li className="p-3 "><Link href={"/buscar"}>Buscar</Link></li>
                <li className="p-3 "><Link href={"/buscar"}>Prints prontos</Link></li>
                <li className="p-3 "><Link href={"/layouts"}>Layout</Link></li>
                <li className="p-3 "><Link href={"/buscar"}>Configurações</Link></li>
            </ul>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    )
}