import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserCard({_id}){
   

    useEffect(()=>{
       async function fetchDataWithId() {
            try{
               let data = await fetch( process.env.URL+"/getFeedUserData/"+_id , {credentials:"include"});
               data  = await data.json();
               setBio(data?.bio);
               setEmail(data?.email);
               setProfilImg(data?.profilePicture);
               setStatus(data?.status);
               setName(data?.userName);
            }
            catch(err){
                console.log("error at userCart for loading user data ",err.message);
            }
       };
       fetchDataWithId();
    },[]);


    let [ name , setName] = useState("");
    let [ email , setEmail ] = useState("");
    let [ bio ,setBio ] = useState("");
    let [ profilImg , setProfilImg ] = useState("https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif");
    let [ status ,setStatus ] = useState("");

    return (<>
     <Link to={"/chatWith/"+_id}  >
     <div className="user-card-box" >
        <img src={ profilImg } className="user-card-profilpicture"  />
         <div className="user-card-info" >
             <h1>Name : <span className="dark" >{name}</span></h1>
             <h1>Email : <span className="dark" >{email}</span></h1>
             <h1>Bio : <span className="dark" >{bio}</span></h1>
             <h1>Status : <span className="dark" >{status}</span></h1>
        </div>
     </div>
     </Link>
    </>)
};

export default UserCard;