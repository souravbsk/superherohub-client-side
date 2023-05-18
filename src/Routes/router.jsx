import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import DetailsCard from "../Shared/DetailsCard/DetailsCard";

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
                element:<AllToys></AllToys>,
                loader: () => fetch("http://localhost:5000/alltoys")
            },
            {
                path:"/addtoy",
                element:<AddToy></AddToy>
            },
            {
                path:"/toy/:id",
                element: <DetailsCard></DetailsCard>,
                loader:({params}) => fetch(`http://localhost:5000/toydetails/${params.id}`),
                
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]

    }
])

export default router;