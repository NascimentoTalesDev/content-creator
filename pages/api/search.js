const buscarItem = require("../../bots/buscarItem")
let items = {};

import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handle(req, res){
    const {method} = req;
    await mongooseConnect()

    if(method === "POST"){
        
        const [nomes] = req.body;
        
        for (let idx = 0; idx < nomes.length; idx++) {
    
            items = await buscarItem(nomes[idx])

            let nomeProduto = items.nomeProduto
            let precoAntigoProduto = items.precoAntigoProduto
            let precoProduto = items.precoProduto
            let imagemProduto = items.imagemProduto
            let codigoProduto = items.codigoProduto

            const ProductDoc = await Product.create({
                nomeProduto,
                precoAntigoProduto,
                precoProduto,
                imagemProduto,
                codigoProduto,
            })
            res.json(ProductDoc)
        }
    }    
    if (method === "GET") {
        
        const itemsList = await Product.find()
        res.json(itemsList)
    }
} 