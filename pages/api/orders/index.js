import dbConnect from "../../../util/mongo.js"
import Order from "../../../models/Order.js";

// export const config = {
//     api : {
//         externalResolver: true,
//     },
// }

dbConnect();
export default async function handler(req, res){
    const {method} = req;

  

    if(method === "GET"){
        try {
            const orders  = await Order.find();
            res.status(200).json(orders);
            
            
        } catch (err) {
            res.status(500).json(err)
            
        }
    }
    if (method === "POST"){
        const order = req.body;
        const newOrder = Order(order)
        try {

            await newOrder.save();
            res.status(201).json(newOrder)
            // const order = await Order.create(req.body)
            // res.status(200).json(order)
            
        } catch (err) {
            res.status(500).json(err);
            
        }
    }
    
    

};

