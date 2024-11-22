const jwt = require("jsonwebtoken");
require("dotenv").config();

function plantJWT(req,res,next){
    const token =  jwt.sign( {_id:req.body._id} , process.env.jwtSecreat ) ;
    if(!req.body?.remember) res.cookie('token',String(token),{  httpOnly: true,secure: false, sameSite: 'lax',});
    else {
        res.cookie('token',String(token),{  httpOnly: true,secure: false,  sameSite: 'lax',maxAge: 100 * 365 * 24 * 60 * 60 * 1000 });
    }
    next();
}

module.exports = plantJWT ;