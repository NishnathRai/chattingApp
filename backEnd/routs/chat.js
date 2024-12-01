const express = require("express");
const verifyAndAddUser = require("../functions/verifyAndAddUser");
const chatRouter = express.Router();
const chatWithModel = require("../schemas/chatWithSchema");
const chatMessageModel = require("../schemas/chatMessageSchema");
const {addMessageToChatWith} = require("../functions/addMessageToChatWith");
const { chatWithObjectModel } = require("../schemas/chatWithObjectSchema");
const addMessageToDB = require("../functions/addMessageToDB");
const sendChat = require("../functions/sendChats");
const markSeen = require("../functions/markSeen");


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

chatRouter.get("/messageWithId/:id/:skip",
    verifyAndAddUser ,
    markSeen ,
    sendChat,
);


chatRouter.post("/sentMessage",verifyAndAddUser, addMessageToDB , addMessageToChatWith );

module.exports = chatRouter ; 