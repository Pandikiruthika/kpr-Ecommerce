require("dotenv").config()
const express=require("express")
const bodyParser= require("body-parser")
const app=express()
 const db=require("./config/db")
app.use(bodyParser.json())
const router = require("./router/creatRouter")

const router1 = require("./router/orderRouter")
var cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
db


app.use("/",router)
app.use("/api",router1)

app.listen(process.env.PORT,function(req,res){
    console.log(`server start at  ${process.env.PORT}`)
})