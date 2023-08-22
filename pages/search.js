import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Buscar(){
    const [layouts, setLayouts] = useState('')
    const [layout, setLayout] = useState('')

    useEffect(()=>{
        axios.get("./api/layout").then(response =>{
            console.log(response.data);
            setLayouts(response.data);
        })
    }, [])

    function mudar(ev) {
        let data = ev._id

        console.log(data);
    }

    return(
        <Layout>
            <h1>Buscar</h1>
            <div className="flex flex-col w-28">
                <div className="flex flex-col">
                    Escolha o Layout
                    <select className="my-0" onChange={(ev) => mudar(ev.target.value)}>
                                <option value={0}>Nemhum</option>
                                    {layouts.length > 0 && (layouts.map(layout => 
                                <option value={layout._id}>{layout.name}</option>
                            ))}
                    </select>
                </div>
                <div>
                    Layout
                </div>
            </div>
            
        </Layout>
    )
}