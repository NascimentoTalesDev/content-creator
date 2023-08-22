import { mongooseConnect } from "@/lib/mongoose";
import { Layout } from "@/models/Layout";

export default async function handle(req, res){
    const {method} = req;
    await mongooseConnect()

    if(method === "GET"){
        let id = req.params

        console.log(id);

    }

    if(method === "GET"){
        let names = await Layout.find()
        res.json(names)
    }

    if(method === 'POST'){
        const {
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
            marginTopImageContainer
        } = req.body

        const LayoutDoc = await Layout.create({
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
            marginTopImageContainer
        })
        console.log(name);
        res.json(LayoutDoc)
    }
} 