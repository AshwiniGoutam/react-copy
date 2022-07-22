import React from 'react'
import ReactDOM from 'react-dom/client'
import {Counter} from './component/counter/counter.js'
import { useSelector } from 'react-redux'
import Login from './component/login/login.js'
import Logout from './component/logout/logout.js'
import { Navigate } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes 
} from "react-router-dom";
import Dashboard from './component/dashboard/dash.js'


const App =() =>{
  const details=useSelector((state)=>state.Login.user)
  const user = useSelector((state)=>state.Login.user)

  console.log(user)
  
return(
  <>
    
      <Router>
          <Routes>
        
          <Route exact path="/login" element={details?<Navigate to="/dashboard" replace={true}/>:<Login/>}/>
          
                <Route exact path="/dashboard" element={details?<Dashboard/>:<Navigate to ="/login" replace={true}/>}></Route> 

          </Routes>
      </Router>

      
  </>
  )
}

export default App;