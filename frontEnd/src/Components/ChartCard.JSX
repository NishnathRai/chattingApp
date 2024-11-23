import { useState } from "react";

function ChatCard({chatWithObjectId}){


    let [ name , setName] = useState("");
    let [ email , setEmail ] = useState("");
    let [ lastMessage ,setLastMessage ] = useState("");
    let [ profilImg , setProfilImg ] = useState("https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif");
    let [ unReadMessages ,setUnReadMessages ] = useState("");

    return (<>
    <div className="user-card-box" >
        <img src={ profilImg } className="user-card-profilpicture"  />
         <div className="user-card-info" >
             <h1>Name : <span className="dark" >{name}</span></h1>
             <h1>Email : <span className="dark" >{email}</span></h1>
             <h1>Last Message : <span className="dark" >{lastMessage}</span></h1>
             <h1>UnRead Messages : <span className="dark" >{unReadMessages}</span></h1>
        </div>
     </div>
    </>);
}


export default ChatCard;