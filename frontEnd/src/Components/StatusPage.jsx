import { useEffect, useRef, useState } from "react";
import "../../cssFiles/status.css";
import Loder from "./Loder";
import Input from "./Input";
import StatusCard from "./StatusCard";
import addStatusToDb from "../functions/addStatusToDb";
import getUsersKeptStatus from "../functions/getUsersKeptStatus";
import getMyStatus from "../functions/getMyStatus";
import removeStatus from "../functions/removeStatus";

const SearchIcon = <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>


function StatusPage(){

    let [loder,setLoder]=useState(false);
    let [ search , setSearch ] = useState("");
    let [ data ,setData ] = useState([]);
    let [ status ,setStatus ] = useState(false);
    let  statusFile = useRef(null);

    useEffect(()=>{
       getUsersKeptStatus(setData,setLoder);
       getMyStatus(setStatus,setLoder);
    },[]);
    



   return (<>
   <div className="out-status-box" >
       <div className="status-h-20" >
            <Input value={search} setValue={setSearch} placeHolder={"Search"} svg={SearchIcon} />
       </div>
       <div className="my-statux-box" >
        { loder ? 
        <Loder/> :
        <>
        { status ? 
            <><button className="but" >View My Status</button>
            <button onClick={()=>{removeStatus(setStatus,setLoder)}} className="but" >Remove Status</button></> :
            <><button onClick={()=>{addStatusToDb(statusFile.current,getMyStatus,setLoder,setStatus)}} className="but" >Add Status</button>
            <input ref={statusFile} className="but"  type="file" accept=".png, .jpg, .jpeg, .gif, .bmp, .webp"  /></>
        }
        </>}
            
       </div>
       <div className="status-bottom-box" >
            {data.map((val)=>{
                return  <StatusCard key={val.userId} _id={val.userId} />;
            })}
       </div>
   </div>
   </>)
}

export default StatusPage;