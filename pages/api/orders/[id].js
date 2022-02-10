import dbConnect from "../../../util/mongo.js"
import Order from "../../../models/Order.js";

 dbConnect();

const handler = async (req, res) => {
    const {method, query :{id}} = req;

    if (method === "GET"){
      try {
        const order = await Order.findById(id);
        res.status(201).json(order);
        
      } catch (err) {
        res.status(500).json(err)
        
      }
    }
    if (method === "PUT"){}
  if (method === "DELETE"){}
}
export default handler;
  