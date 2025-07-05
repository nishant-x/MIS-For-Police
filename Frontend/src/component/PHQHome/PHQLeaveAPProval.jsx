import React, { useState, useEffect } from 'react';
import './LeaveApproval.css';

const LeaveApproval = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    // Fetch leave requests from the server (for demo, data is static)
    const fetchedRequests = [
      {
        jawaanName: 'John Doe',
        badgeNo: '12345',
        dateFrom: '2025-05-01',
        dateTo: '2025-05-10',
        reason: 'Medical Leave',
      },
    ];
    setLeaveRequests(fetchedRequests);
  }, []);

  return (
    <div className="leave_approval">
      <h2>Leave Approvals</h2>
      <div className="application_status">
        {leaveRequests.length > 0 ? (
          <table border="1">
            <thead>
              <tr>
                <th>JAWAAN NAME</th>
                <th>BADGE NO.</th>
                <th>START DATE</th>
                <th>END DATE</th>
                <th>TYPE OF LEAVE</th>
                <th colspan="3">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((request, index) => (
                <tr key={index}>
                  <td>{request.jawaanName}</td>
                  <td>{request.badgeNo}</td>
                  <td>{request.dateFrom}</td>
                  <td>{request.dateTo}</td>
                  <td>{request.reason}</td>
                  <td>
                    <button className="Approval_btn">Approve</button>
                    <button className="Rejected_btn">Reject</button>
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
};

export default LeaveApproval;
