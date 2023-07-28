const signin=require("../model/createScheme")
 const bycrpt=require("bcrypt");
const saltRound=10
exports.loginpage=async(req,res)=>{
    try {
        // console.log(req.body)
        var email=req.body.data.email;
              var password=req.body.data.password;
              
            var detail=signin.findOne({email:email})
        .then((User)=>{
                    bycrpt.compare(password,User.password,(err,result)=>{
                           console.log(User.password)
                           console.log(password)
                        if(result==true){
                                 res.send(`Welcome!`)
                                // console.log(result)
                            }

                           
                            else {
                                res.send("Invalid password.");
                                          }
                })
                    }
                )
                .catch(
                    (err)=>{
                        res.send("user not found")
                    }
                )
       
       
    } catch (error) {
        res.send("Error while processing login.");
        
    }
  }