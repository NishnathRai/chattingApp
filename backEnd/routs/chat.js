const express = require("express");
const verifyAndAddUser = require("../functions/verifyAndAddUser");
const chatRouter = express.Router();
const chatWithModel = require("../schemas/chatWithSchema");
const chatMessageModel = require("../schemas/chatMessageSchema");
const addMessageToChatWith = require("../functions/addMessageTochatWith");
const { chatWithObjectModel } = require("../schemas/chatWithObjectSchema");
const addMessageToDB = require("../functions/addMessageToDB");

chatRouter.get("/chat", verifyAndAddUser ,async (req,res)=>{
    try{
        let data = await chatWithModel.findOne({userId:req?.body?.user?._id});
        if(data==null){
            res.send([]);
            return;
        }
        data = await chatWithObjectModel.find({
            _id : { $in : data?.chatWith }
        });
        res.send(data);
    }
    catch(err){
        res.status(500).send({message:err.message});
    }
});


chatRouter.get("/messageBetween/:skip",(req,res)=>{
    res.send("puka");
});

chatRouter.get("/messageWithId/:id/:skip", verifyAndAddUser , async (req,res)=>{
    try{
        let chats = await chatMessageModel
        .find({ 
            $or: [
                { FromUserId: req.body?.user, ToUserId: req.params?.id },
                { FromUserId: req.params?.id, ToUserId: req.body?.user }
            ]
         })
        .sort({createdAt:-1})
        // .skip(req.params?.skip)
        // .limit(10);
        res.send(chats);
    }
    catch(err){
        res.status(500).send({message:err.message});
    }
});


chatRouter.post("/sentMessage",verifyAndAddUser, addMessageToDB , addMessageToChatWith );

module.exports = chatRouter ; 