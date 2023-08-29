import Layout from "@/components/Layout";
import MessageAlert from "@/components/Message";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import useFlashMessage from '../hooks/useFlashMessage'
import Spinner from "../components/Spinner"
import { useRouter } from "next/router";

export default function Layouts() {
    const { setFlashMessage } = useFlashMessage()

    const [name, setName] = useState('')
    const [fontFamily, setFontFamily] = useState('Arial')
    const [colorBackground, setColorBackground] = useState('#CECECE')
    const [backgroundColorImage, setBackgroundColorImage] = useState('#FFFFFF')
    const [backgroundColorLink, setBackgroundColorLink] = useState('#FFFFFF')
    const [backgroundPrecoNovo, setBackgroundPrecoNovo] = useState('#CECECE')
    const [textColorProduct, setTextColorProduct] = useState('#000000')
    const [textColorPrecoAntigo, setTextColorPrecoAntigo] = useState('#000000')
    const [textColorPrecoNovo, setTextColorPrecoNovo] = useState('#000000')
    const [textColorLink, setTextColorLink] = useState('#000000')
    const [textColorAviso, setTextColorAviso] = useState('#000000')
    const [marginTopImageContainer, setMarginTopImageContainer] = useState(10)

    const [isSaving, setIsSaving] = useState(false)
    const [goToSearch, setGoToSearch] = useState(false)

    const router = useRouter()


    const LayoutContainer = styled.section`
        height: 450px;
        width: 250px;
        max-height: 100vh;
        max-width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        background-color: ${colorBackground};
        font-family: ${fontFamily};
        overflow: hidden;
    `
    const CentralContainer = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100%;
        width: 100%;
        top: 0;
    `
    const ImageContainer = styled.div`
        margin-top: ${marginTopImageContainer}%;
        width: 85%;
        border-radius: 5px;
        background-color: ${backgroundColorImage};////////////////////////////////////
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 30px;
        height: 60%;
        position: relative;
    `
    const Image = styled.img`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0.2rem auto 5rem;
        height: 60%;
        min-height: 60%;
    `
    const InfoContainer = styled.div`
        display: block;
        height: 40%;
        margin-top: -4rem;
    `
    const NomeProduto = styled.h2`
        text-align: left;
        font-size: 0.7rem;
        margin-bottom: 1rem;
        font-weight: 500;
        color: ${textColorProduct};

    `
    const PrecosContainer = styled.div`
        display: block;
        margin-top: 4rem;
    `
    const PrecoAntigo = styled.span`
        display: block;
        text-decoration: line-through;
        font-size: 10px;
        left: 0;
        margin-bottom: 3px;
        margin-top: -4rem;
        color: ${textColorPrecoAntigo};
    `
    const PrecoNovo = styled.span`
        font-size: 15px;
        background-color: ${backgroundPrecoNovo};
        padding: 1px;
        border-radius: 2px;
        margin-bottom: 1px;
        font-weight: 900;
        color: ${textColorPrecoNovo};
    `
    const LinkContainer = styled.div`
        background-color: ${backgroundColorLink};
        min-height: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    `
    const Link = styled.span`
        margin-left: 6px;
        font-size: 10px;
        font-weight: 500;
        color: ${textColorLink};
    `
    const MessageContainer = styled.div`
        width: 85%;
    `
    const Message = styled.p`
        text-align: center;
        font-size: 8px;
        font-weight: bold;
        text-transform: uppercase;
        color: ${textColorAviso};
    `

    async function saveLayout(ev) {
        setIsSaving(true)

        let msgText = 'Layout salvo com sucesso! Você será redirecionado para a Busca'
        let msgType = 'success'

        ev.preventDefault()
        const data = {
            name,
            fontFamily, 
            colorBackground, 
            backgroundColorImage, 
            backgroundColorLink, 
            backgroundPrecoNovo, 
            textColorProduct, 
            textColorPrecoAntigo, 
            textColorPrecoNovo, 
            textColorLink, 
            textColorAviso, 
            marginTopImageContainer}
            try {
                await axios.post("/api/layout", data)
            } catch (error) {
                msgText = error.response.data.message
                msgType = 'error'
            }
            setIsSaving(false)
            setFlashMessage(msgText, msgType)
            setInterval(() => {
                
                setGoToSearch(true)
            }, 5000);
    }
    if(goToSearch){
        router.push('/search')
    }

    return (
        <Layout>
            <MessageAlert/>
            <div className="relative flex h-full w-full p-2">
            {isSaving && (
                <div className="flex flex-col absolute h-full w-full z-50 items-center justify-center bg-gray-500">
                    <p className="mb-2">Salvando...</p>
                    <Spinner />
                </div>
            )}
            
            <form onSubmit={saveLayout} className="flex flex-col  gap-2 w-96">
                <h1 className="h1 mb-8">Personalize aqui o seu Layout</h1>    
                <div className="divFlex">
                    <label>Fonte:</label>
                    <select className="ml-2" onChange={(ev) => setFontFamily(ev.target.value)}>
                        <option value={"Arial"}>Arial</option>
                        <option value={"Calibri"}>Calibri</option>
                        <option value={"Cambria"}>Cambria</option>
                        <option value={"Courier"}>Courier</option>
                        <option value={"Franklin"}>Franklin</option>
                        <option value={"Georgia"}>Georgia</option>
                        <option value={"Haettenschweiler"}>Haettenschweiler</option>
                        <option value={"Helvetica"}>Helvetica</option>
                        <option value={"Medium"}>Medium</option>
                        <option value={"monospace"}>Monospace</option>
                        <option value={"sans-serif"}>Sans-serif</option>
                        <option value={"Tahoma"}>Tahoma</option>
                        <option value={"Verdana"}>Verdana</option>
                    </select>
                </div>
                <div className="divFlex">
                    <label>Cor de Fundo:</label>
                    <input className="ml-2" type="color" value={colorBackground} onChange={(ev) => setColorBackground(ev.target.value)} />
                    <input type="color" value={backgroundColorImage} onChange={(ev) => setBackgroundColorImage(ev.target.value)} />
                    <input type="color" value={backgroundPrecoNovo} onChange={(ev) => setBackgroundPrecoNovo(ev.target.value)} />
                    <input type="color" value={backgroundColorLink} onChange={(ev) => setBackgroundColorLink(ev.target.value)} />
                </div>
                <div className="divFlex">
                    <label>Cor do Texto: </label>
                    <input className="ml-2" type="color" value={textColorProduct} onChange={(ev) => setTextColorProduct(ev.target.value)} />
                    <input type="color" value={textColorPrecoAntigo} onChange={(ev) => setTextColorPrecoAntigo(ev.target.value)} />
                    <input type="color" value={textColorPrecoNovo} onChange={(ev) => setTextColorPrecoNovo(ev.target.value)} />
                    <input type="color" value={textColorLink} onChange={(ev) => setTextColorLink(ev.target.value)} />
                    <input type="color" value={textColorAviso} onChange={(ev) => setTextColorAviso(ev.target.value)} />
                </div>                
                <div className="divFlex">
                    <label>Distância do topo: </label>
                    <input className="ml-2" type="range" value={marginTopImageContainer} onChange={(ev) => setMarginTopImageContainer(ev.target.value)} />
                </div>
                <div className="divFlex">
                    <label>Nome:</label>
                    <input className="inputBtn ml-2 pl-1" type="name" value={name} required onChange={(ev) => setName(ev.target.value)} />
                </div>
                <button className="salvar" type="submit">Salvar</button>
            </form>
            <section className="flex h-full flex-wrap justify-center items-center gap-3">

                <div>
                    <LayoutContainer>
                        <CentralContainer>
                            <ImageContainer>
                                <Image alt="imagem" />
                                <InfoContainer>
                                    <NomeProduto>Guarda Roupa Casal Madesa Mônaco 3 Portas de Correr com Espelho - Preto</NomeProduto>
                                    <PrecosContainer>
                                        <PrecoAntigo>R$ 100,00</PrecoAntigo>
                                        <PrecoNovo>R$ 50,00</PrecoNovo>
                                    </PrecosContainer>
                                </InfoContainer>
                            </ImageContainer>
                            <LinkContainer>
                                <Link>LINK: </Link>
                            </LinkContainer>
                            <MessageContainer>
                                <Message>Essa promoção pode esgotar ou aumentar  a qualquer momento</Message>
                            </MessageContainer>
                        </CentralContainer>
                    </LayoutContainer>
                </div>
            </section>
            </div>
            
        </Layout>
    )
}