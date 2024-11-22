import { useSelector } from "react-redux";
import SettingsPage from "./SettingsPage";

function Body(){

    let page = useSelector(store=>store.page);
    function getPage(page){
         if(page==4) return <SettingsPage/>
         return <>Error in Loading Page</>
    }


    return (<>
    {getPage(page)}
    </>)
}

export default Body ;