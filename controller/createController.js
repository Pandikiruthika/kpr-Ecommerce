const signin=require("../model/createScheme")
 const bycrpt=require("bcrypt");
const saltRound=10

////////create a new account

exports.register=async(req,res)=>{
    try {
        bycrpt.hash(req.body.data.password,saltRound,(err,hash)=>{
            const signIn=  signin.create({
               name:req.body.data.name,
              email:req.body.data.email,
              password:hash,
              pin:req.body.pin,
              deposit:req.body.data.deposit
            
              })
            .then(
            (result)=>{
               res.send() })
        .catch(
            (err)=>{
            res.send(err)})
    })
    }
        catch (error) {
        res.status(600).send("internet error")
    }
}




