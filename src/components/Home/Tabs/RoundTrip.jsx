import React from 'react'
import './RoundTrip.css'

const RoundTrip = () => {
  return (
      <form className="roundtrip-info">
          <input type="text" name="pickup" id="pickup" placeholder='Enter pickup city'/>
          <input type="text" name='finaldes' id='finaldes' placeholder='Enter destination city' />
          <button>+Add More City</button>
          <input type="number" name="phoneno" id="phoneno" placeholder='Enter your mobile number +91' />
          <button id='submit'>Submit Cabs</button>
    </form>
  )
}

export default RoundTrip