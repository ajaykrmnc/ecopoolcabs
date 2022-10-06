import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { Routes, Route, Link, BrowserRouter,Navigate } from "react-router-dom";
import Signin from "components/Login/login";
import { AuthContext } from "context/AuthContext";
import Homepage from 'components/Home/homepage';

import Map from 'components/Map/map';
import Provider from 'components/provider/provider';
import Client from 'components/Consumer/client';
import Payment from 'components/Payments/stripepayment'
import Cancel from 'components/cancel';
import Success from 'components/success/success';
import Providerlogin from 'components/providerLogin/providerlogin';
import Providerdashboard from 'components/providerLogin/providerdashboard';
import Profile from 'components/Consumer/profile';
import Errorpage from 'Error/Errorpage';



function App() {
  const {currentUser} = useContext(AuthContext)
    const RequireAuth = ({ children }) => {
      return currentUser ? children : <Navigate to="/auth" />;
      
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            
            <Route path="auth" element={<Signin red="" />} />
            <Route exact path="provider" element={<Provider user={currentUser} />}/>
            <Route
              index
              element={
                  <Homepage currentUser={currentUser}/>
              }
            />


            <Route path="/client/:place_id" element={<Client user={currentUser}/>}  />
            <Route path="map"
             element={ <RequireAuth>
                 <Map/>
                </RequireAuth>}/>
            <Route path="success" element={ <RequireAuth>
                 <Success message="Your Payment is successful" redirect='' redirectMessage="Go to Home"/>
                </RequireAuth>}/>
            <Route path="cancel" element={ <RequireAuth>
                 <Cancel/>
                </RequireAuth>}/>
            <Route exact path="providerlogin" element={ <RequireAuth>
                 <Providerlogin user={currentUser}/>
                </RequireAuth>}/>
            <Route path="provider/dashboard" element={ <RequireAuth>
              <Providerdashboard user={currentUser} />
            </RequireAuth>}/>
            <Route path="profile" element={ <RequireAuth>
              <Profile user={currentUser} />
            </RequireAuth>}/>
            
  

          </Route>
            <Route exact path="payment" element={<Payment user={currentUser}/>}/>
            <Route path="*" element={<Errorpage/>}/>
           
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
