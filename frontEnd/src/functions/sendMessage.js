async function sendMessage(message ,setMessage,ToUserId,getMessages){
    let a  = await fetch ( process.env.URL+"/sentMessage" , {
         method: 'POST',
         headers:{
            'Content-Type':'application/json'
         },
         body : JSON.stringify({
            message,
            ToUserId
         }), 
         credentials:"include"
    });
    setMessage("");
    getMessages();
}


export default sendMessage;