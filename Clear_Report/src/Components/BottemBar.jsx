import React from 'react'

const BottemBar = ({ setActive }) => {
  const handleScreenTimeButton = () => {
    console.log("ScreenTime button clicked");
    setActive('ScreenTime');
  }

  const handleTempButton = (e) => {
    console.log(`${e} is still being worked on`);
    setActive("UnderConstruction");
  }

  return (
    <div className='BottemBar'>
      <button id='ScreenTimeButton' onClick={handleScreenTimeButton}>

      </button>
      <button className='tempButton' onClick={() => handleTempButton('Temp Button One')}>
      
      </button>
      <button className='tempButton' onClick={() => handleTempButton('Temp Button Two')}>
      
      </button>
      <button className='tempButton' onClick={() => handleTempButton('Temp Button Three')}>
      
      </button>
    </div>

  )
}

export default BottemBar