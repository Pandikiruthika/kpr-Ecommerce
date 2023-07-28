const orders=require("../model/orderSchema");
exports.order=async (req, res) => {
    try {
      console.log(req.body)
      const order= orders.create({
      
        orderId:req.body.orderId,
        name:req.body.name,
     
       })
     .then(
     (result)=>{
        res.send("sucessfully order") })
 .catch(
     (err)=>{
     res.send(err)})
}
    catch (err) {
      res.status(500).json({ message: 'Failed to place the order' });
    }
}






// Fetch order information by name
 exports.orderTracking=async (req, res) => {
  try {
    const orderNumber = req.params.orderNumber;
    const order = await orders.findOne({ orderNumber });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.send(order);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch order information' });
  }
};