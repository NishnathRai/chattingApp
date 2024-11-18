import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./src/Components/Home";
import Login from "./src/Components/Login";
import './src/index.css';
import store from "./src/store/store";
import { Provider } from "react-redux";

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
    return (<Provider store={store} >
            <RouterProvider router={router} />
            </Provider>);
}
export default App;