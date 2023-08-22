import { mongooseConnect } from "@/lib/mongoose";
import { Layout } from "@/models/Layout";

export default async function handle2(req, res){
    const {method} = req;
    await mongooseConnect()

   
} 