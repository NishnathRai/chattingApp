import { useEffect, useState } from "react";
import Input from "./Input";
import ChatCard from "./ChartCard";
import { Link } from "react-router-dom";

const SearchIcon = <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>

function ChatPage(){

    let [ search , setsearchValue ] = useState("");
    let  [ data ,setData ] = useState([]);
    useEffect( ()=>{
        getChatWithPages(setData);
    },[]);

    return (<>
    <div className="chat-outer-box" >
        <div className="search-bar" >
            <Input value={search} setValue={setsearchValue} svg={SearchIcon} placeHolder={"User Name"} />
        </div>
        <div className="bottom-box" >
            { data.map( (val,i)=>{
                 return <Link  key={val.userId} to={"/chatWith/"+val?.userId} > <ChatCard searchVal={search} userId={val?.userId} lastMessage={val?.lastMessage} unReadMessages={val?.unReadMessagesCount} />  </Link>;
            } ) }
        </div>
    </div>
    </>);
}

async function getChatWithPages(setData){
    try{
        let data = await fetch( process.env.URL+"/chat" , { credentials : "include" } );
        data = await data.json();
        setData(data);
    }
    catch(err) {
        console.log(err+"error at chat page");
    }
}
export default ChatPage;