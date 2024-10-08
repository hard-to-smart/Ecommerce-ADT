import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AppWrapper from "../wrapper/AppWrapper";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Blogs from "../pages/Blogs";
import ProductsWrapper from "../wrapper/ProductWrapper";
import SingleProduct from "../pages/SingleProduct";
import SingleBlog from "../pages/SingleBlog";
import BlogsWrapper from "../wrapper/BlogsWrapper";
import ProtectedRoute from "../pages/ProtectedRoute";
import Cart from "../pages/Cart";
import Login from "../components/Login";

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
                element:<ProductsWrapper/>,
                children:[
                    {
                        index:true,
                        element:<Products/>
                    },
                    {
                        path:":id",
                        element:<SingleProduct/>
                    }
                ]
            },
            {
                path:"/blog",
                element:<BlogsWrapper/>,
                children:[
                    {
                        index:true,
                        element:<Blogs/>
                    },
                    {
                        path:"id",
                        element:<SingleBlog/>
                    }

                ]
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/',
                element:<ProtectedRoute/>,
                children:[
                    {
                        path:'cart',
                        element:<Cart/>
                    },
                ]
            }
        ]
    }
])
export const Allroutes = () => {
    return <RouterProvider router={router} />;
  };
  
