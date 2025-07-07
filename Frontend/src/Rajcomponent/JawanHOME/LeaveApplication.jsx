import React, { useEffect, useState } from 'react';
import './LeaveApplication.css';

const LeaveApplication = () => {
    const [leaveApplications, setLeaveApplications] = useState([]);

    useEffect(() => {
        // Example leave application data
        setLeaveApplications([
            { start: '2024-04-01', end: '2024-04-05', id: '12345', type: 'Sick Leave', status: 'Approved' },
            { start: '2024-05-01', end: '2024-05-07', id: '12346', type: 'Casual Leave', status: 'Pending' },
        ]);
    }, []);

    return (
        <div className="leave_application" id="leave-application">
            <h2>LEAVE APPLICATION</h2>
            <div className="application_status">
                {leaveApplications.length > 0 ? (
                    <table border="1">
                        <thead>
                            <tr>
                                <th>START DATE</th>
                                <th>END DATE</th>
                                <th>APPLICATION ID</th>
                                <th>TYPE OF LEAVE</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaveApplications.map((application, index) => (
                                <tr key={index}>
                                    <td>{application.start}</td>
                                    <td>{application.end}</td>
                                    <td>{application.id}</td>
                                    <td>{application.type}</td>
                                    <td>{application.status}</td>
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

export default LeaveApplication;
