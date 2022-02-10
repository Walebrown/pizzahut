import dbConnect from "../../../util/mongo.js"
import Product from "../../../models/Product.js";


export default async function  handler(req, res) {

    const {method} = req;

     dbConnect()

    if (method === "GET"){
        try {
            const products = await Product.find();
            res.status(200).json(products)
            console.log(products)
            
        } catch (err) {
            res.status(501).json(err)
            
        }
    }
    if (method === "POST"){
        try {
            const product = await Product.create(req.body);
                res.status(200).json(product)
            
            
        } catch (err) {
            res.status(500).json(err)
            
        

    }
    
  }
}
  