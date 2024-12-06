function Input({value,setValue,placeHolder,svg}){
    return (
        <div
        style={ outerObj }
        >
        <div>{svg}</div>
        <input onChange={(e)=>{setValue(e.target.value)}} value={value} style={inputStyle} placeholder={placeHolder} ></input>
        </div>
    )
}

const inputStyle =
{
    height: "max-content",
    padding: "15px 25px 15px 25px",
    borderBottomRightRadius:"10px" ,
    borderTopRightRadius: "10px",
    paddingLeft: "20px",
    backgroundColor: "#f3f5f7",
    outline: "none"
}

const outerObj =
{
    paddingLeft: "15px",
    fontSize: "large",
    backgroundColor: "#f3f5f7",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    width:"300px"
};

export default Input;