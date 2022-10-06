import React,{useState,useRef} from 'react';
import axios from 'axios'
import "./style.css"
import {
    GoogleMap,
    Circle,
    Marker,
    DirectionsRenderer,
    useLoadScript,
    Autocomplete
} from "@react-google-maps/api";
import { API } from "config";
import { useNavigate } from 'react-router-dom';
import { stringify } from '@firebase/util';

  
const Provider = ({user}) => {
    const navigate=useNavigate();
    
    const [ libraries ] = useState(['places']);
    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()

    const [provider,setProvider]=useState({
        MobNo: 0,
        lat: 0,
        lng: 0,
        petrolpumpId: '',
        gstNo: '',
        Name: '', 
        placeId: '' ,
        email: '',
        userId: user.uid
        
    })
    const [view,setView]=useState(false);
    
    const [map, setMap] = useState(null);
    const [coords, setCoords] = useState({ lat: 28.58, lng: 77.23 });
    const [eror,setError]=useState("");


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_Map_APP_KEY,
        libraries,
    });
    
    if (!isLoaded) return <div>Loading...</div>;

    const handleChange=(e)=>{
        const { name, value } = e.target;
        setProvider({...provider,[name]: value})
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        await axios.post(`${API}/provider`,provider)
        .then(res=>{
            console.log(res);
            console.log(provider)
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
            alert("There is some error due to Network or Either any Provider already Exists with same PlaceID")
            console.log(provider);
        })
        navigate('/providerlogin');
        
    }
    //eslint-disable-next-line no-undef
    const service = new google.maps.places.PlacesService(map);
    function initialize(e) {
        // Create a map centered in Pyrmont, Sydney (Australia).
      
        // Search for Google's office in Australia.
        e.preventDefault();
        var request = {
          location: map.getCenter(),
          radius: '500',
          query: originRef.current.value
        };
        console.log(request);
        //eslint-disable-next-line no-undef
        var service = new google.maps.places.PlacesService(map);
        service.textSearch(request, callback);
        
      }
      
      // Checks that the PlacesServiceStatus is OK, and adds a marker
      // using the place ID and location from the PlacesService.
      function callback(results, status) {
        //eslint-disable-next-line no-undef
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          //eslint-disable-next-line no-undef
            new google.maps.Marker({
            map: map,
            place: {
              placeId: results[0].place_id,
              location: results[0].geometry.location
            }
          });
          map.panTo(results[0].geometry.location);
        }
        var str=(stringify(results[0].geometry.location))
        var json=(JSON.parse(str));
        console.log(json);
        
        setProvider({...provider,lat: json.lat,lng: json.lng,placeId: results[0].place_id});
        setView(true);
        console.log(results[0]);
      }
      


    return ( 
        <>
        <div>
            <img src='partner.png' alt="..." className='w-100' />
        </div>
        <div className='providerdiv'>
        <form className='m-4 properform bg-light form-control rounded'>
            <h1 className='text-info mb-4'>Enter your Details</h1>
            <div className="row">
                <div className="form-group col-md-6">
                <label>Name</label>
                <input type="text" className="form-control" name="lng"  onChange={handleChange}  placeholder="Name" />
                </div>
                <div className="form-group col-md-6">
                <label>Email</label>
                <input type="email" className="form-control" name="lat" onChange={handleChange} placeholder="Email" />
                </div>
            </div>
            <div className="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" className="form-control" name="petrolpump" onChange={handleChange}  placeholder="Enter the gas station Id" />
            </div>
            <div className="form-group">
                <label >GSTIN</label>
                <input type="text" className="form-control" name="gstNo" onChange={handleChange} placeholder="Enter the GST No"/>
                <label >Contact no</label>
                <input type="text" className="form-control" name="MobNo" onChange={handleChange} placeholder="Enter Mob No"/>
                <label >petrolpumpId</label>
                <input type="text" className="form-control" name="petrolpumpId" onChange={handleChange} placeholder="Enter the Gas_station_id"/>
                
            </div>
            <div className='d-flex justify-content-center' style={{postion: 'relative'}}>
                <GoogleMap
                    zoom={14}
                    center={coords}
                    mapContainerClassName="map-container"
                    mapContainerStyle={{ width: "100%", height: "380px" }}
                    onLoad={(map) => setMap(map)}
                    >
                    {map !== null && <Marker position={coords} />}
                </GoogleMap>
                <div style={{position: 'absolute',margin: "10px",width: '300px'}}>
                    <Autocomplete >
                        <input type='text' className="form-control" onBlur={initialize}  placeholder='Search a location' ref={originRef}/>
                    </Autocomplete>
                    
                </div>
                
           </div>
           {view&&
                <div className='row m-2'>
                    <input type="text col-6" className="form-control" disabled  placeholder={provider.lat}  />
                    <input type="text col-6" className='form-control' disabled placeholder={provider.lng}  />
                </div>}

           
          

    
            <button  onClick={handleSubmit} className="btn btn-primary my-4">Submit Detail</button>
            
            </form>
        </div>
       
        </>

     );
}
 
export default Provider;