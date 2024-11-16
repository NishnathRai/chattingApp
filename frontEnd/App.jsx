import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./src/Components/Home";
import Login from "./src/Components/Login";
import './src/index.css';

const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/login",
      element:<Login/>
    }
])



function App(){
    return (<RouterProvider router={router} />);
}
export default App;