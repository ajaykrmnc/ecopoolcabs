import { useContext, useEffect, useState } from "react";
import "./style.css";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { auth,provider } from "fireboss";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "context/AuthContext"
import { Google } from "react-bootstrap-icons";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup,setIsSignup]= useState(false);
  const switchMode=()=>
  {
     setIsSignup(!isSignup);
  }

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)


  const handleLogin = (e) => {
    e.preventDefault();
    if(!isSignup)
    {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          dispatch({type:"LOGIN", payload:user})
          navigate(-1)
        })
        .catch((error) => {
          setError(true);
          console.log(error);
        });

    }
    else
    {

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          dispatch({type:"LOGIN", payload:user})
          console.log(user);
          navigate(-1)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(true);
          console.log(error);
          alert(errorCode+errorMessage);
        });
      
    }
  };
  const googleLogin=()=>
  {
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        dispatch({type:"LOGIN", payload:user})
        navigate(-1)
        
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  }


  return (
    <div className="d-flex justify-content-center align-items-center " style={{height: "80vh"}} >

    <div className="h-custom login bg-light form-body">
       <h2 className="text-center text-primary font-weight-bolder">{isSignup? 'Signup': 'Login' }</h2>
      {error&& !isSignup && <span className="text-danger text-center pb-2 ">Wrong email or password!</span>}
      <form onSubmit={handleLogin}>
        <div className="form-group input-group-lg">
        <label className="text-start">
          Email
        </label>
        <input
          type="email"
          placeholder="email"
          aria-label="Large"
          className="form-control  mt-1 mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          password
        </label>
        <input
          type="password"
          placeholder="password"
          className="form-control mt-1 mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-md  p-2 btn-primary w-100">{ isSignup ? 'SignUp' : 'Login'}</button>
        </div>
        
      </form>
      {
        (!isSignup)&&

          <div>
            <button className="btn btn-danger p-2 w-100 mt-2" onClick={googleLogin}>
              <Google /> Signin using Google account

            </button>
          </div>
      }
      <button className="mt-3 p-0 btn btn-light" onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "New to Memories? Sign Up" }
      </button>
      
    </div>
    </div>
  );
};

export default Login;
