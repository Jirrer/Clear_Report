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
      <img src='../../public/screentime.svg'></img>
      </button>
      <button className='tempButton' onClick={() => handleTempButton('Temp Button One')}>
      <img src='../../public/temp.svg'></img>
      </button>
      <button className='tempButton' onClick={() => handleTempButton('Temp Button Two')}>
      <img src='../../public/temp.svg'></img>
      </button>
      <button className='tempButton' onClick={() => handleTempButton('Temp Button Three')}>
      <img src='../../public/temp.svg'></img>
      </button>
    </div>

  )
}

export default BottemBar