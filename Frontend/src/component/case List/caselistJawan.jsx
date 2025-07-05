import React, { useState, useEffect } from 'react';
import JawanCard from './JawanCard';
import './caselistJawan.css';

const JawanList = () => {
  const [cases, setCases] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Replace with your actual API call
    fetch('http://localhost:5000/api/jawan/cases') // Replace with backend endpoint
      .then(res => res.json())
      .then(data => setCases(data))
      .catch(err => console.error(err));
  }, []);

  const filteredCases = cases.filter(c =>
    c.case_number.toLowerCase().includes(search.toLowerCase()) ||
    c.crime_type.toLowerCase().includes(search.toLowerCase()) ||
    c.status.toLowerCase().includes(search.toLowerCase()) ||
    c.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <nav className="header">
        <p className="portal_name">MP Police Central Command</p>
        <img src="/3logo3.png" alt="jawaan_img" />
      </nav>

      <header>
        <h1>Case List</h1>
        <input
          type="text"
          placeholder="Search Jawans.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <div className="container">
        {filteredCases.length > 0 ? (
          filteredCases.map((item, index) => (
            <JawanCard key={index} data={item} />
          ))
        ) : (
          <p>No data found.</p>
        )}
      </div>

    
    </>
  );
};

export default JawanList;
