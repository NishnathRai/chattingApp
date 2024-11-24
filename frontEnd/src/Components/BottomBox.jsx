import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../store/pageSlice";

function BottomBox({arr}){
    
    let index =  useSelector(store=>store.page);
    let dispatch =useDispatch();

    return (<>
    <div className='puka' >
     { arr.map( (val,i)=>{
     return <div key={i} style={ {backgroundColor:(i==index) && "black" } }  className="but-ico" onClick={()=> dispatch(changePage(i)) } >{(i!=index) ? val.svgb : val.svg}</div>;
     })}
    </div>
    </>);
}

export default  BottomBox