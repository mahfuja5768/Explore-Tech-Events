import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Speakers from "../pages/Speakers";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/speakers',
                element:<Speakers></Speakers>
            }
        ]
    }
])

export default router;