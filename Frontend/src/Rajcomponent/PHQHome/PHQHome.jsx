import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import CaseDetails from './components/CaseDetails';
import LeaveApproval from './components/LeaveApproval';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main_container">
        <Sidebar />
        <div className="station_details">
          <Profile
            phqId="PHQ123456"
            phqPincode="462001"
            phqAddress="Bhopal, Madhya Pradesh"
            phqImage=""
          />
          <CaseDetails
            totalCases={100}
            completedCases={50}
            incompleteCases={50}
          />
          <LeaveApproval />
        </div>
      </div>
    </div>
  );
};

export default App;
