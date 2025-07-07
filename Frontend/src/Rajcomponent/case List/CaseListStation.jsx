import React, { useEffect, useState } from 'react';
import './CaseListStation.css'; // external CSS file
import axios from 'axios';

const CaseListStation = () => {
  const [stationName, setStationName] = useState('');
  const [cases, setCases] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchStationDetails = async () => {
    try {
      const res = await axios.get('/api/station'); // Assumes you get station_name here
      setStationName(res.data.station_name);
    } catch (err) {
      console.error('Error fetching station details', err);
    }
  };

  const fetchCases = async () => {
    try {
      const res = await axios.get('/api/cases', {
        params: {
          search: searchQuery,
        },
      });
      setCases(res.data);
    } catch (err) {
      console.error('Error fetching cases', err);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.get('/api/logout');
      window.location.href = '/homepage';
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchCases();
  };

  const redirectToDetails = (caseNumber) => {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = '/view_case_details'; // Use backend route or React route

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'case_number';
    input.value = caseNumber;

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
  };

  useEffect(() => {
    fetchStationDetails();
    fetchCases();
  }, []);

  return (
    <div>
      <nav className="header">
        <p className="portal_name">MP Police Central Command</p>
        <img src="/3logo3.png" alt="jawaan_img" />
      </nav>

      <div className="top-bar">
        <h3 style={{ color: 'darkblue' }}>Station Name: {stationName}</h3>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <header>
        <h1>Case List</h1>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Search Case..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
      </header>

      <div className="container">
        {cases.length > 0 ? (
          cases.map((caseItem, index) => (
            <div
              key={index}
              className="jawan"
              onClick={() => redirectToDetails(caseItem.case_number)}
            >
              <div className="jawan_details">
                <p><strong>Case No.:</strong> {caseItem.case_number}</p>
                <p><strong>Assigned officer:</strong> {caseItem.jawaan_name}</p>
                <p><strong>Officer Contact No.:</strong> {caseItem.contact}</p>
                <p><strong>Crime Type:</strong> {caseItem.crime_type}</p>
                <p><strong>Date:</strong> {caseItem.date}</p>
                <p><strong>Location:</strong> {caseItem.location}</p>
                <p><strong>Status:</strong> {caseItem.case_status}</p>
                <p><strong>Station Name:</strong> {caseItem.station_name}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No data found.</p>
        )}
      </div>

      <footer>
        <p>© 2024 Ministry of Home Affairs, Madhya Pradesh. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default CaseListStation;
