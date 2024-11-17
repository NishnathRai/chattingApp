import { useState } from 'react';
import '../../cssFiles/login.css';
import CombainedButtons from './CombainedButtons';
import Input from './Input';
import formVaild from '../functions/formVaild';

function Login(){

    let [ index , setIndex ] = useState(0);
    let [ email , setEmail ]  = useState("");
    let [ password , setPassword ] = useState("");
    let [ userName, setUserName ] = useState("");
    let [ remember , setRemember ] = useState();
    let [ msg ,setMsg ] =useState("");
    let iteams = [
        {placeHolder:"Email",svg:<svg  xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#000000" d="M64 208.1L256 65.9 448 208.1l0 47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5l0-47.4zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-239.9c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z"/></svg>,v:email,s:setEmail},
        {placeHolder:"Password",svg:<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"  viewBox="0 0 448 512"><path fill="#000000" d="M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144l0 48-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-240 0 0-48z"/></svg>,v:password,s:setPassword}
    ];


    return (
    <>
    <div style={centerBoxStyle} className='centerBox' >
        <h1 style={heading} >Together.in</h1>
        {CombainedButtons(["Sign in","Sign up"],index,setIndex)}
        { iteams.map( (val,index)=> <Input key={12+index} value={val.v} setValue={val.s}  placeHolder={val.placeHolder} svg={val.svg} /> ) }
        {index!=0 && <Input value={userName} setValue={setUserName} placeHolder="User Name" svg={<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path fill="#000000" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>} />}
        <span checked={remember} onChange={(e)=>{ setRemember(e.target.checked) }} style={spanStyle} ><input type='checkbox' />Remember Me</span>
        <h3 style={msgStye} >{msg}</h3>
        <button onClick={()=>{formVaild(index,email,password,userName,remember,setMsg)}} style={butStyle} >Submit</button>
    </div>
    </>
    );

}


const msgStye =
{
   fontFamily: 'Raleway',
   fontSize: "small",
   width: "300px",
   paddingLeft: "10px",
   color: "red"
}

const centerBoxStyle = 
{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontFamily: "Raleway",
    gap: "15px",
    position: "absolute",
    top: "50vh",
    left: "50vw",
    transform: "translate(-50%,-50%)",
    backgroundColor: "white",
    height: "max-content",
    padding:" 50px 50px 70px 50px",
    borderRadius: "30px"
}

const heading = 
{
    fontWeight: "bolder",
    fontSize: "xx-large"
};

const butStyle =
{
    height:" max-content",
    backgroundColor: "#0084ff",
    padding: "15px 25px 15px 25px",
    width: "300px",
    fontWeight: "700",
    borderRadius: "10px"
};
const spanStyle =
{   
  display:"flex",
  gap:"10px",
  width:"300px",
  paddingLeft:"10px"
};


export default Login;