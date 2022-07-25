import './dash.css';
import {useDispatch} from 'react-redux'
import { logout } from '../login/login_slice';
import axios from 'axios';
import { useState,useEffect } from "react";


const Dashboard = () =>{
    const dispatch = useDispatch()

    const [apiResponse, setApiResponse] = useState([]);

    useEffect(()=>{
        axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline').then((response)=>{
       
        setApiResponse(response.data)
        }).catch(err=>{
            console.log(err)
        })

    },[])
    return(
        <>
        <img className="img-dash" src="./images/dash.webp" alt='dashboard'/>
        {/* <Link to="/logout"> <button className='btn-btn'>LOG OUT</button> </Link> */}
        <button className='btn-btn'onClick={() =>{ localStorage.clear() ;dispatch(logout())}}>LOG OUT</button>

        {
        apiResponse?.map((Element)=>{
             return (
                <>
                    <p>{Element?.id}</p>
                    <p>{Element?.brand}</p>
                    <p>{Element.description}</p>
                    <img src={Element?.image_link} alt='img' />
                    <p>{Element?.name}</p>
                    <p>{Element?.price}</p>
                </> 
            )
        })
    }

        </>

    )
}
export default Dashboard;