import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fullName: "",
    email: "",
    isLoading: false,
    error: null,
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setUserData(state, action) {
            state.fullName = action.payload.fullName || ""
            state.email = action.payload.email || ""
            state.isLoading = false
        },
        setLoading(state, action) {
            state.isLoading = action.payload
        },
        setError(state, action) {
            state.error = action.payload
        }
    }
})

export const { setUserData, setLoading, setError } = profileSlice.actions
export default profileSlice.reducer
