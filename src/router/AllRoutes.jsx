import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AppWrapper from "../wrapper/AppWrapper";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Blogs from "../pages/Blogs";
import ProductsWrapper from "../wrapper/ProductWrapper";
import SingleProduct from "../pages/SingleProduct";
import SingleBlog from "../pages/SingleBlog";
import BlogsWrapper from "../wrapper/BlogsWrapper";
import LoginSignupPage from "../pages/LoginSignupPage";

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
                        path:":id",
                        element:<SingleProduct/>
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
                        path:"id",
                        element:<SingleBlog/>
                    }

                ]
            },
            {
                path:"/authenticate",
                element : <LoginSignupPage/>
            }

        ]
    }
])
export const Allroutes = () => {
    return <RouterProvider router={router} />;
  };
  
