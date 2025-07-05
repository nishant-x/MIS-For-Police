import React, { useEffect, useState } from 'react';
import './caselistPHQ.css';
// import logo from '../assets/3logo3.png';
// import { useNavigate } from 'react-router-dom';                          

const CaselistPHQ = () => {
  const [search, setSearch] = useState('');
  const [cases, setCases] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCases();
  }, [search]);

  const fetchCases = async () => {
    try {
      const res = await fetch(`/api/phq/cases?search=${search}`);
      const data = await res.json();
      setCases(data);
    } catch (error) {
      console.error('Error fetching cases:', error);
    }
  };

  const handleLogout = () => {
    fetch('/api/logout')
      .then(() => {
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  const redirectToDetails = (caseNumber) => {
    navigate(`/view_case_details_phq/${caseNumber}`);
  };

  return (
    <div>
      <nav className="header">
        <p className="portal_name">MP Police Central Command</p>
        <img src={logo} alt="jawaan_img" />
      </nav>

      <div className="log">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <header>
        <h1>Case List</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Case.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="button" onClick={fetchCases}>Search</button>
        </form>
      </header>

      <div className="container">
        {cases.length > 0 ? (
          cases.map((c) => (
            <div className="jawan" key={c.case_number} onClick={() => redirectToDetails(c.case_number)}>
              <div className="jawan_details">
                <p><h4> Case No.: {c.case_number}</h4></p>
                <p><h4> Assigned officer: {c.jawaan_name}</h4></p>
                <p> Assigned Officer Contact No.: {c.contact}</p>
                <p> Crime Type: {c.crime_type}</p>
                <p> Date: {c.date}</p>
                <p> Crime Location: {c.location}</p>
                <p> Case Status: {c.case_status}</p>
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

export default CaselistPHQ;
