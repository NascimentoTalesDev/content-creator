import { signOut } from "next-auth/react"

export default function Navbar(){
    return(
        <div className="flex flex-col py-5 justify-between bg-gray-500 w-52 min-h-screen">
            <div>
                Logo
            </div>
            <ul className="flex flex-col">
                <li className="p-3 "><a href="/">Dashboard</a></li>
                <li className="p-3 "><a href="/busca">Buscar</a></li>
                <li className="p-3 "><a href="">Link</a></li>
                <li className="p-3 "><a href="">Link</a></li>
                <li className="p-3 "><a href="">Configuracões</a></li>
            </ul>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    )
}