
/// A  = from user 
/// B  = to user

const { chatWithObjectModel } = require("../schemas/chatWithObjectSchema");
const chatWithModel = require("../schemas/chatWithSchema");

async function addMessageToChatWith(req,res) {
   try{
       let modificationObjA = await giveChatWithObject( req.body?.user?._id , req.body?.ToUserId );
       await addChatWithForA(modificationObjA,req.body?.message);
       let modificationObjB = await giveChatWithObject(  req.body?.ToUserId , req.body?.user?._id );
       await addChatWithForB(modificationObjB,req.body?.message);
       res.send({message:"Done"});
   }
   catch(err){
       res.status(500).send({"error":"500"})
   }
}


async function addChatWithForA(modificationObjA,message){
    await chatWithObjectModel.findOneAndUpdate(
        { _id : modificationObjA._id },
        { lastMessage : message }
    );
    return;
}

async function addChatWithForB(modificationObjB,message){
    await chatWithObjectModel.findOneAndUpdate(
        { _id : modificationObjB._id },
        { 
            lastMessage : message ,
            $inc : {unReadMessagesCount :  1 } 
        }
    );
    return;
}


async function giveChatWithObject( from , to ) {
    let chatWith = await chatWithModel.findOne({userId:from});
    if(chatWith==null) chatWith = await creteChatWithObj(from);
    let ObjOfB = await getBinArray(chatWith,to);
    return ObjOfB;
}

async function getBinArray(chatWith,to){
    let objectsOfChatWithObjects = await chatWithObjectModel.find({
        _id : { $in : chatWith.chatWith }
    });
    let targetObj = objectsOfChatWithObjects.filter((val)=>{
        return val.userId.toString() == to.toString();
    });
    if(targetObj.length==0){
        let chatWithObjSchemaObj = await createChatWithObjSchemaObj(to);
        targetObj = chatWithObjSchemaObj ;
        await addChatWithObjSchemaObjtoA( chatWith , targetObj );
    }
    else targetObj = targetObj[0];
    return targetObj;
}


async function addChatWithObjSchemaObjtoA( chatWith , targetObj) {
    let a = await chatWithModel.findOneAndUpdate(
       { _id : chatWith._id },
       { $push: { chatWith: targetObj._id } },
    );
    return;
}


async function createChatWithObjSchemaObj(to) {
    let obj = new chatWithObjectModel({
        userId : to ,
    });
    obj = await obj.save();
    return obj;
}
async function creteChatWithObj(from){
    let obj = new chatWithModel({
        userId : from 
    });
    obj = await obj.save();
    return obj;
}

module.exports ={
     addMessageToChatWith ,
     giveChatWithObject
};