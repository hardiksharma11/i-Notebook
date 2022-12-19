const jwt = require('jsonwebtoken');
const jwt_secret = "heheboi";

const fetchuser=(req,res,next)=>{
    //Get the user from the jwt token and add id to req object
    const token= req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Authenticate using valid token"});
    }
    try {
        const data= jwt.verify(token,jwt_secret);
        req.user=data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"Authenticate using valid token"});
        // console.log(error);
    }
}

module.exports=fetchuser;