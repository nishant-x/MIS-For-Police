import React from 'react';
import StationHeader from '../HEAder/header';
import StationNav from './StationNAv';
import StationProfile from './Stationprofile';
import StationCaseStats from './StationCases';
import StationOrderPanel from './StationOrderpan';
import LeaveApproval from './StationLeaveApp';
import Footer from '../footr/Footer';
import './station_home.css';

const StationHome = () => {
  return (
    <div>
      <StationHeader />
      
      <Footer />
    </div>
  );
};

export default StationHome;