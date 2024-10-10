import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AppWrapper from "../wrapper/AppWrapper";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Blogs from "../pages/Blogs";
import SingleProduct from "../pages/SingleProduct";
import SingleBlog from "../pages/SingleBlog";
// import ProtectedRoute from "../pages/ProtectedRoute";
import Cart from "../pages/Cart";
import Login from "../components/Login";
import Register from "../components/Register";

import ProfileTest from "../components/Profiletest";

import Loader from "../components/Loader/Loader";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import SingleProductCard from "../components/SingleProductCard";
import LoginTest from "../components/LoginTest";
import LoginSignupPage from "../pages/LoginSignupPage";
import ProtectedRoute from "../wrapper/ProtectedRoutes";
import Error404 from "../pages/Error404";




const router=createBrowserRouter([
    {
        path:"/",
        element:<AppWrapper/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/product",
                children:[
                    {
                        index:true,
                        element:<Products/>
                    },
                    {
                        path: ':id',
                        element:<SingleProductCard/>
                    }
                ]
            },
            {
                path:"/blog",
                children:[
                    {
                        index:true,
                        element:<Blogs/>
                    },
                    {
                        path:":id",
                        element:<SingleBlog/>
                    }

                ]
            },
            {
                path:'/login',
                element:<LoginSignupPage/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/test',
                element:<ProfileTest/>
            },
            {
                path:'/profile',
                element:<Profile/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/cart',
                element:<ProtectedRoute><Cart/></ProtectedRoute>,
                // children:[
                //     {
                //         path:'/cart',
                //         element:<Cart/>
                //     },
                // ]

            },
            {
                path:"*",
                element: <Error404/>
            }

        ]
    },{
        path:"*",
        element: <Error404/>
    }
])
export const Allroutes = () => {
    return <RouterProvider router={router}  fallbackElement={<Loader/>}/>;
  };
  
