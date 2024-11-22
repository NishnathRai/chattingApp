const express = require("express");
const feedRouter= express.Router();
const verifyAndAddUser = require("../functions/verifyAndAddUser.js");
const userModel = require("../schemas/userSchema.js");
//////

feedRouter.get("/feed/:skip/:search", verifyAndAddUser ,async (req,res)=>{
    try{
        let searchQ={};
        if(req.params?.search.slice(1).length!=0) {
            searchQ = { userName: { $regex: req.params?.search.slice(1), $options: 'i' } };
        }
        console.log(searchQ);
        let a =await userModel
        .find(searchQ)
        .sort({_id:1})
        .skip(req.params?.skip)
        .select(["_id"])
        .limit(10)
        .lean();
        res.send(a);
    }
    catch(err) {res.send([])}
});

feedRouter.get("/getFeedUserData/:_id/", verifyAndAddUser ,async (req,res)=>{
    try{
        let userData = await userModel
        .findById(req.params?._id)
        .select(["userName","email","bio","status","profilePicture"])
        .exec();
        res.send(userData);
    }
    catch(err) {  res.send([]) };
});

module.exports = feedRouter ; 