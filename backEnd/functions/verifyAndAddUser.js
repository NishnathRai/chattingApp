
const jwt = require("jsonwebtoken");
const userModel = require("../schemas/userSchema.js");
async function verifyAndAddUser(req,res,next){
    const token = req.cookies?.token;
    if( token==null || token==undefined ){
         res.status(401).send();
         return;
    }
    let decoded =  jwt.verify( token , process.env._JWTSECREAT );
    decoded = await userModel.findById(decoded._id).lean();
    if(decoded==null) {
        res.status(401).send();
        return;
    }
    req.body.user = decoded ; 
    next();
}

module.exports = verifyAndAddUser;