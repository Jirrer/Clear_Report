import React, { useState } from "react";

const BottemBar = ({ setActive }) => {
  const [data, setData] = useState([]);

  const handleScreenTimeButton = () => {
    setActive("ScreenTime");
  };

  const handleReportButton = () => {
  fetch("/SendEmailToUser") 
    .then(res => res.json())
    .then(data => console.log(data)) 
    .catch(err => console.error(err));
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
      <button id='reportButton' onClick={handleReportButton}>
      <img src='../../temp.svg'></img>
      </button>
      <button className='tempButton' onClick={() => handleTempButton('Temp Button Two')}>
      <img src='../../temp.svg'></img>
      </button>
      <button className='tempButton' onClick={() => handleTempButton('Temp Button Three')}>
      <img src='../../temp.svg'></img>
      </button>
    </div>

  )
}

export default BottemBar