import { useSelector } from "react-redux";
import SettingsPage from "./SettingsPage";
import SearchPage from "./SearchPage";

function Body(){

    let page = useSelector(store=>store.page);
    function getPage(page){
        if(page==3) return <SearchPage/>
        else if(page==4) return <SettingsPage/>
        return <>Error in Loading Page</>
    }


    return (<>
    {getPage(page)}
    </>)
}

export default Body ;