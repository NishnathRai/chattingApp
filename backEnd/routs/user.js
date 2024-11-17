const express = require('express');
const userRouter = express.Router();
////
const Vaild = require("../functions/validate.js");
const userModel = require("../schemas/userSchema.js");
const bcrypt = require("bcrypt");
const plantJWT = require('../functions/plantJWT.js');
const isPsswordCorrect = require('../functions/isPasswordCorrect.js');
////
userRouter.post("/signin",async (req,res,next)=>{
    try{
       let email = req.body?.email;
       let password = req.body?.password;
       Vaild(0,email,password,"");
       let user = await userModel.findOne({email}).exec();;
       if(!user) throw Error("Please enter Vaild info");
       await isPsswordCorrect(user,password);
       req._id = user._id;
       next();
    }
    catch(err){
        res.status(400).send( {message:err.message} );
    }
} , plantJWT ,(req,res) => { res.send({ message:"sign In Successfully"}) } );


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
        if(err.code==11000) res.status(400).send({ message:req.body?.email + " Already exists"});
        else res.status(400).send({message:err.message});
    }
} , plantJWT , (req,res)=>{ res.send({message:"Account created Successfully"}) } )


module.exports = userRouter;
