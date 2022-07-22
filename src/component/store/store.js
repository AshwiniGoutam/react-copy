import { configureStore } from '@reduxjs/toolkit'
import Login from '../login/login'
import userReducer from '../login/login_slice'
import LoginReducer from '../login/login_slice.js'
import LogoutReducer from '../login/login_slice.js'

export default configureStore({
  reducer: {
    
    Login:LoginReducer,
    Logout:LogoutReducer,
    

  },
})