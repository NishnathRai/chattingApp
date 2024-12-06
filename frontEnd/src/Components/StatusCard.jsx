import { useEffect, useState } from "react";

function StatusCard({_id,searchVal}){
    
    let [name,setName]=useState("");
    async function getUserDetails() {
        try{
            let data = await fetch(process.env.URL+"/getFeedUserData/"+_id,{credentials:'include'});
            data = await data.json();
            setName(data?.userName);
        }
        catch(err){
            console.log(err,"error while getting user detains in status card");
        }
    }
    useEffect(()=>{
        getUserDetails();
    },[]);

    return(<>
    {
        name.includes(searchVal) ?
        <div className="status-card" >
        <div>Name of user :<span className="status-brt" > {name} </span></div>
        <div>Tap to view status</div>
        </div> : <></>
    }  
    </>)
}


export default StatusCard;