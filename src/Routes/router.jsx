import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import DetailsCard from "../Shared/DetailsCard/DetailsCard";
import NotFound from "../Shared/NotFound/NotFound";
import PrivateRouter from "./PrivateRouter";
import MyToys from "../Pages/MyToys/MyToys";
import Loader from "../Shared/Loader/Loader";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/toys",
                element:<AllToys></AllToys>
            },
            {
                path:"/addtoy",
                element:<PrivateRouter><AddToy></AddToy></PrivateRouter>
            },
            {
                path:"/mytoys",
                element:<PrivateRouter><MyToys></MyToys></PrivateRouter>
            },
            {
                path:"/toy/:id",
                element: <PrivateRouter><DetailsCard></DetailsCard></PrivateRouter>,
                loader:({params}) => fetch(`http://localhost:5000/toydetails/${params.id}`),
                
            },
            {
                path:"/updatetoy/:id",
                element:<UpdateToy></UpdateToy>,
                loader:({params}) => fetch(`http://localhost:5000/toydetails/${params.id}`),
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
        ]

    },
    {
        path:"*",
        element:<NotFound></NotFound>
    }

])

export default router;