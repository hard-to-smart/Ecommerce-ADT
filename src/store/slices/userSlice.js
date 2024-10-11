
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,     
    isAuth: !!localStorage.getItem('accessToken'), 
    status: 'idle',  
    error: null      
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.user = action.payload.user;
            state.isAuth = true; 
        },
        clearUserData: (state) => {
            state.user = null;
            state.isAuth = false; 
            state.accessToken = null;
            localStorage.removeItem('accessToken'); 
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setUserData, clearUserData, setStatus, setError } = userSlice.actions;

export default userSlice.reducer;
