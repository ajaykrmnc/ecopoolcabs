import React from "react";
import './SecondTab.css'

const SecondTab = () => {
  return (
    <form className="secondtab-info">
<input type="text" name="pickup" id="secondtab-city" placeholder='Seclect city'/>
<input type="text" name='finaldes' id='secondtab-package' placeholder='Select package' />
<input type="number" name="phoneno" id="secondtab-phoneno" placeholder='Enter your mobile number +91' />
<button id='secondtab-submit'>Submit Cabs</button>
</form>
  );
};
export default SecondTab;