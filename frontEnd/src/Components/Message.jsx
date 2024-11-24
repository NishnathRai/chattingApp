function Message({message,time,seen,from,_id}){

    return(<>
    <div  style={{...messageOuterBox , justifyContent:(from) ? "end" : ""  }} >
        <div style={messageInnerBoxStyle} >
               <>{message}</>
               <br/>
               <div style={bottomTime} > { time } { seen ?  "seen" : "sent" } </div>
        </div>
    </div>
    </>);
}


const bottomTime =
{
    fontWeight:"600",
    color:"#0080f8",
    margin:"5px",
    paddingRight:"5px",
    width:"100%",
    textAlign: "end"
}

const messageInnerBoxStyle =
{
    maxWidth:"70vw",
    height:"max-contenet",
    border:"solid black 2px",
    margin:"10px",
    padding:"15px",
    borderRadius:"20px",
    paddingBottom:"0px"
};

let messageOuterBox={
    display:"flex",
    
}

export default Message ;