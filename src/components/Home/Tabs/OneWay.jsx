import React from 'react'
import './OneWay.css'
const OneWay = () => {
  return (
      <form className="oneway-info">
          <p >*For Multiple Stops, Choose Round Trip</p>
    <input type="text" name="pickup" id="onewayPickup" placeholder='Enter pickup city'/>
    <input type="text" name='finaldes' id='onewayFinaldes' placeholder='Enter destination city' />
    <input type="number" name="phoneno" id="onewayPhoneno" placeholder='Enter your mobile number +91' />
    <button id='submit'>Submit Cabs</button>
</form>
  )
}

export default OneWay