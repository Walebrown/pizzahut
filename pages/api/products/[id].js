import dbConnect from "../../../util/mongo.js"
import Product from "../../../models/Product.js";



export default async function  handler(req, res) {
    dbConnect()
    const {
        method, 
        query:{ id },
    } = req;
   

    if (method === "GET"){
        try {
            const product = await Product.findById(id);
            res.status(200).json(product)
            
        } catch (err) {
            res.status(500).json(err)
            
        }
    }
    if (method === "PUT"){
        try {
            const product = await Product.create(req.body);
                res.status(200).json(product)
            
            
        } catch (err) {
            res.status(500).json(err)
            
        

    }
    
  }
  if (method === "DELETE"){
    try {
        const product = await Product.create(req.body);
            res.status(200).json(product)
        
        
    } catch (err) {
        res.status(500).json(err)
        
    

}

}
}
  