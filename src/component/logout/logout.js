import './logout.css'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {logout} from '../login/login_slice';

import Dashboard from '../dashboard/dash';


const Logout = () =>{
    const dispatch = useDispatch()
   

   

    return(
        <>
        <div className="logout">
           <div className='header'>
            <ul className='ul-div'>
                <li className='li-1'>Icon</li>
                <li className='li-div'>Welcome To Page</li>
                {/* <li className='li-2'>LogOut</li> */}
                <button className='li-2'  onClick={() =>{ localStorage.clear() ;dispatch(logout())}}>LogOut</button>
            </ul>
           </div>
           <div className='image'>
                <img  className='img' src="./images/right.jpeg" alt="Sucessfull Login"/>
           </div>
        </div>
        </>
    )
}
export default Logout;