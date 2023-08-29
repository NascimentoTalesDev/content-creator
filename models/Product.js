import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    nomeProduto: {type: String, required: true},
    precoAntigoProduto: {type: String},
    precoProduto: {type: String, required: true},
    imagemProduto: {type: String, required: true},
    codigoProduto: {type: String, required: true},
});

export const Product = models.Product || model('Product', ProductSchema);