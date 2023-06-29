import { mongooseConnect } from "@/lib/mongoose";
import { Layout } from "@/models/Layout";

export default async function handle(req, res){
    const {method} = req;
    await mongooseConnect()

    if(method === 'POST'){
        const {
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
        res.json(LayoutDoc)
    }
} 