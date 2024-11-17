const jwt = require("jsonwebtoken");

function plantJWT(req,res,next){
    const token =  jwt.sign( {_id:req.body._id} ,"Nishnath" ) ;
    if(!req?.remember) res.cookie('token',token);
    else {
        res.cookie('token',token,{ maxAge: 100 * 365 * 24 * 60 * 60 * 1000 });
    }
    next();
}

module.exports = plantJWT ;