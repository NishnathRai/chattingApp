import { useEffect, useState } from "react";
import Input from "./Input";
import Loder from "./Loder";
import { useSelector } from "react-redux";
import updateFromApi from "../functions/updateFromApi";


async function lodeDataInUpdatePage(setEmail,setBio,setStatus,setUser,setImage) {
    try{
       let data = await fetch(process.env.URL+"/userData",{credentials:"include"});
       data = await data.json();
       setEmail(data.email);
       setBio(data.bio);
       setStatus(data.status);
       setUser(data.userName);
       setImage(data.profilePicture);
    }
    catch(err) {console.log("error at getting user data",err);}
 }


function SettingsPage(){

    let mode = useSelector(store=>store.mode);
    let [image,setImage]= useState("");
    let [email,setEmail] = useState("");
    let [bio,setBio] = useState("");
    let [status,setStatus] = useState("");
    let [user,setUser] = useState("");
    let [loder,setLoder] = useState(false);
    let [ message , setMessage ] = useState("");
    let iteams = [
        {placeHolder:"User name",svg:<svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#000000" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>,s:setUser,v:user},
        {placeHolder:"Email",svg:<svg  xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#000000" d="M64 208.1L256 65.9 448 208.1l0 47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5l0-47.4zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-239.9c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z"/></svg>,v:email,s:setEmail},
        {placeHolder:"Bio",svg:<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#000000" d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"/></svg>,s:setBio,v:bio},
        {placeHolder:"Status",svg:<svg xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 384 512"><path fill="#000000" d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM105.8 229.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L216 328.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM160 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>,v:status,s:setStatus}
    ];
     
    useEffect( ()=>{
      lodeDataInUpdatePage(setEmail,setBio,setStatus,setUser,setImage);
    } ,[]);

    async function fileAddedToInput(image) {
        try{
            let file = new FileReader();
            file.readAsDataURL(image);
            file.onload=()=>{
                setImage(file.result);
            };
        }
        catch(err){
            setMessage("error while loading image see console for more details");
            console.log("err in loading image",err.message);
        }
    }

    async function clickedUpdate(){
        setLoder(true);
        await updateFromApi(email,user,bio,status,image,setMessage);
        lodeDataInUpdatePage(setEmail,setBio,setStatus,setUser,setImage);
        setLoder(false);
    }

    return (<>
        <div style={{backgroundColor: mode ? "white" : "rgb(45, 45, 45)"}} className="ap" >
            <div className="parent" >
            <input onChange={(e)=>{fileAddedToInput(e.target.files[0])}}  type="file" accept=".png" className="edit-but" />
            <img src={image} className="profil-picture" />
            </div>
            { iteams.map( (val)=><Input value={val.v} setValue={val.s} placeHolder={val.placeHolder} svg={val.svg} /> ) }
            <h1 className="msg-error" >{message}</h1>
            <button onClick={()=>{clickedUpdate()}} style={butStyle} >{ loder ? <Loder/> : "Updata"}</button>
        </div> 
    </>);
}

const butStyle =
{
    height:" max-content",
    backgroundColor: "#0084ff",
    padding: "15px 25px 15px 25px",
    width: "300px",
    fontWeight: "700",
    borderRadius: "10px",
    display:"flex",
    alignItems: "center",
    justifyContent: "center"
};

export default SettingsPage;