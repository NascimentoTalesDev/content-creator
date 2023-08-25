import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function FinishedPrints(){
    const [items, setItems] = useState('')

    useEffect(() => {
        axios.get("/api/search").then(response => {
            console.log(response.data);
            setItems(response.data)
        })
    },[])
    
    return(
        <Layout>
            {items.length > 0 && (items.map(item =>
                <p>{item.nomeProduto}</p>
            ))}
        </Layout>
    )
}