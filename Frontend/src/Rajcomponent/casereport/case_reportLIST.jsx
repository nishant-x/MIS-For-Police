import React, { useState } from 'react';
import './CaseReportList.css';

const dummyCases = [
  {
    case_number: 'CASE001',
    jawaan_name: 'Raj Kumar',
    crime_type: 'Theft',
    date: '2024-04-01',
    location: 'Bhopal',
    status: 'Under Investigation'
  },
];

const CaseReportList = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const handleViewCase = (caseData) => {
    setSelectedCase(caseData);
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

      {!selectedCase ? (
        <>
          <header>
            <h1>Case List</h1>
            <form>
              <input type="text" placeholder="Search Cases.." />
              <button type="submit">Search</button>
            </form>
          </header>

          {dummyCases.map((c) => (
            <div className='case-details' key={c.case_number} onClick={() => handleViewCase(c)}>
              <h4>Case No.: {c.case_number}</h4>
              <p>Assigned Officer: {c.jawaan_name}</p>
              <p>Crime Type: {c.crime_type}</p>
              <p>Date: {c.date}</p>
              <p>Crime Location: {c.location}</p>
              <p>Case Status: {c.status}</p>
            </div>
          ))}
        </>
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
                <textarea placeholder="Incident details..."></textarea>
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
                <textarea placeholder="Witness statements..."></textarea>
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
                <textarea placeholder="Investigation notes..."></textarea>
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
