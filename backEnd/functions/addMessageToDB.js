const chatMessageModel = require("../schemas/chatMessageSchema");

async function addMessageToDB(req,res,next){
    try{
        let s = chatMessageModel({
            FromUserId : req.body.user._id,
            ToUserId : req.body.ToUserId,
            message : req.body.message,
            messageType : req.body?.messageType || 'text' 
        });
        await s.save();
        next();
    }
    catch(err){
        res.status(500).send({message:err.message});
    }
}

module.exports = addMessageToDB ;