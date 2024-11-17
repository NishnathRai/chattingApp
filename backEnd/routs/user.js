const express = require('express');
const userRouter = express.Router();
////
const Vaild = require("../functions/validate.js");
const userModel = require("../schemas/userSchema.js");
const bcrypt = require("bcrypt");
const plantJWT = require('../functions/plantJWT.js');
////
userRouter.post("/signin",(req,res)=>{
    try{
       let email = req.body?.email;
       let password = req.body?.password;
       Vaild(0,email,password,"");
       res.send(email + " " +password);
    }
    catch(err){
        res.status(400).send("moda " + err.message );
    }
});

userRouter.post("/signup",async (req,res,next)=>{
    try{
       let email = req.body?.email;
       let password = req.body?.password;
       let userName = req.body?.userName;
       Vaild(1,email,password,userName);
       password = await bcrypt.hash(password,10);
       const user = new userModel({
        email,
        password,
        userName,
       });
       const { _id } = await user.save();
       req.body._id = _id ;
       next();
    }
    catch(err){
        if(err.code==11000) res.status(400).send( req.body?.email + " Already exists");
        else res.status(400).send(err.message);
    }
} , plantJWT , (req,res)=>{ res.send("Account created Successfully") } )


module.exports = userRouter;