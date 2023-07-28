const mongoose =require("mongoose");
const orderSchema =new mongoose.Schema({
    orderId:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    }
    
    
    
   

})
module.exports=mongoose.model("orders",orderSchema)