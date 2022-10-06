import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Success from 'components/success/success';
import Navbar from 'components/Navbar/Navbar';
import {API } from 'config'


const Providerdashboard = ({user}) => {
    const [Orders,setOrders]=useState([]);
    const [error,setError]=useState("");
    const [flag,setFlag]=useState(false);
    const getOrders=async()=>{
        await axios.get(`${API}/provider/order/${user.uid}`)
        .then(res=>{
            setOrders(JSON.stringify(res.data));
            const Data={...res.data[0]};
            console.log(Data);
            const array={...Data.orders};
            setOrders(array);
            setFlag(true);
        })
        .catch(err=>{
            console.log(err);
        })

    }
    useEffect(()=>{
        getOrders();
    },[])
    console.log(Orders);

    return ( 
        <>
        <Navbar  user={user}/>
        <div className="m-2">
        <div className="row d-flex justify-content-center">
        {Object.values(Orders).map((order)=>(
            <div className='col-md-4 col-sm-12 d-flex justify-content-center'>
            <div class="card m-2" style={{width: '18rem'}}>
            <div class="card-body">
              <h5 class="card-title">{order.Name}</h5>
              <p class="card-text">{order.MobNo}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>
        ))}
        </div>
        </div>
         
        </>
     );
}
 
export default Providerdashboard;