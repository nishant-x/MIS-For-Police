import React from 'react';
import './CaseDetails.css';

const CaseDetails = ({ totalCases, completedCases, incompleteCases }) => {
  return (
    <div className="station_case">
      <h2>Case in Bhopal</h2>
      <div className="cases_details">
        <div className="total_case cases">Total Cases <span>{totalCases}</span></div>
        <div className="complete_case cases">Completed Cases <span>{completedCases}</span></div>
        <div className="incomplete_case cases">Incomplete Cases <span>{incompleteCases}</span></div>
      </div>
    </div>
  );
};

export default CaseDetails;
