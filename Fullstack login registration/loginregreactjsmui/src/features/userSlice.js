import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    email : "",
    name: "",
}
const userSlice = createSlice({
   name : 'user_info',
   initialState,
   reducers:{
    setUserInfo:(state ,action) =>{
        state.email = action.payload.email
        state.name = action.payload.name
    },
    unsetUserInfo:(state ,action) =>{
        state.email = action.payload.email
        state.name = action.payload.name
    },
   },
})
export default userSlice.reducer
export const { setUserInfo , unsetUserInfo } = userSlice.actions
