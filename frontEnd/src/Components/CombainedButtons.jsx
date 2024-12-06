let buttonStyle =
{
    height: "max-content",
    padding: "15px 25px 15px 25px",
    borderRadius: "20px",
} ;

let outerBoxStyle = 
{
    borderRadius: "25px",
    backgroundColor: "#f3f5f7",
    overflow: "hidden",
    fontFamily:"Raleway",
    fontSize: "large",
    fontWeight: "600",
    padding: "7px",
    width: "max-content"
};

function CombainedButtons(arr,index,setIndex){

    function clicked(index){
       setIndex(index);
    }

    return (
     <div 
        style={outerBoxStyle}
     >
        { arr.map( (val,i)=>
        <button 
        style={{
            backgroundColor: (index==i) ? "white" : "#f3f5f7",
            ...buttonStyle
        }} 
        className='combined-but'
        index={i}
        key={234*i} 
        onClick={(e)=>{clicked(e.target.getAttribute("index"))}}
        >
        {val}
        </button> 
        ) }
     </div>);
};

export default CombainedButtons;