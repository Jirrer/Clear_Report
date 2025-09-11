import React, { useState } from "react";

const BottemBar = ({ setActive }) => {
  const [data, setData] = useState([]);

  const handleScreenTimeButton = () => {
    setActive("ScreenTime"); // switch active screen
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
      <button className='tempButton' onClick={() => handleTempButton('Temp Button One')}>
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