import React, { useState } from "react";

const BottemBar = ({ setActive }) => {
  const [data, setData] = useState([]);

  const handleScreenTimeButton = () => {
    setActive("ScreenTime");
  };

  const handleReportButton = () => {
  setActive("ReportScreen")
};


  const handleTempButton = (e) => {
    console.log(`${e} is still being worked on`);
    setActive("UnderConstruction");
  }

  return (
    <div className='BottemBar'>
      <button id='ScreenTimeButton' onClick={handleScreenTimeButton}>
      <img src='../../screentime.svg'></img>
      </button>
      <button id='reportScreenButton' onClick={handleReportButton}>
      <img src='../../screenReport.svg'></img>
      </button>
      <button className='tempButton' onClick={() => handleTempButton('Temp Button Two')}>
      <img src='../../temp.svg'></img>
      </button>
      <button className='tempButton' onClick={() => handleTempButton('Temp Button Three')}>
      <img src='../../temp.svg'></img>
      </button>
      <p style={{ marginTop: "0px" }}>Screen Time</p>
      <p style={{ marginTop: "0px" }}>Report</p>
      <p style={{ marginTop: "0px" }}>Temp</p>
      <p style={{ marginTop: "0px" }}>Temp</p>
    </div>

  )
}

export default BottemBar