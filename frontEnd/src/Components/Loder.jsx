function Loder(){
    return (
        <div style={loderStyle}  ></div>);
};


const loderStyle = {
    height:"23px",
    aspectRatio: "1",
    borderRadius:"50%",
    border:"solid black 3px",
    borderRightColor: "white" ,
    animation: "rotate 1s linear infinite"
};

const style = document.createElement("style");
style.textContent = `
@keyframes rotate {
   0% {
       transform: rotate(0deg);
   }
   100% {
       transform: rotate(360deg);
   }
}`;
document.head.appendChild(style);

export default Loder;