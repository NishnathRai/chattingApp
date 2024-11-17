const express = require('express');
const userRouter = express.Router();
////
const Vaild = require("../functions/validate.js");
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

userRouter.post("/signup",(req,res)=>{
    try{
       let email = req.body?.email;
       let password = req.body?.password;
       let userName = req.body?.userName;
       Vaild(1,email,password,userName);
       res.send(email + " " +password+" "+userName);
    }
    catch(err){
        res.status(400).send("sulli "+err.message);
    }
})


module.exports = userRouter;