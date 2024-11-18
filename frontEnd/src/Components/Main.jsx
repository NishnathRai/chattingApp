import { useSelector } from 'react-redux';
import '../../cssFiles/main.css';
import Body from './Body';

function Main(){

    let open = useSelector(store=>store.leftBar);

    return (<>
      <div style={ innerWidth>700 ? {width: (!open) ? "93vw" : "77vw" } : {width:"100vw"}} className='main-box' >
        <Body />
      </div>
    </>)
}


export default Main;