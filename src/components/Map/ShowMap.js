import React from "react";
import { useMemo, useState, useRef, useEffect, Fragment } from "react";
import Skeleton from 'react-loading-skeleton'
import { useNavigate } from "react-router-dom";
import './style.css'

import {
  GoogleMap,
  Circle,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import {directions} from "react-bootstrap-icons"

import Form from "react-bootstrap/Form";

export default function Showmap({ width1, width2, className, pos }) {
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [coords, setCoords] = useState({ lat: 28.58, lng: 77.23 });
  const [duration, setDuration] = useState("");
  const originRef = useRef();
  const [flag, setFlag] = useState(false);
  const destinationRef = useRef();
  const [hotels, sethotels] = useState({});
  const [toggle,setToggle]= useState(false);

  const Navigate=useNavigate();

  function createMarker(place) {
    //eslint-disable-next-line no-undef
    new google.maps.Marker({
      position: place.geometry.location,
      map: map,
    });
  }


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
        setFlag(true);
      }
    );
  }, [map]);


  async function duriBatao(destination2) {
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: coords,
      destination: destination2,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    return (<>
     <h1>results.routes[0].legs[0].distance.text  </h1>
    <h1>JSON.stringify(results.routes[0].legs[0].start_location))</h1>
    </>)
  }
  async function dishaDikhao(destination2) {
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: coords,
      destination: destination2,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }
  const redirectToClient=(place_id)=>{
     Navigate(`/client/${place_id}`)
  }

  return (
    <div className={className} style={{ height: "100vh" }}>
      <div style={{width: width1}} className="left-of-map">
        <div className="top-left-map">
            <div><img src="list.png" style={{height: '30px'}} alt="..." /></div>
            <div><h3 className="m-0">Ecopool Cabs</h3></div>
            <div><p className="m-0">Login</p></div>
        </div>
        <div className="map-left-btn">
          <div><button className="btn btn-pill btn-sm btn-">DAILY-RIDES</button></div>
          <div><button className="btn btn-pill btn-sm">OUTSTATION</button></div>
          <div><button className="btn btn-success btn-sm badge-pill">RENTALS</button></div>
        </div>
        <div className="place-to-from-btn">
          <div className=""><input placeholder="To"></input></div>
          <div><input placeholder="From"></input></div>
          <div><input placeholder="Date"></input></div>

        </div>
       
      </div>


      <div
        style={{ right: "0", position: pos, height: "100vh", width: width2 }}
      >
        <GoogleMap
          zoom={14}
          center={coords}
          mapContainerClassName="map-container"
          mapContainerStyle={{ width: "100%", height: "100%" }}
          onLoad={(map) => setMap(map)}
        >
          {map !== null && <Marker position={coords} />}
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
          {flag && (
            <>
              <Circle center={coords} radius={1500} options={closeOptions} />
              <Circle center={coords} radius={4500} options={farOptions} />
            </>
          )}
        </GoogleMap>
      </div>
    </div>
  );
}


const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};
