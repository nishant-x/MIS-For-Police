import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="nav_bar">
      <a href="phq_profile.php">PHQ PROFILE</a>
      <a href="orderpanelforPHQ.php">ORDER PANEL</a>
      <a href="station_list.php">Station details</a>
      <a href="jawan_list.php">Jawan details</a>
      <a href="case_list_phq.php">Case details</a>
      <a href="transfere.php">Transfer</a>
      <a href="#leave_approval">Leave Approval</a>
      <a href="?logout=true">Logout</a>
    </div>
  );
};

export default Sidebar;
