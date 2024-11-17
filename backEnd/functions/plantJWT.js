const jwt = require("jsonwebtoken");

function plantJWT(req,res,next){
    const token =  jwt.sign( {_id:req.body._id} ,"Nishnath" ) ;
    if(!req.body?.remember) res.cookie('token',String(token),{ secure: false, sameSite: 'lax',});
    else {
        res.cookie('token',String(token),{ secure: false,  sameSite: 'lax',maxAge: 100 * 365 * 24 * 60 * 60 * 1000 });
    }
    next();
}

module.exports = plantJWT ;