import React from "react";
import { Link } from "react-router-dom";

const Error=()=>{

   return(<>
   <Link to="/" className="btn btn-success d-flex justify-content-center">Go to Home</Link>
   <div className="error d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
      <img 
        style={{height: '100vh',width: '100vw',maxWidth: '25rem',maxHeight: '30rem'}}src="error404.png" alt="..."/>
  
      </div>
      
    </>)

}

export default Error;