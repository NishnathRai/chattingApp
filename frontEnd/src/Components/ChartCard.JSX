import { useEffect, useState } from "react";

function ChatCard({searchVal,lastMessage,unReadMessages,userId}){

    let [ name , setName] = useState("");
    let [ email , setEmail ] = useState("");
    let [ profilImg , setProfilImg ] = useState("https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif");
    useEffect( ()=>{
        getOpositeUserDeatiles(userId,setName,setEmail,setProfilImg);
    } ,[]);

    return (<>
    { name.includes(searchVal) ?   
    <div className="user-card-box" >
        <img src={ profilImg } className="user-card-profilpicture"  />
         <div className="user-card-info" >
             <h1>Name : <span className="dark" >{name}</span></h1>
             <h1>Email : <span className="dark" >{email}</span></h1>
             <h1>Last Message : <span className="dark" >{lastMessage.length>10 ? lastMessage.slice(0,10)+"..." : lastMessage }</span></h1>
             <h1>UnRead Messages : <span className="dark" >{unReadMessages}</span></h1>
        </div>
     </div>
     :<></>
     }
    </>);
}


async function getOpositeUserDeatiles(userId,setName,setEmail,setProfilImg) {
    let data = await fetch( process.env.URL+"/getFeedUserData/"+userId , {credentials :"include"} );
    data = await data.json();
    setName(data?.userName);
    setEmail(data?.email);
    setProfilImg(data?.profilePicture);
}

export default ChatCard;