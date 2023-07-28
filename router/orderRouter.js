const orderController=require("../controller/orderController");
const express=require("express")


const router1=express.Router()
router1.post("/orders",orderController.order);
router1.get('/orders/:orderNumber',orderController.orderTracking)
module.exports=router1