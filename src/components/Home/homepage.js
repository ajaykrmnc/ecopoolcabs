import React, { Fragment, useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Media from "react-media";
import "./homepage.css";
import Topbar from "components/Navbar/Navbar";
import { Obj, flowchart, Peoplesay, bookways } from "./Object";
import axios from "axios";
import Chat from "./Chat";
import { Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import Corousel from "./corousel";
import Tabs from "./MainTab/Alltabs";

const Homepage = ({ currentUser }) => {
  const [view, setView] = React.useState(false);
  const [people,setPeople]=useState("ankita");
  const [peopleImg,setPeopleImg]=useState("ankita.jpeg");
  const [PeoplesayObj,setPeoplesayObj]=useState("peoplesay.ankita");

  const [message, setMessage] = React.useState({ message: "" });
  const handleChange = (e) => {
    setMessage({ message: e.target.value });
  };
  const [chota, setChota] = useState(true);

  const switchView = () => {
    setView(!view);
  };
  const navigate = useNavigate();
  const routechange = () => {
    navigate("/map");
  };

  const showChota = () => {
    if (window.innerWidth > 960) {
      setChota(false);
    } else {
      setChota(true);
    }
  };

  useEffect(() => {
    showChota();
  }, []);

  const switchPeople = (e) =>{
    setPeople(e);
    const img=e+".jpeg";
    setPeopleImg(img);
    const sayObj="peoplesay."+e;
    setPeoplesayObj(sayObj);  
  }


  window.addEventListener("resize", showChota);

  return (
    <>
      {/* //Topbar */}
      <Topbar user={currentUser} />
      
        <>
          <div className="samnevla text-dark">
            <div className="absimage">
              <img src="homepage.jpg" alt=".." />

              
              <div
                className="samnevalacontent"
                style={{ width: "36%" }}>
               <Tabs/>
        
              </div>
              
            </div>

            <div>
              <div className="bottom-banner"></div>
            </div>
          </div>
        </>
      <div class="revolution ">
        <h3 class="text-center mb-2">Partner with Us</h3>
        <div className="d-flex justify-content-center">
          <button
            className=" btn btn-success"
            type="button"
            onClick={routechange}
          >
            Join The Revolution
          </button>
        </div>
      </div>

      {/* benifit three cards */}
      <div className="container">
        <h1>A car for every Occasion</h1>
        <p>{bookways.topic}</p>

      </div>
      <div class="container my-4">
        <div class="row threecards">
          <div class="col-lg-4 col-md-6 d-flex justify-content-start card1">
            <div
              className="cards"
            >
              <div class="benifits">
                <img src="card-1.jpeg" alt="far" />
                <div className="card-text">
                <h5 className="card-topic" >CITY TAXI</h5>
                <p className="card-content">
                  {bookways.rental}
                </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex justify-content-center card2">
            <div
              className="cards"
            >
              <div
                class="benifits">
                <img src="card-2.jpeg" alt="..." />
                <div className="card-text">
                <h5 className="card-topic">RENTAL</h5>
                <p className="card-content">{bookways.citytaxi}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex justify-content-end card3">
            <div
              className="cards"
            >
              <div
                class="benifits">
                <img src="card-3.jpeg" alt="..." />
                <div className="card-text">
                <h5 className="card-topic">OUTSTATION</h5>
                <p className="card-content">
                 {bookways.outstation}
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* carousel */}
      <div className="container-fluid" style={{marginLeft: '0'}}>
      <div className="row"> 
          <div className="col-lg-6">
            <Corousel/>

          </div>
          <div className="col-lg-6">
            <h3>Enjoy the popular ride</h3>
          </div>
        </div>
      </div>
      


      
      {/* //testomonial  */}
      <div className="testimonial">
        <div class="peoplesay container-fluid bg-light">

          <h1 className="text-center ">Meet our satisfied Customers</h1>

          <div>
            <div className="row justify-content-around">
              <div className="people col-lg-4 col-md-6" onClick={()=>switchPeople("saloni")}>
                <img src="saloni.jpeg" style={{ height: "120px" }} />
                <div className="d-flex align-items-center">
                  <h5>&nbsp;&nbsp;Saloni</h5>
                  <hr />
                </div>
              </div>
              <div className=" people col-lg-4 col-md-6" onClick={()=>switchPeople("ankita")}>
                <img src="ankita.jpeg" style={{ height: "120px" }} alt=".." />
                <div className="d-flex align-items-center">
                  <h5>&nbsp;&nbsp;Saloni</h5>
                </div>
              </div>
              <div className="people col-lg-4 col-md-6" onClick={()=>switchPeople("harshit")}>
                <img src="harshit.jpeg" style={{ height: "120px" }} alt="..." />
                <div className="d-flex align-items-center">
                  <h5>&nbsp;&nbsp;Harshit</h5>
                </div>
              </div>
            </div>
          </div>
            <div className="individualsay container">
              <img src={peopleImg} alt="..." />
              &nbsp;&nbsp;
              <div>
                <h6>{PeoplesayObj}</h6>
                <h5>{people}</h5>
                <h6>Kolkata,Bengal</h6>
              </div>
            </div>
          
      </div>
      </div>

      {/* cards */}

      


      <Contact />
      <Chat />
      <Footer />

    </>
  );
};

export default Homepage;
