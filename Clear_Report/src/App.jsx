import React, { useState } from 'react';
import BottemBar from './Components/BottemBar'
import ScreenTime from './Components/ScreenTime'
import LineChart from './Components/LineChart'
import WorkInProgress from './Components/WorkInProgress';
import './App.css';

const App = () => {
  const [active, setActive] = useState('ScreenTime');

  return (
    <>
    <div className='ScreenContent'>
      {active === 'ScreenTime' && <ScreenTime />}
      {active === 'UnderConstruction' && <WorkInProgress />}
    </div>
    <BottemBar setActive={setActive} />
    </>
  )
}

export default App