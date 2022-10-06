import React from 'react';
import "./profile.css"
import {useState,useEffect} from 'react'
import axios from 'axios';
import { API } from "config";

const Profile = ({user}) => {
    const [view,setView]=useState(false);
    const [userData,setUserData]=useState();
    const [flag,setFlag]=useState(false);

    const getClient=async()=>{
      await axios.get(`${API}/client/${user.uid}`)
      .then(res=>{
          
          setClient({...client,MobNo: res.data[0].MobNo,Address: res.data[0].Address,count: res.data[0].order.length})
          setView(true);
      })
      .catch((err)=>{
        console.log(err);


      })

    }
    
  useEffect(()=>{
    getClient();
  },[view])
  const [client,setClient]=useState({
        MobNo: 0,
        Name: user.displayName, 
        Address: '',
        email: user.email,
        userId: user.uid, 
        count: 0,     
  })


  const handleChange=(e)=>{
      const { name, value } = e.target;
      setClient({...client,[name]: value})
  }
  const handleSubmit= async(e)=>{
      e.preventDefault();
      await axios.post(`${API}/client/`,client)
      .then(res=>{
         console.log(res);
        
        setFlag(true);
      })
      .catch(error=>{
          console.log(error);
          alert("Either there is network Error or the for the given gas station there no such Provider Exist")
      })

      
  }
  useEffect(()=>{
    getClient();
  },[flag])




    return (
         <>
         {view&&
         <div className='d-flex justify-content-center'>
                 <div className="cardi" style={{width: "20rem" }}>
                     <div class="parent">
                         <img class="image1" src="img1.jpg" alt="img1" />
                         <img class="image2" src={user.photoURL} alt='img2'/>
                     </div>
         
         
                         <div className="cardbody">
                             <h5 className="cardtitle">Name: {client.Name}</h5>
                             <p className="cardtext">Email: {client.email}</p>
                             <p className="cardtext">{client.Address}</p>
                             <p className="cardtext">MobNo: {client.MobNo}</p>
                             <p className="cardtext">your order in this month is:  {client.count} </p>
                             
                             
                             <a href="..." className=" btn btn-primary">Linkedin</a>
         
                         </div>
                 </div>
                 </div>
          }
         {
           !view&&<>
           <div className='d-flex justify-content-center align-items-center' style={{height: "vh100"}}>
           <form className=' w-50 bg-light p-4 formclass rounded'>
            <h1 className='text-dark mb-4'>Enter your additional Details</h1>
      
            <div className="form-group">
                <label >Contact no</label>
                <input type="text" className="form-control" name="MobNo" onChange={handleChange} placeholder="Enter Mob No"/>
                <label >Address</label>
                <input type="text" className="form-control" name="Address" onChange={handleChange} placeholder="Enter the Address"/>
                <label >Comment If any</label>
                <textarea type="text" className='form-control' name="comment" onChange={handleChange} placeholder="Comment" />
                
            </div>
            <div className='d-flex justify-content-center' style={{postion: 'relative'}}>

                
            </div>
                <button onClick={handleSubmit}  className="btn btn-primary my-4">Submit Detail</button>
            </form>
            </div>

           </>
         }

         
          </> 
    );
}
 
export default Profile;