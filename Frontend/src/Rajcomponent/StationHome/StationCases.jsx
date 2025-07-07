import React from 'react';

const StationCaseStats = ({ stats }) => {
  const { total = 0, complete = 0, active = 0 } = stats || {};

  return (
    <div className="station_case" id="station_case">
      <h2>Case in this Station</h2>
      <div className="cases_details">
        <div className="total_case cases">Total Cases <span>{total}</span></div>
        <div className="complete_case cases">Completed Cases <span>{complete}</span></div>
        <div className="incomplete_case cases">Incomplete Cases <span>{active}</span></div>
      </div>
    </div>
  );
};

export default StationCaseStats;
