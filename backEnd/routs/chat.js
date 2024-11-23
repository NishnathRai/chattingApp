const express = require("express");
const verifyAndAddUser = require("../functions/verifyAndAddUser");
const chatRouter = express.Router();
const chatWithModel = require("../schemas/chatWithSchema");

chatRouter.get("/chat", verifyAndAddUser ,async (req,res)=>{
    let data = await chatWithModel.find({userId:req?.body?.user?._id});
    res.send(data);
});




module.exports = chatRouter ; 