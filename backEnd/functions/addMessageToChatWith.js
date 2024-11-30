const { chatWithObjectModel } = require("../schemas/chatWithObjectSchema");
const chatWithModel = require("../schemas/chatWithSchema");

async function addMessageToChatWith(req,res) {
    try{
        let userChats = await chatWithModel.findOne({userId:req.body.user._id});
        if(!userChats) userChats = {};
        let chatWithObjectIds = userChats?.chatWith ? userChats?.chatWith : [] ;
        let chattingWithObjects = await chatWithObjectModel.find(
           {_id : { $in : chatWithObjectIds },}
        );
        let edittingObj = findObj(req.body.ToUserId , chattingWithObjects );
        if( !edittingObj ) await createAndAdd(req);
        else await edithTheObj(edittingObj,req);
    }
    catch(err){
        res.status(500).send("error");
    }
    res.send("Done");
}

function findObj( userId , chattingWithObjects ){
    let findIt = chattingWithObjects.filter((val)=>{
        return val?.userId == userId ;
    });
    return findIt.length==0 ? false : findIt[0];
}

async function createAndAdd(req) {
    let chatWithObj = new chatWithObjectModel({
        userId : req.body?.ToUserId ,
        unReadMessagesCount :  1 ,
        lastMessage : req.body?.message ,
    });
    chatWithObj = await chatWithObj.save();
    await chatWithModel.updateOne(
        { userId: req.body.user._id },
        { $addToSet : { chatWith : chatWithObj?._id } },
        { upsert : true }
    );
}


async function edithTheObj(a,req) {
    let b = await chatWithObjectModel.updateOne( 
        { _id:a._id },
        { 
            lastMessage :  req.body?.message ,
            $inc : { unReadMessagesCount : 1 },
        }
    );
}

module.exports = addMessageToChatWith ;