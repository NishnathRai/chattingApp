const express = require('express');
const statusModel = require('../schemas/StatusSchema');
const verifyAndAddUser = require("../functions/verifyAndAddUser");
const { mongoose } = require('mongoose');
const statusRouter = express.Router();

statusRouter.get("/getStatus", verifyAndAddUser ,async (req,res)=>{
    try{
        let data = await statusModel.find({ userId :{ $ne : req.body.user._id} })
        .select(['userId']);
        res.send({data});
    }
    catch(err){
        res.status(500).send({message:"problem while fetching from db"});
    }
});

statusRouter.post("/addStatus", verifyAndAddUser ,async (req,res)=>{
    try{
        let data = new statusModel({
            userId : req.body.user._id,
            StatusData : req.body.StatusData,
            typeOfStatus : req.body?.typeOfStatus ? req.body.typeOfStatus : 'text',
            expiresAt : new Date( Date.now() + 60 * 60 * 1000 ) ,
        });
        await data.save();
        res.send({message:"Successuful"})
    }
    catch(err){
        res.status(500).send({message:"problem while putting into db"});
    }
});

statusRouter.get("/getMyStatuc", verifyAndAddUser , async (req,res)=>{
    try{
        let data = await statusModel.findOne({
            userId : req.body.user._id  
        })
        if(data==null) {
            res.send({found:false, message:"no status"});
            return;
        }
        res.send({found:true});
    }
    catch(err){
        res.status(500).send({message:"problem while getting into db"});
    }
});

statusRouter.get("/getUserStatusData/:userId", verifyAndAddUser ,async (req,res)=>{
    try{
        let data = await statusModel.findOne({
            userId :req.params.userId=="MyStatus" ? req.body.user._id :new mongoose.Types.ObjectId(req.params.userId),
        });
        if(data==null) {
            res.send({message:"no data"});
            return;
        }
        res.send(data);
    }
    catch(err){
        res.status(500).send({message:"problem while getting into db"});
    }
});

statusRouter.delete("/removeMyStatus",verifyAndAddUser,async (req,res)=>{
    try{
       await statusModel.deleteOne({userId:req.body?.user._id});
       res.send("deleated sucessfully")
    }
    catch(err){
        res.status(500).send({message:"problem while getting into db"});
    }
});

module.exports = statusRouter ;