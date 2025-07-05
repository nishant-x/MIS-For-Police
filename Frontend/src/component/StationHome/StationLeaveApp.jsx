import React from 'react';

const LeaveApproval = ({ applications = [] }) => (
  <div className="leave_approval" id="leave_approval">
    <h2>Leave Approvals</h2>
    <div className="application_status">
      {applications.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>JAWAAN NAME</th>
              <th>BADGE NO.</th>
              <th>START DATE</th>
              <th>END DATE</th>
              <th>TYPE OF LEAVE</th>
              <th colSpan="3">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, idx) => (
              <tr key={idx}>
                <td>{app.name}</td>
                <td>{app.badge}</td>
                <td>{app.from}</td>
                <td>{app.to}</td>
                <td>{app.type}</td>
                <td>
                  <button className="Approval_btn">Approve</button>
                  <button className="Rejected_btn">Deny</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No leave applications found.</p>
      )}
    </div>
  </div>
);

export default LeaveApproval;