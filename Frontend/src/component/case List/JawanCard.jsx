import React from 'react';
// import './JawanCard.css';

const JawanCard = ({ data }) => {
  return (
    <div className="jawan">
      <div className="jawan_details">
        <h4>Case No.: {data.case_number}</h4>
        <p>Assigned Officer: {data.jawaan_name}</p>
        <p>Crime Type: {data.crime_type}</p>
        <p>Date: {data.date}</p>
        <p>Crime Location: {data.location}</p>
        <p>Case Status: {data.status}</p>
      </div>
    </div>
    
  );
};

export default JawanCard;
