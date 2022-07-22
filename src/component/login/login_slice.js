import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'user',
  initialState: {
   user:localStorage.getItem("password")

  },
  reducers: {
    login: (state,action) =>{
        state.user = true;
        console.log(state.user)
    },
    logout: (state) =>{
        state.user = false;
        
    },


  },
})

// Action creators are generated for each case reducer function
export const { login,logout } = loginSlice.actions
export const selectUser = (state) => state.user.user;
export default loginSlice.reducer