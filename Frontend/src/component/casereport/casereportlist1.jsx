import React, { useState } from 'react';
import './cassereportLIST1';

const CaseReportList = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const dummyCases = [
    {
      case_number: 'CASE123',
      status: 'Open',
      jawaan_id: 'J123',
      location: 'Bhopal',
      crime_type: 'Theft',
    },
  ];

  const handleViewCase = (c) => {
    setSelectedCase(c);
  };

  const handleBack = () => {
    setSelectedCase(null);
  };

  return (
    <div>
      <nav className="header">
        <p className="portal_name">MP Police Central Command</p>
        <img src="/3logo3.png" alt="Logo" />
      </nav>

      <header>
        <h1>Case List</h1>
        <form>
          <input type="text" placeholder="Search Cases.." />
          <button type="submit">Search</button>
        </form>
      </header>

      {!selectedCase ? (
        <div className="container">
          {dummyCases.map((c, idx) => (
            <div className="case" key={idx} onClick={() => handleViewCase(c)}>
              <div className="case-details">
                <p>Case Number: <span>{c.case_number}</span></p>
                <p>Status: <span>{c.status}</span></p>
                <p>Assigned Officer: <span>{c.jawaan_id}</span></p>
                <p>Location: <span>{c.location}</span></p>
                <p>Crime type: <span>{c.crime_type}</span></p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="main_content">
          <div className="heading">CASE REPORT</div>

          <section className="case_details">
            <div className="incident">
              <h2>Incident Reports</h2>
              <div className="incident_details">
                <div className="display_list"></div>
                <button className="add">Add</button>
              </div>
              <div className="incident_reports">
                <textarea placeholder=""></textarea>
                <button className="update">Update</button>
              </div>
            </div>

            <div className="witness">
              <h2>Witness Statements</h2>
              <div className="witness_details">
                <div className="display_list"></div>
                <button className="add">Add</button>
              </div>
              <div className="witness_statments">
                <textarea></textarea>
                <button className="update">Update</button>
              </div>
            </div>

            <div className="investigation">
              <h2>Investigation Notes</h2>
              <div className="investigation_details">
                <div className="display_list"></div>
                <button className="add">Add</button>
              </div>
              <div className="investigation_notes">
                <textarea placeholder=""></textarea>
                <button className="update">Update</button>
              </div>
            </div>

            <div className="evidence">
              <h2>Evidence Collection</h2>
              <div className="evidence_details">
                <div className="display_list"></div>
                <button className="add">Add</button>
              </div>
              <div className="evidence_collection">
                <input type="file" />
                <button className="update">Update</button>
              </div>
            </div>

            <div className="documentation">
              <h2>Documentation</h2>
              <div className="documentation_details">
                <div className="display_list"></div>
                <button className="add">Add</button>
              </div>
              <div className="documentation_collection">
                <input type="file" />
                <button className="update">Update</button>
              </div>
            </div>
          </section>

          <div className="button">
            <button className="submit" onClick={handleBack}>Submit Case</button>
            <button className="submit" onClick={handleBack}>Case Complete</button>
          </div>
        </div>
      )}

      <footer>
        <p>© 2024 Ministry of Home Affairs, Madhya Pradesh. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default CaseReportList;
