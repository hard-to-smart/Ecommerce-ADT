import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AppWrapper from "../wrapper/AppWrapper";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Blogs from "../pages/Blogs";
import ProductsWrapper from "../wrapper/ProductWrapper";
import SingleProduct from "../pages/SingleProduct";
import SingleBlog from "../pages/SingleBlog";
import BlogsWrapper from "../wrapper/BlogsWrapper";
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
                // element:<ProductsWrapper/>,
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
                // element:<BlogsWrapper/>,
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

            }

        ]
    }
])
export const Allroutes = () => {
    return <RouterProvider router={router}  fallbackElement={<Loader/>}/>;
  };
  
