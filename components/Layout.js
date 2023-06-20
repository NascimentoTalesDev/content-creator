import { useSession, signIn } from "next-auth/react"

import Aside from "./Aside";
import Navbar from "./Navbar";

export default function Layout({ children }) {

    const { data: session } = useSession()
    if (!session) {
        return (
            <>
                Not signed in <br />
                <button onClick={() => signIn("google")}>Entrar com Google</button>
                {children}
            </>
        )
    }
    return (
        <div className="flex justify-between">
            <Navbar />
            Bem vindo(a), {session.user.name} <br />
            <Aside />
        </div>
    )

}