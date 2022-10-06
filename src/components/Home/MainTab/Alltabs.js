import React, { useState } from "react";
import FirstTab from "../Tabs/firsttab";
import SecondTab from "../Tabs/secondtab";
import './Tabs.css'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };

  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li className={activeTab === "tab1"?"active":""} onClick={handleTab1}>Outstation</li>
        <li className={activeTab === "tab2"?"active":""} onClick={handleTab2}>Local</li>
      </ul>
      <div className="outlet">
        {/* content will be shown here */}
        {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
  );
};
export default Tabs;
