import './dash.css';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { logout } from '../login/login_slice';


const Dashboard = () =>{
    // const navigate = useNavigate()

    // const nav =()=>{
    //     Navigate("/logout")
    // }

    const dispatch = useDispatch()

    return(
        <>
        <img className="img-dash" src="./images/dash.webp" alt='dashboard'/>
        {/* <Link to="/logout"> <button className='btn-btn'>LOG OUT</button> </Link> */}
        <button className='btn-btn'onClick={() =>{ localStorage.clear() ;dispatch(logout())}}>LOG OUT</button>
        </>
    )
}
export default Dashboard;