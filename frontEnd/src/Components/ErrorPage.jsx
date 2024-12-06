import useproctedRout from "../myHooks/useprotectedRout";

function ErrorPage(){

    useproctedRout();

    return (<>
    <div style={errorPageStype} >
    <h2  style={ {...mainLineStyle ,color:"red"}} >error 404</h2>
    <h1 
    style={mainLineStyle} 
    >"Uh-oh! The page is taking a little nap. We'll wake it up and get things rolling shortly. Please be patient with us!" 💤💻</h1>
    <a  style={ {...mainLineStyle , ...but}} href="/" >Restart App 🚀</a>
    </div>
   
    </>);
}


const mainLineStyle = 
{   width:"80%",
    fontWeight:"800",
    fontSize: "xx-large"
};

const but={
  border:"solid black 2px",
  width:"max-content",
  padding:"10px",
  marginTop:"50px",
  borderRadius:"20px",
  fontSize: "x-arge",
  backgroundColor:"#",
}

const errorPageStype =
{ 
    height: "100vh",
    width:"100vw",
    display: "flex",
    alignItems: "center",
   justifyContent: "center",
   flexDirection : "column"
}



export default ErrorPage;