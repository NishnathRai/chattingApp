import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./src/Components/Home";
import Login from "./src/Components/Login";
import './src/index.css';
import store from "./src/store/store";
import { Provider } from "react-redux";
import ErrorPage from "./src/Components/ErrorPage";
import ChattingPage from "./src/Components/ChattingPage";

const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
      // errorElement:<ErrorPage/>
    },
    {
      path:"/Login",
      element:<Login/>
    },
    {
      path:"/chatWith/:UserId",
      element : <ChattingPage/>
    }
])



function App(){
    return (<Provider store={store} >
            <RouterProvider router={router} />
            </Provider>);
}
export default App;