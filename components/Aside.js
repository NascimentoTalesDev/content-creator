import { useSession} from "next-auth/react"


export default function Aside(){
    const { data: session } = useSession()

    return(
        <div className="bg-gray-500 right-0 w-40">
            <div>
                <div className="">
                    <img className="w-50 h-50 rounded-full mx-auto my-4" src={session?.user?.image} />
                </div>
                {session?.user?.name}

            </div>
        </div>
    )
}