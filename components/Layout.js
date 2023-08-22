import { useSession, signIn } from "next-auth/react"
import styled from "styled-components";


//Components
import Navbar from "./Navbar";

const DivLeft = styled.div`
    background: url("https://st4.depositphotos.com/1002927/27381/i/450/depositphotos_273811044-stock-photo-robot-hand-gear-wheel.jpg");
    background-repeat: repeat-y;
    left: 0;
    height: 100%;
    width: 100%;
`
const Label = styled.label`
    font-size: 15px;
    margin-bottom: 5px;
`

const Input = styled.input`
    padding: 1px;
    margin-bottom: 5px;
    border: 1px solid transparent;
    outline: none;
    &:focus{
        border: 1px solid gray;
    }
`
const ButtonLogin = styled.input`
    border: 1px solid gray;
    padding: 2px;
    margin: 15px 0;
    cursor: pointer;
    &:hover{
        background-color: #5EEAD4;
    }
    
`

export default function Layout({ children }) {

    const { data: session } = useSession()
    if (!session) {
        return (
            <div className="flex justify-center items-center bg-teal-300 h-screen">

                <div className="flex w-11/12 max-w-4xl h-5/6 rounded-md overflow-hidden">

                    <div className="h-full w-2/3">
                        <DivLeft className="flex items-center justify-center">
                            <span className="text-black font-bold bg-white p-2 text-center">
                                Insira o CÓDIGO do produto e tenha o pôster na palma da mão!
                            </span>
                        </DivLeft>
                    </div>

                    <div className="flex flex-1 flex-col pt-5 p-8 bg-zinc-200">
                        <div className="text-right text-sm">
                            <span>
                                Ainda não tem conta? <b><a href="#" >Criar conta</a></b> 
                            </span>
                        </div>
                        <div className="mt-16">
                            <span className="text-black font-semibold text-3xl">Login</span>
                            <form onSubmit={(ev) => ev.preventDefault()} className="flex flex-col w-80 mt-5">
                                <Label>Nome:</Label>
                                <Input />
                                <Label>Senha:</Label>
                                <Input />
                                <ButtonLogin type="submit" value="Login"/>
                            </form>
                        </div>
                        <div>
                            <span>Ou</span>
                            <h2 className="text-sm mt-2 mb-5">Faça login com:</h2>
                            <button onClick={() => signIn("google")}><img className="w-24" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"></img></button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
    return (
        <div className="flex min-h-screen overflow-hidden bg-teal-300">
            <div className="min-w-40">
                <Navbar />
            </div>
            <div className="bg-white flex-grow max-h-screen p-3 rounded-md my-1 mr-1 overflow-y-scroll">
                {children}
            </div>
        </div>
    )

}