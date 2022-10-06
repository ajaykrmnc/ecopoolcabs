import React,{Fragment} from "react";
import Media from "react-media";
const Mediaquery = ({small,medium,large}) => {
    return (
         <div className="">
          <Media
            queries={{
              small: "(max-width: 1199px)",
              large: "(min-width: 1199px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.small && (
                  {small}
                )}
                {matches.large && (
                  {large}
                )}
                {matches.medium&&{medium
                }}
              </Fragment>
            )}
          </Media>
        </div>
      );
}
 
export default Mediaquery;

{/* <div className='d-flex justify-content-center'>
               <div className='banner'>
                <div><img src='location.png' alt=".."/><h4>Locate</h4></div>
                <div><img src='charge.png' alt=".."/><h4>Book</h4></div>
                <div><img src='car.png' alt=".."/><h4>Swap</h4></div>
               </div>
            </div> */}


<div style={{backgroundColor: "#e0e0e0"}}>
          <div className='d-flex my-4'>
            <div style={{ width: "60%",marginLeft: '10rem' }} >
            
                <img src="roadmap.png"  class="w-100"  alt="..." />
            </div>

            <div style={{marginLeft: '10rem'}} >
                <div >
                  <h2 className='text-start' style={{color: "rgb(0 91 202)",marginBottom: '3rem'}}>Delievering <br />the latest technology</h2>
                <h4 className='text-start w-75 fw-light'> We are trying to make EV charging quick and convenient for you. Get access to our growing network of Public EV Charging points across the country on this Charge web app. Relax and enjoy your EV ride  no matter where you are going.</h4>
                <button className='btn btn-success btn-bg d-flex justify-content-center'>Book a slot</button>
                </div>
            </div>
          </div>
        </div>
  const search = () => {
    //eslint-disable-next-line no-undef
    const hotelService = new google.maps.places.PlacesService(map);
    const req = {
      radius: 3000,
      location: coords,
      types: ["gas_station"],
    };
    if (map !== null)
      hotelService.nearbySearch(req, (res, status) => {
        console.log(res);
        sethotels(res);
        //eslint-disable-next-line no-undef
        if (status === google.maps.places.PlacesServiceStatus.OK && res) {
          for (let i = 0; i < res.length; i++) {
            createMarker(res[i]);
          }
        }
      });
  };