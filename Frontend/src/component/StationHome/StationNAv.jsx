import React from 'react';
// import { useNavigate } from 'react-router-dom';

const StationNav = () => {
//   const navigate = useNavigate();

  const logout = () => {
    // Add logout logic here
    navigate('/login_station');
  };

  return (
    <div className="nav_bar">
      <a href="/station_profile">Station Profile</a>
      <a href="/case_list_station">Case Details</a>
      <a href="/allot_case">Allot Case</a>
      <a href="/orderpanelforstation">Order Panel</a>
      <a href="#leave_approval">Leave Approval</a>
      <a href="/jawan_list_station">Jawans List</a>
      <a href="/station_list">Other Station Details</a>
      <a onClick={logout}>Logout</a>
    </div>
  );
};

export default StationNav;