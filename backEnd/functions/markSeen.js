const chatMessageModel = require("../schemas/chatMessageSchema");
const { chatWithObjectModel } = require("../schemas/chatWithObjectSchema");
const { giveChatWithObject } = require("./addMessageToChatWith");

async function markSeen(req,res,next){
   await chatMessageModel.updateMany(
      { FromUserId: req.params?.id , ToUserId: req.body?.user },
      { read : true },
      { new : false }
   );
   ////
   // let obj = await giveChatWithObject(  req.body?.user ,req.params?.id );
   // if(obj.unReadMessagesCount==0 &&  obj.lastMessage.length==0 ){
   //     await chatWithObjectModel.findByIdAndDelete(obj._id);
   // }
   // else {
   //    await chatWithObjectModel.findByIdAndUpdate(
   //      {_id:obj._id},
   //      { unReadMessagesCount : 0 },
   //      { new : false }
   //    );
   // }
   ////
   next();
}

module.exports = markSeen;