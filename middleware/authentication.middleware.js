const jwt= require("jsonwebtoken")

const auth= (req,res,next)=>{

    const token=req.headers.authorization

    if(token){
        jwt.verify(token,"mock12",(err,decoded)=>{
            if(decoded){
                console.log(decoded)
                next()
            }
            else{
                res.send({"msg": "please Login"})
            }
        })
    }
    else{
        res.send({"msg": "please Login"})
    }
}

module.exports={auth}