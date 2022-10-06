import React, { useState } from "react";
import OneWay from "./OneWay";
import RoundTrip from "./RoundTrip";
import "./FirstTab.css";
const FirstTab = () => {

  const [activeTab, setActiveTab] = useState("roundtrip");
  const handleoneway = () => {
    setActiveTab('oneway')
  }
  const handleRoundTrip = () => {
    setActiveTab("roundtrip");
  }

  return (
    <div className="FirstTab">
      <div className="TripOptions">
        <div className="option">
          <input type="radio" name="radioOption" id="roundtrip" onClick={handleRoundTrip} />
          <label htmlFor="roundtrip">Round Trip</label>
        </div>
        <div className="option">
          <input type="radio" name="radioOption" id="oneway" onClick={handleoneway} />
          <label htmlFor="oneway">One Way Trip</label>
        </div>
      </div>
      <div className="outside">
        {activeTab === 'roundtrip' ? <RoundTrip /> : <OneWay />}
        </div>
      
    </div>
  );
};
export default FirstTab;

