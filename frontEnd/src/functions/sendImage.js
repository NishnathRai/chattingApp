import sendMessage from "./sendMessage";

function sendImage(imageBox,UserId,getMessages){
     let reader = new FileReader();
     reader.readAsDataURL(imageBox.files[0])
     reader.onload = (outCome)=>{
        typingMessage = outCome.target.result;
        setTypingMessage = (val)=>{};
        sendMessage(typingMessage ,setTypingMessage,UserId,getMessages,true);
     };
}

export default sendImage;