import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";

export default function Buscar(){
    const [layouts, setLayouts] = useState('')
    const [layout, setLayout] = useState('')
    const [id, setId] = useState('')

    useEffect(()=>{
        axios.get("./api/layout").then(response =>{
            console.log(response.data);
            setLayouts(response.data);
        })
    }, [])

    async function mudar(ev) {
        ev.preventDefault();
        let data = id
        
        setLayout(layouts[data]);
        console.log(layout);
      
    }
    const LayoutContainer = styled.section`
    height: 450px;
    width: 250px;
    max-height: 100vh;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border: 1px solid ${layout.colorBackground};
    overflow: hidden;
`

    return(
        <Layout>
            <h1>Buscar</h1>
            <div className="flex flex-col w-28">
                <div className="flex flex-col">
                    Escolha o Layout    
                        <form onSubmit={mudar}>
                            <select className="my-0" value={id} onChange={(ev) => setId(ev.target.value)}>
                                        <option value={9999999999}>Nemhum</option>
                                        {layouts.length > 0 && (layouts.map((layout, index) => 
                                            <option value={index}>{layout.name}</option>
                                        ))}
                            </select>
                            <button type="submit">Escolher</button>
                        </form>
                        
                </div>
                <div>
                    <LayoutContainer/>
                </div>
            </div>
            
        </Layout>
    )
}