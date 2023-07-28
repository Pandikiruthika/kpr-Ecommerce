// const { create } = require("../model/createScheme")
const createController=require("../controller/createController");

const loginController=require("../controller/loginController");

const express=require("express")


const router=express.Router()
router.post("/signin",createController.register)

router.get("/login/:id",loginController.loginpage)
router.post("/login",loginController.loginpage)



module.exports=router