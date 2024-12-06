import { useState } from "react";
import { useParams } from "react-router-dom";

function ViewStatus(){

    let { UserId } = useParams();
    let [status ,setStatus] = useState("https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif");
    async function getUserStatus(){
        let data = await fetch(`${process.env.URL}/getUserStatusData/${UserId}`,{credentials:"include"});
        data = await data.json();
        setStatus(data.StatusData);
    }
    useState(()=>{
        getUserStatus();
    });
    return (<>
    <div style={outerstyle} >
        <img src={status} style={imgStyle} />
    </div>
    </>)
}

const outerstyle={
    height:"100vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
}

let imgStyle={
    width:"90vw",
    height:"90vw",
    display:'inline-block', 
}

export default ViewStatus;