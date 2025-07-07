import React, { useState } from 'react';
import './CasetUpdate.css';

const CaseReportUpdate = () => {
  const [caseNumber, setCaseNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect or call API logic here
    alert(`Case number submitted: ${caseNumber}`);
  };

  const handleLogout = () => {
    // You can replace this with an actual API/logout logic
    alert('Logged out');
    window.location.href = '/homepage';
  };

  return (
    <div>
      <nav className="header">
        <p className="portal_name">MP Police Central Command</p>
        <img src="/3logo3.png" alt="logo" />
      </nav>

      <div className="log">
        <form id="logout" onSubmit={(e) => { e.preventDefault(); handleLogout(); }}>
          <button className="logout-btn" type="submit">Logout</button>
        </form>
      </div>

      <div className="main_content">
        <div className="heading">
          <h2><b>UPDATE CASE REPORT</b></h2>
        </div>

        <section className="pre_details">
          <form onSubmit={handleSubmit}>
            <label htmlFor="caseNumber">Case Number:</label>
            <input
              type="text"
              placeholder="Enter Case Number"
              id="caseNumber"
              name="case_number"
              value={caseNumber}
              onChange={(e) => setCaseNumber(e.target.value)}
            />
            <button type="submit" className="update">Update</button>
          </form>
        </section>

        <footer>
          <p>© 2024 Ministry of Home Affairs, Madhya Pradesh. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default CaseReportUpdate;
