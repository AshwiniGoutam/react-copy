import './login.css'
import { Link } from 'react-router-dom';
import React, { useRef, useState } from "react";
import {useDispatch} from 'react-redux'
import validator from 'validator'
import {login} from '../login/login_slice';




const Login = () =>{

    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch()
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    console.log(password)
  const validate = (value) => {
 
   
    
  }
  const Submit=(e)=>{
    e.preventDefault();


    if (validator.isStrongPassword(password, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
      })) {
        setErrorMessage('Valid Password')
      } else {
        setErrorMessage('Invalid Password');
        return;
    }

    // if (validator.isEmail(userName, {
    //     minLength: 8, minLowercase: 1,
    //     minUppercase: 1, minNumbers: 1, minSymbols: 1
    //   })) {
    //     setErrorMessage('Valid Email')
    //   } else {
    //     setErrorMessage('Invalid username');
    //     return;
    // }
    localStorage.setItem('password', password);
    dispatch(login())
    
  };
  
    return(
        <>
        <div className='form'>
        <img className='img-1' src='./images/index.png' alt='logo'/>
            <div className='form-div'>
            <label>Username</label><br/>
            <input type="text" placeholder="Enter your name" id="username"></input>
              <br/>
            <label>Password</label><br/>
            <input type="password" placeholder="Enter your password"  id="userpassword"  onChange={(e) => setPassword(e.target.value)} ></input><br/>
              {errorMessage === '' ? null :
                <span style={{
                  fontWeight: 'bold',   
                  color: 'red',
               }}>{errorMessage}</span>}<br/>
            <button className='btn'  onClick={(e) =>Submit(e)}>Submit</button>
            </div>
        </div>
        </>
    )
}
export default Login;