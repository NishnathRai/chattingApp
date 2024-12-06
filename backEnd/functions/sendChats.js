const chatMessageModel = require("../schemas/chatMessageSchema");

async function sendChat(req,res){
    try{
        let chats = await chatMessageModel
        .find({ 
            $or: [
                { FromUserId: req.body?.user, ToUserId: req.params?.id },
                { FromUserId: req.params?.id, ToUserId: req.body?.user }
            ]
         })
        .sort({createdAt:-1})
        .skip(req.params?.skip)
        .limit(10);
        res.send(chats.reverse());
    }
    catch(err){
        res.status(500).send({message:err.message});
    }
}

module.exports = sendChat;