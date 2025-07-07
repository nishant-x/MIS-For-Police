import React, { useState } from 'react';
import './caseupdatebutton.css';

const CaseUpdateForm = () => {
  const [incident, setIncident] = useState('');
  const [investigation, setInvestigation] = useState('');
  const [statement, setStatement] = useState('');
  const caseNumber = 'ABC123'; // Replace with actual case number from props/context

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Case Updated Successfully');
  };

  const handleLogout = () => {
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

        <form onSubmit={handleSubmit}>
          <section className="pre_details">
            <label>Case Number: {caseNumber}</label>
          </section>

          <section className="case_details">
            <div className="incident">
              <h2>Incident Reports</h2>
              <div className="incident_reports">
                <textarea
                  placeholder=""
                  name="incident"
                  value={incident}
                  onChange={(e) => setIncident(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="investigation">
              <h2>Investigation Reports</h2>
              <div className="investigation_notes">
                <textarea
                  placeholder=""
                  name="investigation"
                  value={investigation}
                  onChange={(e) => setInvestigation(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="witness">
              <h2>Witness Statements</h2>
              <div className="witness_statments">
                <textarea
                  placeholder=""
                  name="statement"
                  value={statement}
                  onChange={(e) => setStatement(e.target.value)}
                ></textarea>
              </div>
            </div>
          </section>

          <div className="button">
            <button type="submit" className="submit" name="update">Update Case</button>
          </div>
        </form>

        <p><b>*NOTE: </b>Press the Complete Case Button When the Case is Solved.</p>
      </div>

      <footer>
        <p>© 2024 Ministry of Home Affairs, Madhya Pradesh. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default CaseUpdateForm;
