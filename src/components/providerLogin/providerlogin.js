import React,{useState} from 'react';
import axios from 'axios';
import Success from 'components/success/success';
import {API} from "config"


const Providerlogin = ({user}) => {
    const [Orders,setOrders]=useState({});
    const [view,setView]=useState(false);
    const [error,setError]=useState("");
    const getOrders=async()=>{
        await axios.get(`${API}/provider/order/${user.uid}`)
        .then(res=>{
            console.log(res);
            setOrders(res);
        })
        .catch(err=>{
            console.log(err);
        })

    }

    return ( 
        <>
        { view &&    <button onClick={getOrders} >
            If you are a Provider Click here is</button>

        }
        {
            !view&& <Success message="Your Provider Account is verified" redirect='provider/dashboard' redirectMessage="Go to Dashboard"/>
        }
        </>
     );
}
 
export default Providerlogin;