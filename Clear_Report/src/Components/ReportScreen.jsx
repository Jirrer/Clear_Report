import React from 'react'


const sendReport = () => {
    fetch("/SendEmailToUser")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

const ReportScreen = () => { // add time limit of amount of times you can send an email
  return (
    <div className='ReportScreen'>
        <div id='reportScreenLogo'>test</div>
        <button id='viewReport'>
        View Report
        </button>
        <button id='editReport'>
        Edit Report
        </button>
        <button id='sendReport' onClick={sendReport}>
        Email Report
        </button>
        

    </div>
  )
}

export default ReportScreen