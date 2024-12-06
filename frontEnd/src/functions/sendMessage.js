async function sendMessage(message ,setMessage,ToUserId,getMessages,image){
   try{
      let a  = await fetch ( process.env.URL+"/sentMessage" , {
         method: 'POST',
         headers:{
            'Content-Type':'application/json'
         },
         body : JSON.stringify({
            message,
            ToUserId,
            messageType : (!image) ?  'text'  : 'image' ,
         }), 
         credentials:"include"
      });
      setMessage("");
      getMessages(0);
   }
   catch(err) {
      console.log("error at sending message",err)
   }
}


export default sendMessage;