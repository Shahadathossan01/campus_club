import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Register from "../components/ui/Register/Register";
import Login from "../components/ui/Login/Login";

const router=createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    children:[
        {path:'/register',element:<Register></Register>},
        {path:'/login',element:<Login></Login>}
    ]
    
    }
])
export default router;