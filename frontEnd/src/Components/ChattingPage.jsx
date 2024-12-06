import { Link, useParams } from "react-router-dom";
import '../../cssFiles/Chattingpage.css';
import Input from "./Input";
import Message from "./Message";
import Loder from "./Loder";
import { useEffect, useRef, useState } from "react";
import convertToIST from "../functions/convertToIST";
import sendMessage from "../functions/sendMessage";

function ChattingPage(){

    let {UserId} = useParams();
    useEffect(()=>{
        async function getOppositeUserData() {
            try{
               let oppositeUser = await fetch( process.env.URL+"/getFeedUserData/"+UserId ,{credentials:"include"} );
               oppositeUser = await oppositeUser.json();
               setuserName(oppositeUser?.userName);
               setemail(oppositeUser?.email);
               setImage(oppositeUser?.profilePicture);
            }
            catch(err){console.log("some problem while fetching opposite user details in chatting page",err)}
        }
        getOppositeUserData();
        /////
        getMessages(0);
    },[]);
    async function getMessages(count,add) {
        try{
           let msgs = await fetch(`${process.env.URL}/messageWithId/${UserId}/${count}`,{credentials:"include"}); 
           msgs = await msgs.json();
           setmessages( add ? [ ...msgs , ...messages ] : msgs );
           if(msgs.length<10) loder.current.style.display = "none";
           else loder.current.style.display = "flex";
        }
        catch(err){console.log("some problem while fetching messages in chatting page",err)}
    };
    let [ userName , setuserName ] = useState("");
    let [ email , setemail ] = useState("");
    let [ image ,setImage ] = useState("https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif");
    let [ messages ,setmessages ] = useState([]);
    let [  typingMessage ,setTypingMessage ] = useState("");
    ////
    const loder = useRef(null);
    useEffect(()=>{
        const observer = new IntersectionObserver(fun,{
            root:null,
            threshold:1,
        });
        async function fun(entries, observer){
            if(entries[0].isIntersecting){
                if(messages.length!=0) {
                    let distanceFromBottom =
                    messageContaner.current.scrollHeight -
                    messageContaner.current.scrollTop -
                    messageContaner.current.offsetHeight;
                  
                  // Call the function to load messages
                   await getMessages(messages.length, true);
                  
                  // Update the scroll position to maintain the same distance from the bottom
                    messageContaner.current.scrollTop =
                    messageContaner.current.scrollHeight -
                    distanceFromBottom -
                    messageContaner.current.offsetHeight;
                }
            }
        }
        if(loder.current) observer.observe(loder.current);
        return ()=>{ if(loder.current) observer.unobserve(loder.current) }
    },[messages])
    const messagesEndRef = useRef(null);
    useEffect(()=>{
       if(messages.length<=10){
         messagesEndRef.current?.scrollIntoView();
        }
    },[messages]);
    const messageContaner = useRef(null);
    ////
    return (<>
    <div className="chatting-page-box" >
        <div className="chat-with-details" >
             <div className="go-back-to-chat" >
             <Link to="/" ><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 448 512"><path fill="#000000" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></Link>
             </div>
             <img src={image} style={ppstyle}  />
             <div className='right-boxx' >{userName}<br/>{email}</div>
        </div>
        <div   className="main-messages" >
            <div ref={messageContaner} >
            <div ref={loder} className="chat-loder" ><Loder/></div>
            {  messages.map((val,i)=>{
                return <Message key={val._id} message={val?.message} time={convertToIST(val?.createdAt)} seen={val?.read} from={ val?.FromUserId!=UserId } _id={UserId} />;
            })  } 
            <div ref={messagesEndRef} ></div></div>
        </div>
        <div className="message-box" >
            <Input value={typingMessage} setValue={setTypingMessage} svg={<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path fill="#000000" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>} /> 
            <button onClick={()=>{sendMessage(typingMessage ,setTypingMessage,UserId,getMessages)}} style={butStyle} >Send</button>
            <input  type="file" accept=".png, .jpg, .jpeg, .gif, .bmp, .webp" style={butStyle} placeholder="Send Image"  />
        </div>
    </div>
    </>);
}

const butStyle =
{
    backgroundColor: "#0084ff",
    padding:"15px",
    borderRadius:"20px",
    fontWeight: "600",
    marginLeft:"10px",
    width:"max-content"
};


let ppstyle=
{   
    height:"70%",
    aspectRatio: "1",
    border:"solid black 1px",
    borderRadius:"50%",
}

export default ChattingPage;