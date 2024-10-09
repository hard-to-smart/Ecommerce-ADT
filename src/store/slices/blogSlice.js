import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBlog } from "../../loader/fetchBlogs";

const initialState = {
    blogs:[],
    isLoading: false,
    error: null,
}

const blogSlice = createSlice({
    name:'blog',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        // builder.addCase(fetchBlog.pending, (state)=>{
        //     state.isLoading = true
        // })
        builder.addCase(fetchBlog.fulfilled, (state, action)=>{
            state.isLoading = false
            state.blogs = action.payload 
        })
        builder.addCase(fetchBlog.rejected, (state, action)=>{
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default blogSlice.reducer
export const selectorBlog = (state) => {return state.blog.blogs}
export const selectorBlogError = (state) => {return state.blog.error}