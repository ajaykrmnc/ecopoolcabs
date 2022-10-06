import React, { useState, useEffect ,useContext} from "react";
import "./navbar.css"
import {Link, useNavigate } from "react-router-dom";
import {Dropdown} from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton';
import {AuthContext} from "context/AuthContext"

function Navbar({user}) {
  const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [view, setView] = useState(false);
    const switchView = () => { setView(!view) };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const Navigate=useNavigate();


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
    };
  console.log(user);
    

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  
  const {dispatch} = useContext(AuthContext)
  

    const handleLogout=(e)=>{
        dispatch({type:"LOGOUT", payload:user})
    }
    const handleLogin=(e)=>{
          Navigate('/auth');
        
    }

  return (
    <>
      <>
        <div className="header jusitfy-conent-between ">
          <div className="container saradiv my-2">
          <div className="d-flex navlogo">
          <h1 className="text-light">Ecopool Cab</h1>       
            <img
              src="ecopool.png"
              className="mx-2 imag"
              style={{ height: "47px", width: "80px" }}
              alt="..."
            />
          </div>
          {button && (
            <>
              <div className="d-flex align-items-center">
                <Link  className="link" to="/map">Book Your Cab ⚡</Link>
                {!user && <button className="btn btn-outline-light"  onClick={handleLogin}>Login</button>}
                { user&&<Dropdown className="button-group">
                      <Dropdown.Toggle  className="dropdowntoggle"id="dropdown-button-dark-example1" style={{background: 'transparent'}}>
                      <img src={user.photoURL} className="aadmi" alt="..." />
                      </Dropdown.Toggle>

                      <Dropdown.Menu variant="dark">
                        <Dropdown.Item as={Link} to="/map">Book Your Slot</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/providerlogin">Login as Partner</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/provider">Create Provider Account</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                }
              </div>
            </>
          )}
          {!button && (
            <>
              <div className="d-flex listphoto justify-content-between">
              <button onClick={switchView} className="tinlinevala" style={{zIndex: '2'}}>
                  <img src="list .png" style={{width: '2rem'}} alt="..." />
            
                </button>

                   <Dropdown className="d-flex align-items-center">
                      <Dropdown.Toggle  className="dropdowntoggle"id="dropdown-button-dark-example1" style={{background: 'transparent'}}>
                      <img src={user.photoURL} className="aadmi" alt="..." />
                      </Dropdown.Toggle>

                      <Dropdown.Menu variant="dark">
                        <Dropdown.Item as={Link} to="/map">Book Your Slot</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/client">Account Details</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Logout</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                
              </div>
            </>
          )}
        </div></div>
      </>

      {!button && (
        <>
          {view && (
            <>
              <ul className="bg-dark list">

                <li className="text-light">
                  <button type="button" class="btn btn-dark">
                    Home
                  </button>
                </li>
                <li className="text-light">
                  <button type="button" class="btn btn-dark">
                    Service
                  </button>
                </li>
                <li className="text-light">
                  <button type="button" class="btn btn-dark">
                    Products
                  </button>
                </li>
                <li className="text-light">
                  <button type="button" class="btn btn-outline-light">
                    SIGN UP
                  </button>
                </li>
              </ul>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Navbar;