import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getBlogs } from "../utils/URLs";

export const fetchBlog = createAsyncThunk(
    'blog/fetchBlog', async () => {
       try{
           const response = await axios.get(getBlogs)
           console.log(response.data)
           return response.data
       }
       catch(error){
        console.log(error)
        return new Error(error);
       }
    }
)